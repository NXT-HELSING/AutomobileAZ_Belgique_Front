import { useEffect, useRef } from 'react';
import { useTranslator } from 'react-google-translate-mj';

const AutoTranslateDOM = () => {
    const { currentLanguage, defaultLanguage, translate } = useTranslator();
    const observerRef = useRef(null);
    const translatingRef = useRef(false);

    useEffect(() => {
        const isDefault = currentLanguage === defaultLanguage || !currentLanguage;
        let active = true;

        const translateNode = async (node) => {
            if (node.__originalText === undefined) {
                node.__originalText = node.nodeValue || '';
            }

            const originalText = node.__originalText;
            if (!originalText || !originalText.trim()) return;

            if (isDefault) {
                if (node.nodeValue !== originalText) {
                    node.nodeValue = originalText;
                }
                node.__currentTranslationLanguage = defaultLanguage;
                return;
            }

            if (node.__currentTranslationLanguage === currentLanguage) {
                return;
            }

            try {
                const translated = await translate(originalText);
                if (active) {
                    node.__currentTranslationLanguage = currentLanguage;
                    node.nodeValue = translated;
                }
            } catch (err) {
                console.error('Failed to translate node:', originalText, err);
            }
        };

        const walkAndTranslate = (element) => {
            if (!element) return;
            const ignoredTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION'];
            if (ignoredTags.includes(element.tagName)) return;

            let child = element.firstChild;
            while (child) {
                if (child.nodeType === Node.TEXT_NODE) {
                    translateNode(child);
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    walkAndTranslate(child);
                }
                child = child.nextSibling;
            }
        };

        const rootElement = document.getElementById('root') || document.body;
        walkAndTranslate(rootElement);

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new MutationObserver((mutations) => {
            if (translatingRef.current) return;

            translatingRef.current = true;
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            translateNode(node);
                        } else if (node.nodeType === Node.ELEMENT_NODE) {
                            walkAndTranslate(node);
                        }
                    });
                } else if (mutation.type === 'characterData') {
                    const node = mutation.target;
                    if (node.__currentTranslationLanguage !== currentLanguage) {
                        node.__originalText = node.nodeValue || '';
                        node.__currentTranslationLanguage = undefined;
                        translateNode(node);
                    }
                }
            });
            translatingRef.current = false;
        });

        observerRef.current.observe(rootElement, {
            childList: true,
            subtree: true,
            characterData: true,
        });

        return () => {
            active = false;
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [currentLanguage, defaultLanguage, translate]);

    return null;
};

export default AutoTranslateDOM;

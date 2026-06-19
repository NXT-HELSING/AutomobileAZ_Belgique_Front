import React from 'react';
import { useTranslator } from 'react-google-translate-mj';
import { Dropdown } from 'react-bootstrap';

const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' }
];

const LanguageSelector = () => {
    const { currentLanguage, setLanguage } = useTranslator();

    const currentLangCode = currentLanguage || 'fr';
    const selectedLang = languages.find(lang => lang.code === currentLangCode) || languages[0];

    return (
        <Dropdown className="language-selector-dropdown d-inline-block ms-3">
            <Dropdown.Toggle 
                variant="light" 
                id="dropdown-language"
                className="btn btn-primary light phone-no shadow-none effect-1 focusBtn d-flex align-items-center"
                style={{
                    padding: '8px 16px',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: 'none',
                    background: '#f3f4f6',
                    color: '#1f2937',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                }}
            >
                <span className="me-2" style={{ fontSize: '16px' }}>{selectedLang.flag}</span>
                <span className="d-none d-sm-inline me-1">{selectedLang.label}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu 
                style={{
                    borderRadius: '12px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    border: 'none',
                    padding: '6px 0',
                    marginTop: '8px',
                    overflow: 'hidden'
                }}
                align="end"
            >
                {languages.map((lang) => (
                    <Dropdown.Item 
                        key={lang.code} 
                        onClick={() => setLanguage(lang.code)}
                        className={`d-flex align-items-center px-4 py-2 ${currentLangCode === lang.code ? 'active bg-primary text-white' : ''}`}
                        style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                    >
                        <span className="me-2" style={{ fontSize: '16px' }}>{lang.flag}</span>
                        <span>{lang.label}</span>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageSelector;

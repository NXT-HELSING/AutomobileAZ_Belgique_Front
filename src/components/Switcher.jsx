import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE } from '../constent/theme';
// import { IMAGE } from '../constent/theme';

const logo1 = require('./../assets/images/logo.png');
const logoWhite1 = require('./..//assets/images/logo.png');
const logo2 = require('./../assets/images/logo-2.png');
const logoWhite2 = require('./../assets/images/logo-2.png');
const logo3 = require('./../assets/images/logo-3.png');
const logoWhite3 = require('./../assets/images/logo-3.png');
const logo4 = require('./../assets/images/logo-4.png');
const logoWhite4 = require('./../assets/images/logo-4.png');
const logo5 = require('./../assets/images/logo-5.png');
const logoWhite5 = require('./../assets/images/logo-5.png');
const logo6 = require('./../assets/images/logo-6.png');
const logoWhite6 = require('./../assets/images/logo-6.png');
const logo7 = require('./../assets/images/logo-7.png');
const logoWhite7 = require('./../assets/images/logo-7.png');
const logo8 = require('./../assets/images/logo-8.png');
const logoWhite8 = require('./../assets/images/logo-8.png');


const initialState = false;
const reducer = (state, action) => {
    if (action.type === 'openswitcher') {
        return { ...state, openswitcher: !state.openswitcher };
    }

    return state;
}


const bgSmallImg = [
    {
        bgimage1: IMAGE.switcherBg1, bgimage2: IMAGE.largeBackgroundimg1,

    },
    {
        bgimage1: IMAGE.switcherBg2, bgimage2: IMAGE.largeBackgroundimg2,

    },
    {
        bgimage1: IMAGE.switcherBg3, bgimage2: IMAGE.largeBackgroundimg3,

    },
    {
        bgimage1: IMAGE.switcherBg4, bgimage2: IMAGE.largeBackgroundimg4,

    },
]
const bgColorBlog = [
    {
        patterimage1: IMAGE.switcherBgPattern1, patterimage2: IMAGE.switcherBgPattern1
    },
    {
        patterimage1: IMAGE.switcherBgPattern2, patterimage2: IMAGE.switcherBgPattern2
    },
    {
        patterimage1: IMAGE.switcherBgPattern3, patterimage2: IMAGE.switcherBgPattern3
    },
    {
        patterimage1: IMAGE.switcherBgPattern4, patterimage2: IMAGE.switcherBgPattern4
    },
    {
        patterimage1: IMAGE.switcherBgPattern5, patterimage2: IMAGE.switcherBgPattern5
    },
    {
        patterimage1: IMAGE.switcherBgPattern6, patterimage2: IMAGE.switcherBgPattern6
    },
    {
        patterimage1: IMAGE.switcherBgPattern7, patterimage2: IMAGE.switcherBgPattern7
    },
    {
        patterimage1: IMAGE.switcherBgPattern8, patterimage2: IMAGE.switcherBgPattern8
    },
    {
        patterimage1: IMAGE.switcherBgPattern9, patterimage2: IMAGE.switcherBgPattern9
    },
    {
        patterimage1: IMAGE.switcherBgPattern10, patterimage2: IMAGE.switcherBgPattern10
    },
    {
        patterimage1: IMAGE.switcherBgPattern11, patterimage2: IMAGE.switcherBgPattern11
    },
    {
        patterimage1: IMAGE.switcherBgPattern12, patterimage2: IMAGE.switcherBgPattern12
    },
];
const backGroundColor = [
    {
        colorValue: '#EE3131', style: '1',
    },
    {
        colorValue: '#0D3DE5', style: '2',
    },
    {
        colorValue: '#2a7e19', style: '3',
    },
    {
        colorValue: '#a10559', style: '4',
    },
    {
        colorValue: '#f77900', style: '5',
    },
    {
        colorValue: '#D7B65D', style: '6',
    },
    {
        colorValue: '#22abc3', style: '7',
    },
    {
        colorValue: '#8669d4', style: '8',
    },

];

function Switcher() {
    const [changeColor, setChangeColor] = useState();
    const [addActive, setActive] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);




    // function handleChangeTheme(version) {
    //     var thememode = document.body.classList;
    //     var navUl = [].slice.call(document.querySelectorAll('.main-theme-version'));
    //     navUl.forEach(el => el.classList.remove('active'));
    //     document.getElementsByClassName(version)[0].classList.add('active');
    //     if (version === 'light-theme') {
    //         thememode.remove('layout-dark');
    //         thememode.add('layout-light');
    //     } else if (version === 'dark-theme') {
    //         thememode.remove('layout-light');
    //         thememode.add('layout-dark');
    //     }
    // }


    function HeaderPostion(postion, ind) {
        var headermode = document.getElementsByClassName('main-bar-wraper')[0].classList;
        var navUl = [].slice.call(document.querySelectorAll('.switcher-header-layout-btn'));
        navUl.forEach(el => el.classList.remove('active'));
        document.getElementsByClassName(postion)[0].classList.add('active');

        if (postion === 'header-fixed') {
            headermode.remove('sticky-no');
            headermode.add('sticky-header');
        } else if (postion === 'header-static') {
            headermode.remove('sticky-header');
            headermode.add('sticky-no');
        }
        localStorage.setItem('HEADER', postion)
        localStorage.setItem('HEADERind', ind)

    }

    // function ChnageDirectionRtl(direction) {
    //     const directionChnage = document.getElementsByTagName("html");
    //     var switcherdirection = [].slice.call(document.querySelectorAll('.dir-theme-change'));
    //     switcherdirection.forEach(el => el.classList.remove('active'));
    //     document.getElementsByClassName(direction)[0].classList.add('active');
    //     if (direction === 'rtl-theme') {
    //         directionChnage[0].setAttribute("dir", "rtl");

    //     } else if (direction === 'ltr-theme') {
    //         directionChnage[0].removeAttribute("dir", "rtl");
    //     }

    // }

    function handleThemeLayout(layout, index) {
        var changeLayout = document.body.classList;
        var switcherlayout = [].slice.call(document.querySelectorAll('.layout-theme-change'));
        switcherlayout.forEach(el => el.classList.remove('active'));
        document.getElementsByClassName(layout)[0].classList.add('active');

        if (layout === 'wide-layout') {
            changeLayout.remove('boxed');
            changeLayout.remove('frame');
            changeLayout.add('wide-layout');
        } else if (layout === 'boxed') {
            changeLayout.remove('wide-layout');
            changeLayout.remove('frame');
            changeLayout.add('boxed');
        } else if (layout === 'frame') {
            changeLayout.remove('boxed');
            changeLayout.remove('wide-layout');
            changeLayout.add('frame');
        };
        localStorage.setItem('LAYOUT', layout);
        localStorage.setItem('LAYOUTind', index);
    }

    function dzhandleThemeBgColor(action, value, ind) {
        var backgchnage = document.body.classList;

        if (backgchnage.contains('boxed') || backgchnage.contains('frame')) {
            if (action === 'bgcolor') {
                document.body.style.backgroundColor = value;
                document.body.style.backgroundImage = "";
            } else if (action === 'bgImage') {
                document.body.style.backgroundImage = "url(" + value + ")";
                document.body.setAttribute('id', 'bg');
            } else if (action === 'bgPattern') {
                document.body.style.backgroundImage = "url(" + value + ")";
                document.body.setAttribute('id', 'bg');
                document.body.style.backgroundSize = 'auto';
            }
        }
        localStorage.setItem('BODYCOLOR', value);
        localStorage.setItem('BGCOLORind', ind);
    }

    function dzPrimaryColor(action, value, currentEvent, ind) {
        var colorTheme = document.body;
        colorTheme.setAttribute('data-theme-color', value);
        var colorThemeSelectorArr = [].slice.call(document.querySelectorAll('.color-skins > li'));
        colorThemeSelectorArr.forEach(el => el.classList.remove('active'));

        var logoSelectorArr = currentEvent.target.getAttribute('data-logo-selector').split(',');
        var logoSrcArr = currentEvent.target.getAttribute('data-logo-image').split(',');
        var arrCount = logoSelectorArr.length;

        for (var i = 0; i < arrCount; i++) {
            if (document.querySelector(logoSelectorArr[i]) != null) {
                var imageSrc = eval(logoSrcArr[i]);
                const logoSelct = document.querySelectorAll(logoSelectorArr);
                logoSelct.forEach(el => el.setAttribute('src', imageSrc))

            }

        }
        setTimeout(function () {
            currentEvent.target.parentNode.classList.add('active');
        }, 200);
        localStorage.setItem('COLOR', value);
        localStorage.setItem('INDEX', ind);
    }



    useEffect(() => {
        let colorName = localStorage.getItem('COLOR');
        let getIndex = localStorage.getItem('INDEX');
        let layoutInd = localStorage.getItem('LAYOUTind');
        let headerInd = localStorage.getItem('HEADERind');
        let imgInd = localStorage.getItem('BODYBG');
        console.log(imgInd);
        document.querySelectorAll('.color-skins > li').forEach(el => el.classList.remove('active'));
        document.body.setAttribute('data-theme-color', colorName);
        document.querySelectorAll('.color-skins>li')[getIndex === null ? 0 : getIndex].classList.add('active');
        document.body.classList.add(
            localStorage.getItem('LAYOUT')
        );




        var switcherlayout = document.querySelectorAll('.layout-theme-change');
        switcherlayout.forEach(el => el.classList.remove('active'));
        switcherlayout[layoutInd === null ? 0 : layoutInd].classList.add('active');

        document.querySelector('.main-bar-wraper').classList.add(
            localStorage.getItem('HEADER')
        );
        var navUl = document.querySelectorAll('.switcher-header-layout-btn');
        navUl.forEach(el => el.classList.remove('active'));

        navUl[headerInd === null ? 0 : headerInd].classList.add('active')

        document.body.setAttribute('style', `background-color: ${localStorage.getItem('BODYCOLOR')
            }`);
        setActive(
            localStorage.getItem('BGCOLORind')
        );

    }, [addActive]);


    const DeletAllCookies = () => {

        localStorage.setItem('HEADER', 'header-fixed')
        localStorage.setItem('HEADERind', 0);
        document.body.removeAttribute('class')
        localStorage.setItem('LAYOUT', 'wide-layout');
        localStorage.setItem('LAYOUTind', 0);
        localStorage.setItem('BODYCOLOR', '#EE3131');
        localStorage.setItem('BGCOLORind', 0)
        localStorage.setItem('COLOR', '#EE3131');
        localStorage.setItem('INDEX', 0);







        document.querySelector('.main-bar-wraper').classList.add('sticky-header');
        var navUl = [].slice.call(document.querySelectorAll('.switcher-header-layout-btn'));
        navUl.forEach(el => el.classList.remove('active'));


        document.body.setAttribute('style', `background-color: #fff`);
        setActive(0)
    }



    return (
        <>
            <div id="dzSwitcher-right" className={`styleswitcher top-0`} style={{ left: `${state.openswitcher ? "0" : ""}`, transition: 'all .2s linear' }}>
                <div className="overlay-switch" onClick={() => dispatch({ type: 'openswitcher' })}></div>
                <div className="switcher-btn-bx" onClick={() => dispatch({ type: 'openswitcher' })}>
                    <Link to={"#"} className="switch-btn open"><span className="fas fa-cog"></span></Link>
                </div>
                <div className="styleswitcher-inner">
                    <div className="sw-main-title">
                        <h4 style={{ fontWeight: 'normal' }}>Theme Setting</h4>
                        <button
                            onClick={DeletAllCookies}
                            className="dez-page btn btn-primary btn-sm"
                        >Delet All Cookie</button>
                    </div>
                    <div className="theme-design row">
                        <div className="theme-box col-md-12">
                            <h5 className="switcher-title"><span>Theme</span></h5>
                            <ul val="themeFullColor" className="color-skins theme-panel-save">
                                <li className="active">
                                    <Link to={"#"}
                                        className="theme-skin skin-1 theme-color"
                                        onClick={(el) => { dzPrimaryColor('primaryColor', 'color_1', el, 0) }}
                                        data-color-theme="skin-1"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo1, logoWhite1,logoWhite1"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => { dzPrimaryColor('primaryColor', 'color_2', el, 1) }}
                                        className="theme-skin skin-2 theme-color"
                                        data-color-theme="skin-2"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo2,logoWhite2,logoWhite2"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('primaryColor', 'color_3', el, 2)}
                                        className="theme-skin skin-3 theme-color"
                                        data-color-theme="skin-3"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo3, logoWhite3,logoWhite3"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('primaryColor', 'color_4', el, 3)}
                                        className="theme-skin skin-4 theme-color"
                                        data-color-theme="skin-4"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo4, logoWhite4,logoWhite4"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('primaryColor', 'color_5', el, 4)}
                                        className="theme-skin skin-5 theme-color"
                                        data-color-theme="skin-5"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo5, logoWhite5,logoWhite5"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('primaryColor', 'color_6', el, 5)}
                                        className="theme-skin skin-6 theme-color"
                                        data-color-theme="skin-6"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo6, logoWhite6,logoWhite6"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('primaryColor', 'color_7', el, 6)}
                                        className="theme-skin skin-7 theme-color"
                                        data-color-theme="skin-7"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo7, logoWhite7,logoWhite7"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('primaryColor', 'color_8', el, 7)}
                                        className="theme-skin skin-8 theme-color"
                                        data-color-theme="skin-8"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo8, logoWhite8,logoWhite8"
                                    ></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="theme-design row theme-layout-wrapper">
                        <div className="theme-box col-md-12">
                            <h5 className="switcher-title"><span>Theme Layout</span></h5>
                            <ul val="layout" className="layout layout-view theme-panel-save">
                                <li className="wide-layout active layout-theme-change">
                                    <Link to={"#"} dir="wide-layout"
                                        onClick={() => handleThemeLayout('wide-layout', 0)}
                                    >
                                        <div></div>
                                        <span>Wide</span>
                                    </Link>
                                </li>
                                <li className="boxed layout-theme-change">
                                    <Link to={"#"} dir="boxed"
                                        onClick={() => handleThemeLayout('boxed', 1)}
                                    >
                                        <div><span></span></div>
                                        <span>Boxed</span>
                                    </Link>
                                </li>
                                <li className="frame layout-theme-change">
                                    <Link to={"#"} dir="frame"
                                        onClick={() => handleThemeLayout('frame', 2)}
                                    >
                                        <div><span></span></div>
                                        <span>Frame</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="theme-design row theme-view-wrapper">

                        <div className="col-xl-6 theme-box">
                            <h5 className="switcher-title"><span>Header</span></h5>
                            <ul val="header" className="tab-checkbx header-view theme-panel-save">
                                <li className="switcher-header-layout-btn header-fixed active">
                                    <Link to={"#"} dir="sticky-header"
                                        onClick={() => HeaderPostion('header-fixed', 0)}
                                    >
                                        Fixed
                                    </Link>
                                </li>
                                <li className="switcher-header-layout-btn header-static ">
                                    <Link to={"#"} dir="sticky-no"
                                        onClick={() => HeaderPostion('header-static', 1)}
                                    >
                                        Static
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="theme-design row mb-0 theme-background-wrapper">
                        <div className="col-md-12 theme-box mb-4">
                            <h5 className="switcher-title"><span>Background Color</span></h5>
                            <ul val="bgColor" className="bg-color-switcher theme-panel-save">
                                {
                                    backGroundColor.map((item, ind) => (
                                        <li className={`${changeColor === item.colorValue ? 'active' : ''} ${addActive === ind ? 'active' : ''}`} key={ind}>
                                            <Link to={"#"}
                                                style={{ background: `${item.colorValue}` }}
                                                className={`bg-color-${item.style} bgColorTheme`}
                                                dir={item.colorValue}
                                                onClick={() => {
                                                    dzhandleThemeBgColor('bgcolor', item.colorValue, ind);
                                                    setChangeColor(item.colorValue);
                                                }
                                                }
                                            >
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="col-md-12 theme-box mb-4">
                            <h5 className="switcher-title"><span>Background Image</span></h5>
                            <ul val="bgImage" className="background-switcher theme-panel-save">
                                {bgSmallImg.map((item, ind) => (
                                    <li className={`${changeColor === item.bgimage1 ? 'active' : ''} ${localStorage.getItem('BODYBG') === ind ? 'active' : ''}`} key={ind}>
                                        <img
                                            src={item.bgimage1}
                                            alt={'small' + (ind + 1)}
                                            onClick={() => {
                                                dzhandleThemeBgColor('bgImage', item.bgimage2);
                                                setChangeColor(item.bgimage1);
                                            }
                                            }
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-12 theme-box">
                            <h5 className="switcher-title"><span>Background Pattern</span></h5>
                            <ul val="bgPatten" className="pattern-switcher theme-panel-save">

                                {bgColorBlog.map((item, ind) => (
                                    <li className={changeColor === item.patterimage1 ? 'active' : ''} key={ind}>
                                        <img
                                            src={item.patterimage1}
                                            alt={'pattern' + (ind + 1)}
                                            onClick={() => {
                                                dzhandleThemeBgColor('bgPattern', item.patterimage2);
                                                setChangeColor(item.patterimage1);
                                            }
                                            }
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Switcher;
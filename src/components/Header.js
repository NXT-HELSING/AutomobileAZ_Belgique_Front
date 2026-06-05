import React, { useState } from 'react'
import Menus from './Menus'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom';

const Header = () => {

    const [header, setHeader] = useState(null);
    const [addOpen, setOpen] = useState(false)
    window.onscroll = function () {
        let scroll = window.scrollY;
        scroll > 80 ? setHeader('is-fixed') : setHeader(null)
    }

    return (
        <>
            <header className={`site-header mo-left header style-1 ${header}`} style={{ zIndex: 10 }}>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix" style={{ transition: 'all .5s' }}>
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link to={'/'}><img src={IMAGE.logo1} alt="" /></Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button onClick={() => { addOpen === false ? setOpen(true) : setOpen(false) }} className={`navbar-toggler collapsed navicon justify-content-end ${addOpen === true ? 'open' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link to="tel:224000221133" className="btn btn-primary light phone-no shadow-none effect-1 focusBtn"><span><i className="fas fa-phone-volume shake"></i>224 000 22 11 33</span></Link>
                                </div>
                            </div>
                            <div className={`header-nav navbar-collapse collapse justify-content-center ${addOpen === true ? 'show' : ''}`} id="navbarNavDropdown">
                                <div className="logo-header">
                                    <Link to={'/'}><img src={IMAGE.logo2} alt="" /></Link>
                                </div>
                                <Menus setOpen={setOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
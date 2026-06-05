import React, { useEffect, useReducer, useState } from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper';
import Menu_2 from './Menu_2';

const home4Slider = [
    { img: IMAGE.home4mainSlider1 },
    { img: IMAGE.home4mainSlider2 },
    { img: IMAGE.home4mainSlider3 },
    { img: IMAGE.home4mainSlider4 },
]

const Header2 = () => {
    const [sidenave, setSidenave] = useState(false);
    const [menuClode, setMenuClode] = useState(false);
    const [search, setSearch] = useState(false);
    const [scrollHeader, setScrollHeader] = useState();
    const swiperRef = React.useRef(null);
    const [open, setOpen] = useState();
    const paginationRef = React.useRef(null);

    useEffect(() => {
        window.onscroll = () => {
            let scrollValue = window.scrollY;
            scrollValue > 102 ? setScrollHeader('is-fixed') : setScrollHeader();
        }
    });
    return (
        <>
            <header className="site-header header-creative-one header-sidenav header" style={{ zIndex: 5 }}>
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${scrollHeader}`}>
                    <div className="main-bar clearfix ">
                        <div className="logo-header mostion logo-dark">
                            <Link to="/"><img src={IMAGE.logo1} alt="" /></Link>
                        </div>
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link to="/" className="btn btn-primary light phone-no shadow-none effect-1"><span><i className="fas fa-phone-volume shake me-lg-3 me-0"></i>224 000 22 11 33</span></Link>
                                <button onClick={() => { setSearch('On') }} id="quik-search-btn" type="button" className="search-btn site-button-link"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className={`dlab-quik-search ${search}`} style={{ display: 'block' }}>
                            <form>
                                <input name="search" type="text" className="form-control" placeholder="Enter Your Keyword ..." />
                                <span onClick={() => { setSearch(false) }} id="quik-search-remove"><i className="ti-close"></i></span>
                            </form>
                        </div>

                    </div>
                    <div className={`header-nav full-sidenav collapse justify-content-end ${sidenave} `} id="header2" >
                        <div className="logo-header">
                            <Link to="/"><img src={IMAGE.logo1} alt="" /></Link>
                        </div>
                        <Menu_2 />
                    </div>
                    <div className={`menu-close ${menuClode}`} onClick={() => { setSidenave(false); setMenuClode(false) }}>
                        <i className="ti-close"></i>
                    </div>
                </div>
                <aside className="menu-aside d-flex align-items-center">
                    <Link onClick={() => { setSidenave('active'); setMenuClode('active') }} to={'#'} className="menu-btn">
                        <div className="menu-icon-in">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                    <div className="swiper-pagination style1" ref={paginationRef}></div>
                </aside>
            </header>

            {/* ============ */}
            <ModalVideo channel='youtube' isOpen={open} videoId='PkkV1vLHUvQ'
                autoplay onClose={() => setOpen(false)}
            />
            <div className="creative-banner-one" id="home-4">
                <Swiper className="swiper-container main-silder-two"
                    speed={1500}
                    slidesPerView={1}
                    parallax={true}
                    modules={[Parallax, Autoplay, Pagination, Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true
                    }}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    ref={swiperRef}
                >
                    {
                        home4Slider.map((slides, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="vehicle-box style1" style={{ backgroundImage: `url(${slides.img})` }}>
                                    <div className="left-info" data-name="n">
                                        <div className="top-info">
                                            <h2 className="title" data-swiper-parallax="-500">Mobhil</h2>
                                            <h3 className="main-title" data-swiper-parallax="-400">smart car</h3>
                                        </div>
                                        <div className="bottom-info">
                                            <h3 data-swiper-parallax="-300">70km</h3>
                                            <h3 data-swiper-parallax="-200">extended urban range</h3>
                                            <h3 data-swiper-parallax="-100">lithium-ion revolution</h3>
                                        </div>
                                    </div>
                                    <div className="right-info">
                                        <ul className="vehicle-services">
                                            <li data-swiper-parallax="-400">
                                                <h3>29<small>ah</small></h3>
                                                <p>compact capacity</p>
                                            </li>
                                            <li data-swiper-parallax="-300">
                                                <h3>10<small>kg</small></h3>
                                                <p>impossible light</p>
                                            </li>
                                            <li data-swiper-parallax="-200">
                                                <h3>06<small>hrs</small></h3>
                                                <p>recharging time</p>
                                            </li>
                                            <li data-swiper-parallax="-100">
                                                <h3>02<small>yr</small></h3>
                                                <p>guarantee</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                    <div className="bottom-aside">
                        {/* <!-- Add Arrows --> */}
                        <div className="swiper-button-arrow">
                            <div className="swiper-button-next" onClick={() => { swiperRef.current.swiper.slideNext() }}></div>
                            <div className="swiper-button-prev" onClick={() => { swiperRef.current.swiper.slidePrev() }}></div>
                        </div>
                        <div className="video-box">
                            <img src={IMAGE.adsImg1} alt="" />
                            <Link to={'#'} onClick={() => { setOpen(true) }} className="popup-youtube"><i className="fa fa-play"></i></Link>
                        </div>
                    </div>
                </Swiper>

            </div>
        </>
    )
}

export default Header2
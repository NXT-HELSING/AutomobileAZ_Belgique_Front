import React, { useState } from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialReting from '../element/TestimonialReting'
import TopDeal from '../components/TopDeal'
import ContectUs from '../components/ContectUs'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Link } from 'react-router-dom'
import { SocialMediaLinks } from './UseCarDeatail'


const Thumbs2 = [
    { img: IMAGE.item1, img2: IMAGE.productThumb1 },
    { img: IMAGE.item2, img2: IMAGE.productThumb2 },
    { img: IMAGE.item3, img2: IMAGE.productThumb3 },
]
const CarDetail_1 = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="page-content bg-white theme-rounded">
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/">Car Collections</Link></li>
                            <li className="breadcrumb-item">SMART GT AA-211</li>
                        </ul>
                    </div>
                </nav>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6 m-b40">
                                <div className="product-gallery on-show-slider lightgallery" id="lightgallery">
                                    <Swiper className="swiper-container sync1"
                                        spaceBetween={10}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        speed={1200}
                                    >
                                        {Thumbs2.map((item, index) => (
                                            <SwiperSlide className="swiper-slide" key={index}>
                                                <div className="dlab-thum-bx">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <Swiper className="swiper-container thumb-slider sync2"
                                        onClick={setThumbsSwiper}
                                        spaceBetween={30}
                                        slidesPerView={3}
                                        freeMode={true}
                                        loop={false}
                                        modules={[FreeMode, Navigation, Thumbs]}

                                    >
                                        {Thumbs2.map((thumbsImg, ind) => (
                                            <SwiperSlide className="swiper-slide" key={ind} style={{ width: '179px !importent' }}>
                                                <div className="dlab-media">
                                                    <img className='cursorPointer' src={thumbsImg.img2} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 m-b40 m-sm-b0">
                                <div className="sticky-top">
                                    <div className="dlab-post-title">
                                        <h3 className="post-title"><Link to={'#'}>SMART GT AA-211</Link></h3>
                                        <h6 className="sub-title">SPORT CAR</h6>
                                        <p className="m-b10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        <div className="dlab-divider bg-gray tb15">
                                            <i className="icon-dot c-square"></i>
                                        </div>
                                    </div>
                                    <div className="feature-list m-b40 m-lg-b30">
                                        <div>
                                            <label>Transmotion</label>
                                            <p className="value">Automatic</p>
                                        </div>
                                        <div>
                                            <label>Fuel</label>
                                            <p className="value">Electric</p>
                                        </div>
                                        <div>
                                            <label>Passenger</label>
                                            <p className="value">2 Person</p>
                                        </div>
                                    </div>
                                    <div className="m-b40 m-lg-b30">
                                        <span className="btn btn-primary price-btn m-b10 m-r10">$34,500</span>
                                        <Link to="tell:224 000 22 11 33" className="btn btn-primary light shadow-none m-b10 focusBtn"><i className="fas fa-phone-volume me-3"></i>224 000 22 11 33</Link>
                                    </div>
                                    <div className="social-list">
                                        <span>Share</span>
                                        <SocialMediaLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialReting />
                {/* Top deals page */}
                <section className="content-inner-2">
                    <div className="container-fluid">
                        <div className="section-head space-lg text-center">
                            <h2 className="title">Top deals of the week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <TopDeal />
                    </div>
                </section>
                {/* Contect Us page  */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div>
        </>
    )
}

export default CarDetail_1
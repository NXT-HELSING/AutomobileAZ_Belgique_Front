import React from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

import { Link } from 'react-router-dom';


const slider = [
    { imag1: IMAGE.slide_pic1 },
    { imag1: IMAGE.slide_pic2 },
    { imag1: IMAGE.slide_pic3 },
]

const Homeslide = (props) => {
    const swiperRef = React.useRef(null)
    return (
        <div className="col-lg-6">
            <div className="banner-slider">
                <Swiper className="swiper-container main-silder-swiper"
                    spaceBetween={30}
                    effect={"fade"}
                    speed={1500}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 1200 }}
                    loop={true}
                    ref={swiperRef}
                >
                    {
                        slider.map((slide, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="dlab-slide-item">
                                    <div className="silder-content">
                                        <div className="inner-content">
                                            <div className="left">
                                                <p className="car-type">SPORT CAR</p>
                                                <p className="car-name slide-vertical" data-splitting >Porce 123 GT</p>
                                            </div>
                                            <div className="right">
                                                <p className="price-label">Starting at </p>
                                                <p className="car-price" data-splitting >$ 20,500</p>
                                            </div>
                                        </div>
                                        <Link to="/car-listing" data-splitting className="discover-link">DISCOVER MORE</Link>
                                    </div>
                                    <div className="slider-img" >
                                        <img src={slide.imag1} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                    <div className="slider-one-pagination">
                        <div className="btn-prev swiper-button-prev1 cursorPointer"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        ><i className="fas fa-chevron-left"></i></div>
                        <div className="btn-next swiper-button-next1 cursorPointer"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        ><i className="fas fa-chevron-right"></i></div>
                    </div>
                </Swiper>
            </div>
        </div >
    )
}

export default Homeslide
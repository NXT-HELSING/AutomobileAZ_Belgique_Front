import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'
import { Autoplay } from 'swiper'
import { Link } from 'react-router-dom'





const brand = [
    { icon: IMAGE.clientLogo1 },
    { icon: IMAGE.clientLogo2 },
    { icon: IMAGE.clientLogo3 },
    { icon: IMAGE.clientLogo4 },
    { icon: IMAGE.clientLogo5 },
    { icon: IMAGE.clientLogo6 },
    { icon: IMAGE.clientLogo1 },
    { icon: IMAGE.clientLogo2 },
    { icon: IMAGE.clientLogo3 },
    { icon: IMAGE.clientLogo4 },
    { icon: IMAGE.clientLogo5 },
    { icon: IMAGE.clientLogo6 },
]
const CarBran = () => {
    const swiperRef = React.useRef(null);
    return (
        <>
            <section className="content-inner brand-logo-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-head row align-items-end">
                                <div className="col-sm-8">
                                    <h3 className="title">USED CARS BY BRAND</h3>
                                </div>
                                <div className="col-sm-4 text-sm-end">
                                    <div className="portfolio-pagination d-inline-block">
                                        <div onClick={() => { swiperRef.current.swiper.slidePrev() }} className="btn-prev swiper-button-prev2"><i className="las la-arrow-left"></i></div>
                                        <div onClick={() => { swiperRef.current.swiper.slideNext() }} className="btn-next swiper-button-next2"><i className="las la-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <Swiper className="swiper-container brand-slider"
                                style={{ overflowX: 'hidden' }}
                                slidesPerView={6}
                                spaceBetween={30}
                                speed={1500}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false
                                }}
                                loop={true}
                                ref={swiperRef}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 6
                                    },
                                    1100: {
                                        slidesPerView: 5
                                    },
                                    775: {
                                        slidesPerView: 3
                                    },
                                    320: {
                                        slidesPerView: 2
                                    },
                                }}
                            >
                                {brand.map((item, index) => {
                                    return (
                                        <SwiperSlide className="swiper-slide" key={index}>
                                            <div className="brand-logo">
                                                <Link to="/used-car-search-result"><img src={item.icon} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CarBran
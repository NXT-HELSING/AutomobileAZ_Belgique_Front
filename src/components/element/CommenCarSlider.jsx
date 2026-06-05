import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../constent/theme';

const carSlider = [
    { img: IMAGE.productPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic5 },
];
const CommenCarSlider = (props) => {
    const swiperRef = React.useRef(null);
    return (
        <>
            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-head row">
                                <div className="col-sm-8">
                                    <h3 className="title m-b20">{props.title}</h3>
                                </div>
                                <div className="col-sm-4 text-sm-end">
                                    <div className="portfolio-pagination d-inline-block">
                                        <div className="btn-prev swiper-button-prev2 cursorPointer" onClick={() => swiperRef.current.swiper.slidePrev()}><i className="las la-arrow-left"></i></div>
                                        <div className="btn-next swiper-button-next2 cursorPointer" onClick={() => swiperRef.current.swiper.slideNext()}><i className="las la-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="upcoming">
                                    <Swiper className="swiper-container similar-slider lightgallery"
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        speed={1200}
                                        ref={swiperRef}
                                        breakpoints={{

                                            1200: {
                                                slidesPerView: 3,
                                            },
                                            775: {
                                                slidesPerView: 2,
                                            },
                                            240: {
                                                slidesPerView: 1,
                                            },
                                        }}
                                    >

                                        {carSlider.map((cards, index) => (
                                            <SwiperSlide className="swiper-slide" key={index}>
                                                <div className="car-list-box border shadow-none">
                                                    <div className="media-box">
                                                        <img src={cards.img} alt="" />
                                                    </div>
                                                    <div className="list-info">
                                                        <h4 className="title mb-0"><Link to="/car-details" data-splitting >SMART GT AA-211</Link></h4>
                                                        <div className="car-type">SPORT CAR</div>
                                                        <span className="badge m-b30">$34,500</span>
                                                        <div className="feature-list">
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
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommenCarSlider
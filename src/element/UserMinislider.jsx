import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'



const userSlider = [
    { img: IMAGE.productPic3 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic5 },
]
const UserMinislider = () => {
    const swiperRef = useRef(null)
    return (
        <>
            <div className="widget-title">
                <h5 className="title">You May Also Likes</h5>
                <div className="dlab-separator style-1 text-primary mb-0"></div>
            </div>
            {/* Slider */}
            <Swiper className="swiper-container prev-list-slider swiper-btn-lr lightgallery" style={{ overflow: 'hidden', position: 'relative' }}
                speed={1500}
                modules={[Autoplay]}
                ref={swiperRef}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}

            >
                {userSlider.map((i, index) => (
                    <SwiperSlide className="swiper-slide" style={{ boxShadow: 'none' }} key={index
                    }>
                        <div className="car-list-box border">
                            <div className="media-box">
                                <img src={i.img} alt="" />
                            </div>
                            <div className="list-info">
                                <h4 className="title mb-0"><Link to="/car-details" data-splitting
                                >SPORT X-GTZ 2023</Link></h4>
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
                <div className="btn-prev swiper-button-prev2 cursorPointer" onClick={() => { swiperRef.current.swiper.slidePrev() }}><i className="las la-arrow-left"></i></div>
                <div className="btn-next swiper-button-next2 cursorPointer" onClick={() => { swiperRef.current.swiper.slideNext() }}><i className="las la-arrow-right"></i></div>
            </Swiper>
        </>
    )
}

export default UserMinislider
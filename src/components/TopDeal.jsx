import React from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper'

const topdealSlid = [
    { img: IMAGE.dealPic1, name: 'SMART GT AA-211' },
    { img: IMAGE.dealPic2, name: 'GT-Z 122 Boost' },
    { img: IMAGE.dealPic3, name: 'SPORT X-GTZ' },
    { img: IMAGE.dealPic4, name: 'Smart Car GT AA-211' },
    { img: IMAGE.dealPic1, name: 'SPORT X-GTZ' },
]

const TopDeal = () => {
    const paginationRef = React.useRef(null)
    return (

        <>
            <Swiper className="swiper-container deal-swiper swiper-dots-1"
                modules={[Pagination, Autoplay]}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000
                }}
                slidesPerView={4}
                spaceBetween={30}
                speed={1200}
                breakpoints={{
                    1500: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    240: {
                        slidesPerView: 1,
                    },
                }}
            >
                {
                    topdealSlid.map((item, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div className="car-list-box overlay">
                                <div className="media-box">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="list-info">
                                    <h3 className="title"><Link to="/car-details" data-splitting className="text-white">{item.name}</Link></h3>
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
                    ))
                }
                <div className="slider-one-pagination m-t40 m-sm-t20" >
                    <div className="swiper-pagination" ref={paginationRef}></div>
                </div>
            </Swiper>
        </>
    )
}

export default TopDeal
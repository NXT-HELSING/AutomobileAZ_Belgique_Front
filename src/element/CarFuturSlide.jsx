import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'


const carfuturSlide = [
    { img: IMAGE.aboutPic1 },
    { img: IMAGE.aboutPic2 },
    { img: IMAGE.aboutPic3 },
    { img: IMAGE.aboutPic4 },
]

const CarFuturSlide = () => {
    const paginationRef = React.useRef(null)


    return (
        <div className="col-lg-6 m-b30 m-sm-b0">
            <div className="image-slider-box">
                <Swiper className="swiper-container feature-swiper"
                    effect='fade'
                    speed={1500}
                    autoplay={{
                        delay: 1500
                    }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable:true
                    }}
                >
                    {
                        carfuturSlide.map((item, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="dlab-media">
                                    <img src={item.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className="slider-one-pagination">
                        <div className="swiper-pagination" ref={paginationRef}></div>
                    </div>
                </Swiper>
                <img className="img1 move-1" src={IMAGE.patternImg2} alt="" />
            </div>
        </div>
    )
}

export default CarFuturSlide
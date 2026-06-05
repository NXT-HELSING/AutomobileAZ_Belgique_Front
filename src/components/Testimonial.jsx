import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'


const testimonial = [
    { img: IMAGE.testimonialPic1 },
    { img: IMAGE.testimonialPic2 },
    { img: IMAGE.testimonialPic3 },
    { img: IMAGE.testimonialPic1 },
    { img: IMAGE.testimonialPic2 },
    { img: IMAGE.testimonialPic3 },
]
const Testimonial = () => {
    const swiperRef = React.useRef(null)
    return (
        <>

            <div className="section-content" style={{ overflow: 'hidden' }}>
                <Swiper className="testimonial-one swiper-container"
                    slidesPerView={3}
                    spaceBetween={30}
                    speed={1200}
                    ref={swiperRef}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {testimonial.map((monials, index) => {
                        return (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="testimonial-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div className="testimonial-text">
                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make </p>
                                    </div>
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic quote-left radius shadow">
                                            <img src={monials.img} width="100" height="100" alt="" /></div>
                                        <strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Student</span> </div>
                                </div>
                            </SwiperSlide>)
                    })}
                    <div className="testimonial-pagination text-center m-t50">
                        <div className="btn-prev swiper-button-prev7 cursorPointer" onClick={() => { swiperRef.current.swiper.slidePrev() }}><i className="las la-arrow-left"></i></div>
                        <div className="btn-next swiper-button-next7 cursorPointer" onClick={() => { swiperRef.current.swiper.slideNext() }}><i className="las la-arrow-right"></i></div>
                    </div>
                </Swiper>
            </div >
        </>
    )
}

export default Testimonial
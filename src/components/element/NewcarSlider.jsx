import React from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'


const NewcarSlides = [
  { img: IMAGE.home3gellerypic1 },
  { img: IMAGE.home3gellerypic2 },
  { img: IMAGE.home3gellerypic3 },
  { img: IMAGE.home3gellerypic1 },
  { img: IMAGE.home3gellerypic2 },
  { img: IMAGE.home3gellerypic3 },
  { img: IMAGE.home3gellerypic1 },
  { img: IMAGE.home3gellerypic2 },
  { img: IMAGE.home3gellerypic3 },
]

const NewcarSlider = () => {
  const swiperRef = React.useRef(null);
  return (
    <>
      <div className="section-full bg-img-fix dlab-new-work overlay-white-dark " style={{ backgroundImage: `url(${IMAGE.home3backgroundbg})` }}>
        <div className="container-fluid p-a0">
          <div className="row spno">
            <div className="col-lg-3 col-sm-4 no-of-item">
              <div className="no-of-item-dtl">
                <h2>18+</h2>
                <h3>UPCOMING CARS</h3>
              </div>
              <div className="text-sm-end text-center">
                <div className="btn-prev swiper-button-prev6 cursorPointer"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                ><i className="las la-arrow-left"></i></div>
                <div className="btn-next swiper-button-next6 cursorPointer"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                ><i className="las la-arrow-right"></i></div>
              </div>
            </div>
            <div className="col-lg-9 col-sm-8">
              <Swiper className="new-item swiper-container"
                slidesPerView={3}
                modules={[Autoplay]}
                speed={1500}
                autoplay={{
                  delay: 1200,
                  disableOnInteraction: false
                }}
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
                {NewcarSlides.map((items, index) => {
                  return (
                    <SwiperSlide className="swiper-slide dlab-new-item" key={index}>
                      <div className="dlab-box">
                        <div className="dlab-media">
                          <Link to="#"><img src={items.img} alt="" /></Link>
                        </div>
                        <div className="dlab-info">
                          <p className="event-date">November 6, 2018</p>
                          <h4 className="dlab-title"><Link to="/upcoming-cars">Toyota avalon hybrid  <i className="fa fa-angle-right float-end"></i></Link></h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewcarSlider
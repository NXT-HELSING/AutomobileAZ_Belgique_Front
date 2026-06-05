import React from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import PopulerCars from '../components/PopulerCars'
import ContectUs from '../components/ContectUs'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'


const carSlider = [
  { img: IMAGE.slideItem1 },
  { img: IMAGE.slideItem2 },
  { img: IMAGE.slideItem3 },
  { img: IMAGE.slideItem4 },
]
const carSlider2 = [
  { img: IMAGE.productPic1 },
  { img: IMAGE.productPic2 },
  { img: IMAGE.productPic3 },
  { img: IMAGE.productPic4 },
  { img: IMAGE.productPic5 },
];
const CarDetailPrice = () => {
  const swiperRef = React.useRef(null)
  return (
    <>
      <section className="content-inner-2 theme-rounded">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="m-b30 icon-bx-wraper style-1">
                    <h3 className="h3 m-t0">Price <span className="text-primary">$5890</span> </h3>
                    <h6 className="m-b30 font-weight-400">Hyundai EON LPG Magna Plus </h6>
                    <Link to={'#'} className="btn btn-primary">View On Road Price </Link>
                    <p className="m-t20 m-b5 font-weight-600">Ex-showroom Price</p>
                    <div className="m-b10">
                      <Form.Select className="form-control sm borderNone">
                        <option>Mumbai</option>
                        <option>Chandigarh </option>
                        <option>Rajasthan</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <Swiper className="swiper-container single-image-swiper swiper-btn-lr sticky-top m-b30"
                    slidesPerView={1}
                    ref={swiperRef}
                    speed={1200}
                  >
                    {carSlider.map((image, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <div className="dlab-thum-bx">
                          <img src={image.img} alt="" />
                        </div>
                      </SwiperSlide>
                    ))}
                    <div onClick={() => { swiperRef.current.swiper.slidePrev() }} className="btn-prev swiper-button-prev2 cursorPointer"><i className="las la-arrow-left"></i></div>
                    <div onClick={() => { swiperRef.current.swiper.slideNext() }} className="btn-next swiper-button-next2 cursorPointer"><i className="las la-arrow-right"></i></div>
                  </Swiper>
                </div>
              </div>

              <div className="icon-bx-wraper style-1 m-b60 m-sm-b40">
                <h4 className="m-b20">DESCRIPTION Hyundai EON LPG Magna Plus</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className="section-head">
                <h3 className="title">Similar Car Comparisons</h3>
              </div>
              <Swiper className="swiper-container post-slider m-b50"
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  1200: {
                    slidesPerView: 3
                  },
                  500: {
                    slidesPerView: 2
                  },
                  240: {
                    slidesPerView: 1
                  },
                }}
              >
                <div className="swiper-wrapper">
                  {carSlider2.map((image, ind) => (
                    <SwiperSlide className="swiper-slide" key={ind}>
                      <div className="car-list-box border box-sm shadow-none">
                        <div className="media-box">
                          <img src={image.img} alt="" />
                        </div>
                        <div className="list-info">
                          <h4 className="title mb-0"><Link to="/car-details" >SMART GT AA-211</Link></h4>
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
                </div>
              </Swiper>
              <div className="icon-bx-wraper style-1 m-b30">
                <h4>Disclaimer</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <PopulerCars categery={'Popular Cars'} />
            {/* ======================Contect Us page >>> */}
            <section className="content-inner">
              <div className="container">
                <ContectUs />
              </div>
            </section>
          </div>
        </div>
      </section >
    </>
  )
}

export default CarDetailPrice
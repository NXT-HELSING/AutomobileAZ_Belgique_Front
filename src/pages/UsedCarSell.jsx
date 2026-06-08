import React, { useRef } from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Form from 'react-bootstrap/Form'


const logoSlider = [
    { logo: IMAGE.clientLogo1, logo1: IMAGE.clientLogo18 },
    { logo: IMAGE.clientLogo2, logo1: IMAGE.clientLogo17 },
    { logo: IMAGE.clientLogo3, logo1: IMAGE.clientLogo16 },
    { logo: IMAGE.clientLogo4, logo1: IMAGE.clientLogo15 },
    { logo: IMAGE.clientLogo5, logo1: IMAGE.clientLogo14 },
    { logo: IMAGE.clientLogo6, logo1: IMAGE.clientLogo13 },
    { logo: IMAGE.clientLogo7, logo1: IMAGE.clientLogo12 },
    { logo: IMAGE.clientLogo8, logo1: IMAGE.clientLogo11 },
    { logo: IMAGE.clientLogo9, logo1: IMAGE.clientLogo10 },
    { logo: IMAGE.clientLogo10, logo1: IMAGE.clientLogo9 },
    { logo: IMAGE.clientLogo11, logo1: IMAGE.clientLogo8 },
    { logo: IMAGE.clientLogo12, logo1: IMAGE.clientLogo7 },
    { logo: IMAGE.clientLogo13, logo1: IMAGE.clientLogo6 },
    { logo: IMAGE.clientLogo14, logo1: IMAGE.clientLogo5 },
    { logo: IMAGE.clientLogo15, logo1: IMAGE.clientLogo4 },
    { logo: IMAGE.clientLogo16, logo1: IMAGE.clientLogo3 },
    { logo: IMAGE.clientLogo17, logo1: IMAGE.clientLogo2 },
    { logo: IMAGE.clientLogo18, logo1: IMAGE.clientLogo1 },
]
const UsedCarSell = () => {
    const swiperRef = useRef(null)
    return (
        <>
            <div className="page-wraper">
                <div className="dlab-bnr-inr dlab-bnr-inr-lg style-1 overlay-black-middle" style={{ backgroundImage: `url(${IMAGE.bnr2})` }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Sell Your Cars</h1>
                            <div className="dlab-separator"></div>
                            <div className="car-search-box item3 row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select aria-label="Default Form.Select example" className="form-control sm">
                                            <option>Year</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2019</option>
                                        </Form.Select>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select className="form-control sm">
                                            <option>Car Name</option>
                                            <option>Honda</option>
                                            <option>Toyota</option>
                                            <option>Mahindra</option>
                                            <option>Tata</option>
                                            <option>Ford</option>
                                            <option>Renault</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 border-0">
                                    <div className="selected-box">
                                        <Form.Select className="form-control sm">
                                            <option>Color</option>
                                            <option>White</option>
                                            <option>Black</option>
                                            <option>Silver</option>
                                            <option>Gray</option>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Brown</option>
                                            <option>Green</option>
                                            <option>Gold</option>
                                            <option>Orange</option>
                                            <option>Violet</option>
                                            <option>Yellow</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                                        <span className="d-flex justify-content-between w-100">CONTINUE<i className="las la-long-arrow-alt-right"></i></span>
                                    </Link>
                                </div>
                                <img className="img2 move-2" src={IMAGE.patternImg5} alt="" />
                            </div>
                        </div>
                    </div>
                </div >
                {/* icon slider  */}
                < section className="content-inner brand-logo-area" >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="section-head row align-items-end">
                                    <div className="col-sm-8">
                                        <h3 className="title">USED CARS BY BRAND</h3>
                                    </div>
                                    <div className="col-sm-4 text-sm-end">
                                        <div className="portfolio-pagination d-inline-block">
                                            <div onClick={() => { swiperRef.current.swiper.slidePrev() }} className="btn-prev swiper-button-prev2 cursorPointer"><i className="las la-arrow-left"></i></div>
                                            <div onClick={() => { swiperRef.current.swiper.slideNext() }} className="btn-next swiper-button-next2 cursorPointer"><i className="las la-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <Swiper className="swiper-container brand-slider"

                                    style={{ overflow: 'hidden' }}
                                    slidesPerView={6}
                                    speed={1500}
                                    spaceBetween={30}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        dilay: 1500,
                                        disableOnInteraction: false
                                    }}
                                    ref={swiperRef}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 6,
                                        },
                                        1100: {
                                            slidesPerView: 5,
                                        },
                                        775: {
                                            slidesPerView: 4,
                                        },
                                        500: {
                                            slidesPerView: 3,
                                        },
                                        300: {
                                            slidesPerView: 2,
                                        },
                                        200: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    {logoSlider.map((item, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide" key={index}>
                                                <div className="brand-logo m-b30">
                                                    <Link to="/used-car-details"><img src={item.logo} alt="" /></Link>
                                                </div>
                                                <div className="brand-logo m-b30">
                                                    <Link to="/used-car-details"><img src={item.logo1} alt="" /></Link>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </section >
            </div>

        </>
    )
}

export default UsedCarSell
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home2Slider = () => {

    return (
        <>

            <div className="main-slider style-two default-banner">
                <div className="tp-banner-container" id='home2Banner'>
                    <Swiper
                        speed={1200}
                        effect='fade'
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, EffectFade]}
                    >
                        <SwiperSlide className='home2_slide_overlay'>
                            <div className="rev-slider-title" style={{ top: '40%' }}>
                                <div>
                                    Subaru <span className="text-primary">BRZ</span>
                                </div>
                                FOR RENT $50 PER DAY
                                <Link to={'#'} className="btn btn-outline-white text-uppercase p-b20">reserve Now</Link>
                            </div>
                            <img src={IMAGE.home2Slideimg1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='home2_slide_overlay'>
                            <div className="rev-slider-title" style={{ top: '40%' }}>
                                <div>
                                    Nissan <span className="text-primary">370Z</span>
                                </div>
                                FOR RENT $50 PER DAY
                                <Link to={'#'} className="btn btn-outline-white text-uppercase">reserve Now</Link>
                            </div>
                            <img src={IMAGE.home2Slideimg2} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <!-- searching cars form --> */}
                <div className="car-searching text-white" style={{ zIndex: 1 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-head style-1">
                                    <div className="title-sm text-uppercase">120+ cars type and brands</div>
                                    <h3 className="h3 m-t10">Search Your <span className="text-primary font-weight-900">Best Cars</span></h3>
                                    <div className="sep-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="searching-form" id='home-slider-form'>
                        <div className="container">
                            <div className="row search-row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <label>Car brands</label>
                                        <Form.Select className="form-control sm form-option-select">
                                            <option>Any Brands</option>
                                            <option>Brand 1</option>
                                            <option>Brand 2</option>
                                            <option>Brand 3</option>
                                            <option>Brand 4</option>
                                        </Form.Select>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <label>Car Type</label>
                                        <Form.Select className="form-control sm form-option-select">
                                            <option>Any Type</option>
                                            <option>Type 1</option>
                                            <option>Type 2</option>
                                            <option>Type 3</option>
                                            <option>Type 4</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <label>Car Price</label>
                                        <Form.Select className="form-control sm form-option-select">
                                            <option>Price low to high</option>
                                            <option>Price high to low</option>
                                        </Form.Select>
                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-6" >
                                    <div className="form-group">
                                        <button type="submit"
                                            onClick={(e) => { e.preventDefault() }}
                                            className="btn d-block w-100 btn-primary btn-md">Search car now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- searching cars form end --> */}
            </div >
        </>
    )
}

export default Home2Slider
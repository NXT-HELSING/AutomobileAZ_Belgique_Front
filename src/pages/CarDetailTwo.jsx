import React, { useState } from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from 'react-router-dom';
import { SliderBlog, SocialMediaLinks } from './UseCarDeatail';
import CommenCarSlider from '../element/CommenCarSlider'
import ContectUs from '../components/ContectUs';
import { Form } from 'react-bootstrap';



const slides = [
    { img: IMAGE.slideItem1, img2: IMAGE.thumb1 },
    { img: IMAGE.slideItem2, img2: IMAGE.thumb2 },
    { img: IMAGE.slideItem3, img2: IMAGE.thumb3 },
    { img: IMAGE.slideItem4, img2: IMAGE.thumb4 },
]

const CarDetailTwo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [addActive, setActive] = useState('nav_one');
    const navLinks = (e) => {
        setActive(e.currentTarget.id);
    }
    return (
        <>
            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <div className=" col-xl-8 col-lg-7 col-md-6 m-b0 m-md-b50">
                            <div className="product-gallery on-show-slider lightgallery m-b40" id="lightgallery">
                                <Swiper className="swiper-container sync1"
                                    spaceBetween={10}
                                    speed={1200}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                >
                                    {slides.map((slide, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide" key={index}>
                                                <div className="dlab-thum-bx">
                                                    <img src={slide.img} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                                <Swiper className="swiper-container thumb-slider sync2"
                                    onClick={setThumbsSwiper}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    breakpoints={{
                                        420: {
                                            slidesPerView: 4,
                                        },
                                        300: {
                                            slidesPerView: 3,
                                        },
                                        240: {
                                            slidesPerView: 2,
                                        },
                                    }}

                                >
                                    {slides.map((item, ind) => {
                                        return (
                                            <SwiperSlide id="thumbsSlides" className="swiper-slide slidethumbs " key={ind}>
                                                <div className="dlab-media">
                                                    <img className='cursorPointer' src={item.img2} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className="m-b50">
                                <div className="dlab-post-title">
                                    <h3 className="post-title"><Link to="#">SMART GT AA-211</Link></h3>
                                    <h6 className="sub-title">SPORT CAR</h6>
                                    <p className="m-b10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <div className="dlab-divider bg-gray tb15">
                                        <i className="icon-dot c-square"></i>
                                    </div>
                                </div>
                                <div className="social-list">
                                    <span>Share</span>
                                    <SocialMediaLinks />
                                </div>
                            </div>
                            <div className="product-description">
                                <ul className="nav nav-tabs style-1 m-b20">
                                    <li><Link to="#" id='nav_one' onClick={navLinks} className={`nav-link ${addActive === 'nav_one' ? 'active' : ''}`}>Economy</Link></li>
                                    <li><Link to="#" id='nav_two' onClick={navLinks} className={`nav-link ${addActive === 'nav_two' ? 'active' : ''}`}>Presentation</Link></li>
                                    <li><Link to="#" id='nav_three' onClick={navLinks} className={`nav-link ${addActive === 'nav_three' ? 'active' : ''}`}>Features</Link></li>
                                    <li><Link to="#" id='nav_four' onClick={navLinks} className={`nav-link ${addActive === 'nav_four' ? 'active' : ''}`}>Safety</Link></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="specifications" className={`tab-pane ${addActive === 'nav_one' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                <li>
                                                    <div className="leftview">Mileage</div>
                                                    <div className="rightview">17.20 kmpl</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Service Cost</div>
                                                    <div className="rightview">-</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Fuel Type</div>
                                                    <div className="rightview">Diesel</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Fuel Tank</div>
                                                    <div className="rightview">58 Litres</div>
                                                </li>

                                                <li>
                                                    <div className="leftview">Mileage</div>
                                                    <div className="rightview">17.20 kmpl</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Over Drive</div>
                                                    <div className="rightview">4 Motion</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Steering Type</div>
                                                    <div className="rightview">Electric</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Turning Radius</div>
                                                    <div className="rightview">5.75meters</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Alloy Wheel Size</div>
                                                    <div className="rightview">18 Inch</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">No Of Doors</div>
                                                    <div className="rightview">5</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="presentation" className={`tab-pane ${addActive === 'nav_two' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                <li>
                                                    <div className="leftview">Engine</div>
                                                    <div className="rightview">1989 cc </div>
                                                </li>
                                                <li>
                                                    <div className="leftview">BHP</div>
                                                    <div className="rightview">188</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">No. of Cylinders</div>
                                                    <div className="rightview">4</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">No. of Gears</div>
                                                    <div className="rightview">Spped 7</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="features" className={`tab-pane ${addActive === 'nav_three' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                <li>
                                                    <div className="leftview">Cruise Control</div>
                                                    <div className="rightview">Yes</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Sun roof</div>
                                                    <div className="rightview">No </div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Seating Capacity</div>
                                                    <div className="rightview">4</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Boot Space</div>
                                                    <div className="rightview">480 litres</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="safety" className={`tab-pane ${addActive === 'nav_four' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                <li>
                                                    <div className="leftview">Parking Sensor</div>
                                                    <div className="rightview">Yes </div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Airbags</div>
                                                    <div className="rightview">Yes</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4  col-lg-5 col-md-6">
                            <div className="sticky-top nav-tabs-top">
                                <div className="car-dl-info icon-bx-wraper style-1 m-b50">
                                    <div className="price m-b30">
                                        <h3 className="">Price $5890</h3>
                                        <span>Hyundai EON LPG Magna Plus</span>
                                    </div>
                                    <form>
                                        <div className="form-group m-b20">
                                            <label className="font-weight-600 m-b10">Ex-showroom Price</label>
                                            <Form.Select className="form-control sm borderNone">
                                                <option>Mumbai</option>
                                                <option>Chandigarh </option>
                                                <option>Rajasthan</option>
                                            </Form.Select>
                                        </div>
                                        <div className="clearfix">
                                            <button type="button" className="btn-primary btn btn-block" >View On Road Price </button>
                                        </div>
                                    </form>
                                </div>
                                <SliderBlog />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =========Car slider >>>>>> */}
            <CommenCarSlider title={"FOR YOUR QUICK LOOK"} />
            {/* ======================Contect Us page >>> */}
            <section className="content-inner">
                <div className="container">
                    <ContectUs />
                </div>
            </section>
        </>
    )
}

export default CarDetailTwo
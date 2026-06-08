import React, { useState } from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';




const Home3Slider = () => {
    const [Addactive, setActive] = useState('1');
    const inputButton = (action) => {
        setActive(action)
    }
    return (
        <>
            <div className="main-slider style-two default-banner" id='home-three-banner' style={{ overflowX: 'hidden', position: 'relative' }}>
                <div className="tp-banner-container">
                    <div className="tp-banner" style={{ zIndex: -1 }} >
                        <Swiper
                            speed={1200}
                            loop={true}
                            effect='fade'
                            modules={[Autoplay, EffectFade, Navigation, Pagination]}
                            pagination={{ el: '.home_three_custom_pagination' }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false
                            }}
                        >
                            <SwiperSlide >
                                <img style={{ height: '89vh', width: '100vw' }} src={IMAGE.slide3slideImg} alt="" className="rev-slidebg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img style={{ height: '89vh', width: '100vw' }} src={IMAGE.home3BackgroundImg} alt="" className="rev-slidebg" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="home_three_custom_pagination"></div>
                    </div>
                </div>
                <div className="form-slide" style={{ zIndex: 1 }}>
                    <div className="container" >
                        <form className="search-car" method="post">
                            <div className="form-head">
                                <h2 className="text-black m-b30 m-sm-b10">Search the right car</h2>
                            </div>
                            <div className="form-find-area">
                                <ul className="nav nav-tabs style-1 m-b20">
                                    <li onClick={() => { inputButton('1') }} className="nav-item"><Link className={`nav-link ${Addactive === '1' ? 'active' : ''}`} aria-controls="new-car" to={'#'}>NEW CAR</Link></li>
                                    <li onClick={() => { inputButton('2') }} className="nav-item"><Link className={`nav-link ${Addactive === '2' ? 'active' : ''}`} aria-controls="popular" to={'#'}>USED CAR</Link></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="new-car" className={`tab-pane ${Addactive === '1' ? 'active' : ''} clearfix`}>
                                        <ul className="nav check-nav m-b20">
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="BudgetCheck" />
                                                <label className="form-check-label" htmlFor="BudgetCheck">
                                                    BY BUDGET
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="BrandCheck" />
                                                <label className="form-check-label" htmlFor="BrandCheck">
                                                    BY BRAND
                                                </label>
                                            </li>
                                        </ul>
                                        <div id="budgetDiv" className="new_form_div">
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select Budget</option>
                                                    <option>1 Lakh - 5 Lakh</option>
                                                    <option>5 Lakh - 10 Lakh</option>
                                                    <option>10 Lakh - 20 Lakh</option>
                                                    <option>20 Lakh - 50 Lakh</option>
                                                    <option>50 Lakh - 1 Crore</option>
                                                    <option>Above 1 Crore</option>
                                                </Form.Select>
                                            </div>
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>All Vehicle Types</option>
                                                    <option>Hatchback</option>
                                                    <option>Sedans</option>
                                                    <option>MUV</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div id="brandDiv" className="new_form_div" style={{ display: 'none' }}>
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select Brand</option>
                                                    <option>Hatchback</option>
                                                    <option>Sedans</option>
                                                    <option>MUV</option>
                                                </Form.Select>
                                            </div>
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select Model</option>
                                                    <option>Hatchback</option>
                                                    <option>Sedans</option>
                                                    <option>MUV</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div className="input-group m-b20">
                                            <Link to={'/new-car-search-result-list'} className="btn btn-primary d-block w-100">SEARCH</Link>
                                        </div>
                                        <div className="input-group">
                                            <Link to="/new-car-search" className="btn-link mx-auto">ADVANCED SEARCH <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>

                                    <div id="used-car" className={`tab-pane ${Addactive === '2' ? 'active' : ''} clearfix`}>
                                        <ul className="nav check-nav m-b20">
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="BudgetCheck2" />
                                                <label className="form-check-label" htmlFor="BudgetCheck2">
                                                    BY BUDGET
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="BrandCheck2" />
                                                <label className="form-check-label" htmlFor="BrandCheck2">
                                                    BY BRAND
                                                </label>
                                            </li>
                                        </ul>
                                        <div id="used_budgetDiv" className="used_form_div">
                                            <div className="input-group  m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select Budget</option>
                                                    <option>1 Lakh - 5 Lakh</option>
                                                    <option>5 Lakh - 10 Lakh</option>
                                                    <option>10 Lakh - 20 Lakh</option>
                                                    <option>20 Lakh - 50 Lakh</option>
                                                    <option>50 Lakh - 1 Crore</option>
                                                    <option>Above 1 Crore</option>
                                                </Form.Select>
                                            </div>
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select City</option>
                                                    <option>Hatchback</option>
                                                    <option>Sedans</option>
                                                    <option>MUV</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div id="used_modelDiv" className="used_form_div" style={{ display: 'none' }}>
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select Model</option>
                                                    <option>1 Lakh - 5 Lakh</option>
                                                    <option>5 Lakh - 10 Lakh</option>
                                                    <option>10 Lakh - 20 Lakh</option>
                                                    <option>20 Lakh - 50 Lakh</option>
                                                    <option>50 Lakh - 1 Crore</option>
                                                    <option>Above 1 Crore</option>
                                                </Form.Select>
                                            </div>
                                            <div className="input-group m-b20">
                                                <Form.Select className="form-control sm borderNone">
                                                    <option>Select City</option>
                                                    <option>Hatchback</option>
                                                    <option>Sedans</option>
                                                    <option>MUV</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div className="input-group  m-b20">
                                            <Link to={'/new-car-search-result-list'} className="btn btn-primary d-block w-100">SEARCH</Link>
                                        </div>
                                        <div className="input-group">
                                            <Link to="/new-car-search" className="btn-link mx-auto">ADVANCED SEARCH <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home3Slider
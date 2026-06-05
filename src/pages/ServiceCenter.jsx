import React, { useState } from 'react'
import CarDealerBanner from '../components/CarDealerBanner'
import PopulerCars from '../components/PopulerCars'
import { IMAGE } from '../constent/theme'
import Pagination from '../element/Pagination'
import { Link } from 'react-router-dom'



const Testimonial = [
    { img: IMAGE.testimonialImg },
    { img: IMAGE.testimonialImg },
    { img: IMAGE.testimonialImg },
    { img: IMAGE.testimonialImg },
    { img: IMAGE.testimonialImg },
    { img: IMAGE.testimonialImg },
]
const Testimonial2 = [
    { img: IMAGE.testimonialImg2 },
    { img: IMAGE.testimonialImg2 },
    { img: IMAGE.testimonialImg2 },
    { img: IMAGE.testimonialImg2 },
    { img: IMAGE.testimonialImg2 },
    { img: IMAGE.testimonialImg2 },
]
const ServiceCenter = () => {

    const [active, setActive] = useState(1);
    const addClassBtn = (e) => {
        setActive(e.currentTarget.value);
    }
    return (
        <>
            <div className="page-content bg-white">
                <CarDealerBanner title={'Car dealers In UK'} />
                {/* =======================Populer cars >>>>>>> */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                <div className="section-head">
                                    <h3 className="title">New Car Showrooms</h3>
                                </div>



                                <div className="product-description">
                                    <ul className="nav nav-tabs style-1 m-b30">
                                        <li value={1} onClick={addClassBtn}>
                                            <Link to={'#'} className={`${active === 1 ? 'active' : ''} nav-link`}>Dealer</Link>
                                        </li>
                                        <li value={2} onClick={addClassBtn}>
                                            <Link to={'#'} className={`${active === 2 ? 'active' : ''} nav-link`}>Service Center</Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="dealer" className={`${active === 1 ? 'active' : ''} tab-pane`}>
                                            {Testimonial.map((item, index) => {
                                                return (
                                                    <div className="icon-bx-wraper style-3 m-b30" key={index}>
                                                        <img className="photo" src={item.img} alt="" />
                                                        <div className="content-box">
                                                            <h5 className="media-heading m-b10">Audi Motors Nexa</h5>
                                                            <ul className="used-car-dl-info">
                                                                <li><i className="fas fa-map-marker-alt"></i> UK London</li>
                                                                <li><i className="fas fa-phone-alt"></i> 911 294 2345, 820 294 2340</li>
                                                                <li><i className="far fa-envelope"></i> support@gmail.com</li>
                                                            </ul>
                                                            <div className="clearfix m-t20">
                                                                <Link to="#" className="btn btn-primary btn-xs m-b5">Send Details on Sms</Link>
                                                                <Link to="#" className="btn btn-primary btn-xs m-b5 m-l5">Locate</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <Pagination />
                                        </div>
                                        <div id="service-center" className={`${active === 2 ? 'active' : ''} tab-pane`}>
                                            {Testimonial2.map((image, ind) => {
                                                return (
                                                    <div className="icon-bx-wraper style-3 m-b30" key={ind}>
                                                        <img className="photo" src={image.img} alt="" />
                                                        <div className="content-box">
                                                            <h5 className="media-heading m-b10">Audi Motors Nexa</h5>
                                                            <ul className="used-car-dl-info">
                                                                <li><i className="fas fa-map-marker-alt"></i> UK London</li>
                                                                <li><i className="fas fa-phone-alt"></i> 911 294 2345, 820 294 2340</li>
                                                            </ul>
                                                            <div className="clearfix m-t20">
                                                                <Link to="#" className="btn btn-primary btn-xs">Locate</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <Pagination />
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <PopulerCars categery={'Popular Cars'} />
                        </div>
                    </div>
                </section >
            </div>
        </>
    )
}

export default ServiceCenter
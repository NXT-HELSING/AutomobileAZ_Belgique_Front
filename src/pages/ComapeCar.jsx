import React from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import CommenCarSlider from '../element/CommenCarSlider'
import ContectUs from '../components/ContectUs'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const cards = [
    { heading: "Add to compare" },
    { heading: "Add to compare" },
    { heading: "Add to compare" },
    { heading: "Add to compare" },
]

const ComapeCar = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr2} title={'Add Cars To Compare'} />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="m-b30">
                                    <h3 className="m-t0">Compare to choose the right car! </h3>
                                    <ul className="used-car-dl-info">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                    </ul>
                                </div>
                            </div>
                            {cards.map((card, index) => {
                                return (
                                    <div key={index} className="col-xl-3 col-md-6 m-b30">
                                        <div className="compare-box">
                                            <div className="icon-box">
                                                <svg width="71" height="59" viewBox="0 0 94 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M91.2002 22.7304H80.3161L77.291 14.351C74.1823 5.73605 66.7632 0.170654 58.3879 0.170654H35.2999C26.9264 0.170654 19.5055 5.73605 16.3949 14.351L13.3699 22.7304H2.48756C1.06774 22.7304 0.0260468 24.2088 0.371459 25.7336L1.46223 30.5678C1.70402 31.6435 2.57664 32.3988 3.57833 32.3988H7.22697C4.78546 34.7615 3.21293 38.1958 3.21293 42.0672V51.7357C3.21293 54.9827 4.33279 57.9134 6.12166 60.1815V71.0726C6.12166 74.6318 8.72679 77.5182 11.9391 77.5182H17.7566C20.9689 77.5182 23.574 74.6318 23.574 71.0726V64.627H70.1137V71.0726C70.1137 74.6318 72.7189 77.5182 75.9312 77.5182H81.7487C84.961 77.5182 87.5661 74.6318 87.5661 71.0726V60.1815C89.355 57.9154 90.4749 54.9847 90.4749 51.7357V42.0672C90.4749 38.1958 88.9023 34.7615 86.4626 32.3988H90.1113C91.113 32.3988 91.9856 31.6435 92.2274 30.5678L93.3181 25.7336C93.6617 24.2088 92.62 22.7304 91.2002 22.7304ZM27.1972 19.1389C28.5225 15.469 31.7312 13.0619 35.2999 13.0619H58.3879C61.9566 13.0619 65.1653 15.469 66.4905 19.1389L70.1137 29.176H23.574L27.1972 19.1389ZM17.7566 51.6954C14.2661 51.6954 11.9391 49.1252 11.9391 45.2699C11.9391 41.4146 14.2661 38.8444 17.7566 38.8444C21.2471 38.8444 26.4828 44.6274 26.4828 48.4827C26.4828 52.338 21.2471 51.6954 17.7566 51.6954ZM75.9312 51.6954C72.4407 51.6954 67.205 52.338 67.205 48.4827C67.205 44.6274 72.4407 38.8444 75.9312 38.8444C79.4217 38.8444 81.7487 41.4146 81.7487 45.2699C81.7487 49.1252 79.4217 51.6954 75.9312 51.6954Z" fill="url(#paint0_linear3)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear3" x1="22.9458" y1="0.170653" x2="83.851" y2="99.1745" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#EE3131" />
                                                            <stop offset="1" stopColor="#FF8E8E" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <i className="fas fa-plus plus-ico"></i>
                                            </div>
                                            <form>
                                                <h6 className="m-b15">{card.heading}</h6>
                                                <div className="input-group m-b20">
                                                    <Form.Select className="form-control sm borderNone">
                                                        <option>-Select Brand-</option>
                                                        <option>Maruti</option>
                                                        <option>Hyundai</option>
                                                        <option>Honda</option>
                                                        <option>Toyota</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="input-group m-b20">
                                                    <Form.Select className="form-control sm borderNone">
                                                        <option>-Select Model-</option>
                                                        <option>Creta</option>
                                                        <option>Elantra</option>
                                                        <option>EON</option>
                                                        <option>Grand i10</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="input-group">
                                                    <Form.Select className="form-control sm borderNone">
                                                        <option>-Select Variant-</option>
                                                        <option>Creta</option>
                                                        <option>Elantra</option>
                                                        <option>EON</option>
                                                        <option>Grand i10</option>
                                                    </Form.Select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="col-12 text-center">
                                <Link to="/compare-result" className="btn btn-primary">Compare Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========Car slider >>>>>> */}
                <CommenCarSlider title={"Similar Car Comparisons"} />
                {/* ======================Contect Us page >>> */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div>
        </>
    )
}

export default ComapeCar
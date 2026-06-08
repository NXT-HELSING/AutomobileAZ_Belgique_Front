import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const LatestCarBanner = (props) => {
    return (
        <>
            <div className="dlab-bnr-inr dlab-bnr-inr-lg style-1 overlay-black-middle" style={{ backgroundImage: `url(${IMAGE.bnr2})` }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">{props.title}</h1>
                        <div className="dlab-separator"></div>
                        <div className="car-search-box item3 row">
                            <div className="col-lg-3 col-md-4">
                                <div className="selected-box">
                                    <Form.Select className="form-control sm">
                                        <option>Select Brand</option>
                                        <option>Popular Brands</option>
                                        <option>Honda</option>
                                        <option>Toyota</option>
                                        <option>Mahindra</option>
                                        <option>Tata</option>
                                        <option>Ford</option>
                                        <option>Renault</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="selected-box">
                                    <Form.Select className="form-control sm">
                                        <option>Select Style</option>
                                        <option>Hatchback</option>
                                        <option>MUV</option>
                                        <option>SUV</option>
                                        <option>Luxury</option>
                                        <option>Minivans</option>
                                        <option>Coupe</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 border-0">
                                <div className="selected-box">
                                    <Form.Select className="form-control sm">
                                        <option>Launch Month</option>
                                        <option>In Last 3 Months</option>
                                        <option>In Last 6 Months</option>
                                        <option>In Last 1 Year</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mx-auto">
                                <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                                    <span className="d-flex justify-content-between w-100">FIND<i className="las la-long-arrow-alt-right"></i></span>
                                </Link>
                            </div>
                            <img className="img2 move-2" src={IMAGE.patternImg5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestCarBanner
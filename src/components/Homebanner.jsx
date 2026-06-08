import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Homeslide from '../element/Homeslide'

const Homebanner = () => {
    return (
        <>
            <div className="col-lg-6">
                <div className="banner-content-area">
                    <div className="trending-text">
                        <span className="badge badge-primary">TRENDING</span>
                        <span>2023 FORT MUSTANG</span>
                    </div>
                    <img className="pattern-img move-1" src={IMAGE.patternImg} alt="" />
                    <h1 className="title">Say hello to best car dealer platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className="car-search-box row item3">
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select className="form-control sm">
                                    <option>Make</option>
                                    <option>BMW</option>
                                    <option>Mercedes</option>
                                    <option>Audi</option>
                                    <option>Toyota</option>
                                    <option>Volkswagen</option>
                                    <option>Honda</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select className="form-control sm">
                                    <option>CLASS</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Hatchback</option>
                                    <option>Coupe</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select className="form-control sm">
                                    <option>MODEL</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Link to={'/car-listing'} className="btn btn-primary btn-lg effect-1 d-flex align-items-center justify-content-between">
                                <span className="d-flex justify-content-between w-100">FIND<i className="las la-long-arrow-alt-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="advance-search">
                        <Link to={'/car-listing'} className="text-primary">Try advanced search  <i className="las la-long-arrow-alt-right"></i></Link>
                    </div>
                    <div className="popular-brand m-t40">
                        <span>Popular Brands</span>
                        <div className="brand-list">
                            <Link to={'/car-listing'}>HONDO</Link>
                            <Link to={'/car-listing'}>FORT</Link>
                            <Link to={'/car-listing'}>TOYOTO</Link>
                            <Link to={'/car-listing'}>PORCE</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Homeslide />
        </>
    );
};

export default Homebanner;

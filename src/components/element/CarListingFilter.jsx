import React from 'react'
import { Link } from 'react-router-dom';
import MultiRangeSlider from '../components/MultiRangeSlider';
import { Form } from 'react-bootstrap';


const CarListingFilter = (props) => {
    return (
        <>

            <div className="col-xl-4 col-lg-4 m-b30">
                <aside className="side-bar sticky-top left">
                    <div className="section-head">
                        <h3 className="title">{props.title}</h3>
                        <h6 className="sub-title style-1">{props.text}</h6>
                    </div>
                    <form>
                        <div className="widget widget_search">
                            <div className="form-group search-bx m-b20">
                                <div className="input-group">
                                    <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn shadow-none"><i className="la la-search scale3"></i></button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group m-b20">
                                <Form.Select className="form-control cursorPointer borderNone">
                                    <option>Choose Brand</option>
                                    <option>Maruti</option>
                                    <option>Hyundai</option>
                                    <option>Honda</option>
                                </Form.Select>
                            </div>
                            <div className="form-group">
                                <Form.Select className="form-control cursorPointer borderNone">
                                    <option>Choose Class</option>
                                    <option>First</option>
                                    <option>Luxury</option>
                                </Form.Select>
                            </div>
                        </div>

                        <div className="widget widget_product_tag">
                            <div className="d-flex justify-content-between m-b20 align-items-center">
                                <h5>Model</h5>
                                <div className="form-check style-1">
                                    <input type="checkbox" className="form-check-input" id="checkAll" />
                                    <label className="form-check-label" htmlFor="checkAll">Select All</label>
                                </div>
                            </div>
                            <div className="btn-group product-tag-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck1" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck1">CITY CAR</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck2">SPORT</label>

                                <input type="checkbox" className="btn-check" id="btncheck3" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck3">SUV</label>

                                <input type="checkbox" className="btn-check" id="btncheck4" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck4">OFFROAD</label>
                            </div>
                        </div>


                        <div className="widget widget_price_range">
                            <h5>Price range</h5>

                            <MultiRangeSlider
                                min={0}
                                max={1000}
                                onChange={({min,max})=>`${min},${max}`}
                            />

                        </div>
                        <div className="widget">
                            <div className="form-group m-b20">
                                <Form.Select className="form-control cursorPointer borderNone">
                                    <option>Any fuel</option>
                                    <option>1 liter</option>
                                    <option>2 liter</option>
                                    <option>3 liter</option>
                                </Form.Select>
                            </div>
                            <div className="form-group m-b20">
                                <Form.Select className="form-control cursorPointer borderNone">
                                    <option>Colour</option>
                                    <option>Black</option>
                                    <option>White</option>
                                    <option>Red</option>
                                    <option>Green</option>
                                </Form.Select>
                            </div>
                            <div className="form-group m-b30">
                                <Form.Select className="form-control cursorPointer borderNone">
                                    <option>Transmision</option>
                                    <option>auto</option>
                                    <option>manual</option>
                                </Form.Select>
                            </div>
                            <div className="form-group">
                                <Link to={'#'} className="btn btn-lg shadow-none btn-primary d-flex justify-content-between cursorUnsate">
                                    FIND CARS<i className="las la-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </form>
                </aside>
            </div>

        </>
    )
}

export default CarListingFilter
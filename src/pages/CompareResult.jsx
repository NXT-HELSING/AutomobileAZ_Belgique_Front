import React from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import CommenCarSlider from '../element/CommenCarSlider'
import ContectUs from '../components/ContectUs'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'



const carImage = [
    { img: IMAGE.productPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },
]

// const categeryList = [
//     { heading: 'Overview', heading2: 'Plus Hyundai EON ', heading3: 'Hyundai EON LPG ', heading4: 'Hyundai EON' },
//     { heading: 'Standard Features', heading2: 'Plus Hyundai EON ', heading3: 'Hyundai EON LPG ', heading4: 'Hyundai EON' },
//     { heading: 'Engine', heading2: 'Plus Hyundai EON ', heading3: 'Hyundai EON LPG ', heading4: 'Hyundai EON' },
//     { heading: 'Transmission', heading2: 'Plus Hyundai EON ', heading3: 'Hyundai EON LPG ', heading4: 'Hyundai EON' },
// ]
// const categeryListText = [
//     { text1: 'Fuel Type', text2: 'Diesel', text3: 'Diesel', text4: 'Petrol' },
//     { text1: 'Fuel Type', text2: 'Diesel', text3: 'Diesel', text4: 'Petrol' },
//     { text1: 'Fuel Type', text2: 'Diesel', text3: 'Diesel', text4: 'Petrol' },
//     { text1: 'Fuel Type', text2: 'Diesel', text3: 'Diesel', text4: 'Petrol' },
// ];


export const Results = () => {
    return (
        <section className="content-inner-2">
            <div className="container">
                <div className="row m-b30 lightgallery">
                    <div className="col-12 m-b30">
                        <h3 className="">Compare Hyundai Magna Plus Vs Hyundai Plus</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-xl-3 m-b40">
                        <div className="compare-box">
                            <form className="row">
                                <h6 className="m-b15 col-xl-12">Compare Car</h6>
                                <div className="col-xl-12 col-lg-3 m-b20">
                                    <Form.Select className="form-control sm borderNone">
                                        <option>-Select Brand-</option>
                                        <option>Maruti</option>
                                        <option>Hyundai</option>
                                        <option>Honda</option>
                                        <option>Toyota</option>
                                    </Form.Select>
                                </div>
                                <div className="col-xl-12 col-lg-3 m-b20">
                                    <Form.Select className="form-control sm borderNone">
                                        <option>-Select Model-</option>
                                        <option>Creta</option>
                                        <option>Elantra</option>
                                        <option>EON</option>
                                        <option>Grand i10</option>
                                    </Form.Select>
                                </div>
                                <div className="col-xl-12 col-lg-3 m-b20">
                                    <Form.Select className="form-control sm borderNone">
                                        <option>-Select Variant-</option>
                                        <option>Creta</option>
                                        <option>Elantra</option>
                                        <option>EON</option>
                                        <option>Grand i10</option>
                                    </Form.Select>
                                </div>
                                <div className="col-xl-12 col-lg-3">
                                    <button className="btn btn-primary d-block w-100">Compare Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {carImage.map((item, index) => {
                        return (
                            <div className="col-xl-3 col-lg-4 m-b30" key={index}>
                                <div className="input-group m-b30">
                                    <Form.Select className="form-control sm borderNone">
                                        <option>Select</option>
                                        <option>Sportback</option>
                                        <option>Cabriolet</option>
                                    </Form.Select>
                                </div>
                                <div className="car-list-box box-sm borderNone">
                                    <div className="media-box">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="list-info" style={{ boxShadow: '1px 2px 6px ' }}>
                                        <h5 className="title mb-0"><Link to="/car-details">SMART GT AA-211</Link></h5>
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
                            </div>
                        )
                    })}
                </div>
                {/* next section */}
                <div className="col-12">
                    <div className="m-b30">
                        <ul className="table-dl table-col4 clearfix ">
                            <li className="table-head">
                                <div className="leftview compare-list-1">Overview</div>
                                <div className="rightview compare-list-2"> Plus Hyundai EON </div>
                                <div className="rightview compare-list-3"> Hyundai EON LPG </div>
                                <div className="rightview compare-list-4"> Hyundai EON </div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Fuel Type</div>
                                <div className="rightview compare-list-2"> Diesel 	</div>
                                <div className="rightview compare-list-3"> Diesel</div>
                                <div className="rightview compare-list-4"> Petrol</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Mileage (ARAI) </div>
                                <div className="rightview compare-list-2"> 17.2kmpl</div>
                                <div className="rightview compare-list-3"> 18.53kmpl</div>
                                <div className="rightview compare-list-4"> 18.9kmpl</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Mileage City </div>
                                <div className="rightview compare-list-2"> —</div>
                                <div className="rightview compare-list-3"> —</div>
                                <div className="rightview compare-list-4"> —</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Available Colors</div>
                                <div className="rightview compare-list-2"> Yes	</div>
                                <div className="rightview compare-list-3"> Yes</div>
                                <div className="rightview compare-list-4"> Yes</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Fuel Tank Capacity</div>
                                <div className="rightview compare-list-2"> 58Litres</div>
                                <div className="rightview compare-list-3"> 75Litres</div>
                                <div className="rightview compare-list-4"> 55Litres</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Seating Capacity</div>
                                <div className="rightview compare-list-2"> 3</div>
                                <div className="rightview compare-list-3"> 4</div>
                                <div className="rightview compare-list-4"> 6</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Transmission Type</div>
                                <div className="rightview compare-list-2"> Automatic</div>
                                <div className="rightview compare-list-3"> Automatic</div>
                                <div className="rightview compare-list-4"> Manual</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Engine Displacement (cc)</div>
                                <div className="rightview compare-list-2"> 1968</div>
                                <div className="rightview compare-list-3"> 1968</div>
                                <div className="rightview compare-list-4"> 1997</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Offers &amp; Discount</div>
                                <div className="rightview compare-list-2"> Not Available</div>
                                <div className="rightview compare-list-3"> Not Available</div>
                                <div className="rightview compare-list-4"> 3 Offers</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Finance Available (EMI)</div>
                                <div className="rightview compare-list-2"> $ 1,80,352</div>
                                <div className="rightview compare-list-3"> $ 2,30,597</div>
                                <div className="rightview compare-list-4"> $ 1,50,592</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Service Cost</div>
                                <div className="rightview compare-list-2"> —</div>
                                <div className="rightview compare-list-3"> —</div>
                                <div className="rightview compare-list-4"> —</div>
                            </li>
                        </ul>
                    </div>
                    <div className="m-b30">
                        <ul className="table-dl table-col4 clearfix">
                            <li className="table-head">
                                <div className="leftview compare-list-1">Standard Features</div>
                                <div className="rightview compare-list-2"> Plus Hyundai EON </div>
                                <div className="rightview compare-list-3"> Hyundai EON LPG </div>
                                <div className="rightview compare-list-4"> Hyundai EON </div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Air Conditioner</div>
                                <div className="rightview compare-list-2"> <i className="fa fa-check font-18 text-green"></i> 	</div>
                                <div className="rightview compare-list-3"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-4"> <i className="fas fa-times font-18 text-red"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">CD Player </div>
                                <div className="rightview compare-list-2"> <i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-3"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-4"> <i className="fa fa-check font-18 text-green"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">AntiLock Braking System</div>
                                <div className="rightview compare-list-2"> <i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-3"> —</div>
                                <div className="rightview compare-list-4"> <i className="fas fa-times font-18 text-red"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Power Steering</div>
                                <div className="rightview compare-list-2"> <i className="fas fa-times font-18 text-red"></i>	</div>
                                <div className="rightview compare-list-3"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-4"> <i className="fa fa-check font-18 text-green"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Power Windows</div>
                                <div className="rightview compare-list-2"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-3"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-4"> <i className="fa fa-check font-18 text-green"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Leather Seats</div>
                                <div className="rightview compare-list-2"> <i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-3"> <i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-4"> <i className="fas fa-times font-18 text-red"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Central Locking</div>
                                <div className="rightview compare-list-2"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-3"> <i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-4"> <i className="fas fa-times font-18 text-red"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Speed Sensing Auto Door Lock </div>
                                <div className="rightview compare-list-2"> <i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-3"> <i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-4"> <i className="fa fa-check font-18 text-green"></i></div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Impact Sensing Auto Door Unlock</div>
                                <div className="rightview compare-list-2"><i className="fa fa-check font-18 text-green"></i></div>
                                <div className="rightview compare-list-3"><i className="fas fa-times font-18 text-red"></i></div>
                                <div className="rightview compare-list-4"><i className="fa fa-check font-18 text-green"></i></div>
                            </li>
                        </ul>
                    </div>
                    <div className="m-b30">
                        <ul className="table-dl table-col4 clearfix ">
                            <li className="table-head">
                                <div className="leftview compare-list-1">Engine</div>
                                <div className="rightview compare-list-2"> Plus Hyundai EON </div>
                                <div className="rightview compare-list-3"> Hyundai EON LPG </div>
                                <div className="rightview compare-list-4"> Hyundai EON </div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Fuel Type</div>
                                <div className="rightview compare-list-2"> Diesel 	</div>
                                <div className="rightview compare-list-3"> Diesel</div>
                                <div className="rightview compare-list-4"> Petrol</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Mileage (ARAI) </div>
                                <div className="rightview compare-list-2"> 17.2kmpl</div>
                                <div className="rightview compare-list-3"> 18.53kmpl</div>
                                <div className="rightview compare-list-4"> 18.9kmpl</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Mileage City </div>
                                <div className="rightview compare-list-2"> —</div>
                                <div className="rightview compare-list-3"> —</div>
                                <div className="rightview compare-list-4"> —</div>
                            </li>
                        </ul>
                    </div>
                    <div className="m-b30">
                        <ul className="table-dl table-col4 clearfix ">
                            <li className="table-head">
                                <div className="leftview compare-list-1">Transmission</div>
                                <div className="rightview compare-list-2"> Plus Hyundai EON </div>
                                <div className="rightview compare-list-3"> Hyundai EON LPG </div>
                                <div className="rightview compare-list-4"> Hyundai EON </div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Fuel Type</div>
                                <div className="rightview compare-list-2"> Diesel 	</div>
                                <div className="rightview compare-list-3"> Diesel</div>
                                <div className="rightview compare-list-4"> Petrol</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Mileage (ARAI) </div>
                                <div className="rightview compare-list-2"> 17.2kmpl</div>
                                <div className="rightview compare-list-3"> 18.53kmpl</div>
                                <div className="rightview compare-list-4"> 18.9kmpl</div>
                            </li>
                            <li>
                                <div className="leftview compare-list-1">Mileage City </div>
                                <div className="rightview compare-list-2"> —</div>
                                <div className="rightview compare-list-3"> —</div>
                                <div className="rightview compare-list-4"> —</div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* next section */}
            </div>
        </section>
    )
}
const CompareResult = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr2} title={'Compare Result'} />
                <Results />
                {/* Car Slider */}
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

export default CompareResult
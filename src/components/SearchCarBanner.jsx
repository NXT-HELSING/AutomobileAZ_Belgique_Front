import React, { useState } from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const SearchCarBanner = () => {
    const [addactive,setAddactive] = useState(1);
    const links =(e)=>{
        setAddactive(e.currentTarget.value)
    }
  return (
  <>
          <div className="dlab-bnr-inr dlab-bnr-inr-lg style-1 overlay-black-middle" style={{backgroundImage: `url(${IMAGE.bnr2})`}}>
              <div className="container">
                  <div className="dlab-bnr-inr-entry">
                      <h1 className="text-white">Used Car</h1>
                      <div className="dlab-separator"></div>
                      <div>
                          <ul className="nav nav-tabs style-1 mx-auto mt-4">
                              <li className="nav-item">
                                  <button value={1} onClick={links} className={`nav-link one ${addactive ==1?'active':''}`} data-bs-toggle="tab" data-bs-target="#by-budget" type="button">BY BUDGET</button>
                              </li>
                              <li className="nav-item">
                                  <button value={2} onClick={links} className={`nav-link two ${addactive == 2 ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#bg-modal" type="button">BY-MODAL</button>
                              </li>
                          </ul>
                      </div>
                      <div className="tab-content">
                          <div className={`tab-pane fade ${addactive == 1 ?'active show':''}`} id="by-budget">
                              <div className="car-search-box row item2">
                                  <div className="col-md-4">
                                      <div className="selected-box">
                                          <Form.Select className="form-control sm">
                                              <option>Select Budget</option>
                                              <option>1 Lakh - 5 Lakh</option>
                                              <option>5 Lakh - 10 Lakh</option>
                                              <option>10 Lakh - 20 Lakh</option>
                                              <option>20 Lakh - 50 Lakh</option>
                                              <option>50 Lakh - 1 Crore</option>
                                              <option>Above 1 Crore</option>
                                          </Form.Select>
                                      </div>
                                  </div>
                                  <div className="col-md-4 border-0">
                                      <div className="selected-box">
                                          <Form.Select className="form-control sm">
                                              <option>Select City</option>
                                              <option>Hatchback</option>
                                              <option>Sedans</option>
                                              <option>MUV</option>
                                          </Form.Select>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                                          <span className="d-flex justify-content-between w-100">FIND<i className="las la-long-arrow-alt-right"></i></span>
                                      </Link>
                                  </div>
                                  <img className="img2 move-2" src={IMAGE.patternImg5} alt=""/>
                              </div>
                          </div>
                          <div className={`tab-pane fade ${addactive == 2 ? 'active show' : ''}`} id="bg-modal">
                              <div className="car-search-box row item2">
                                  <div className="col-md-4">
                                      <div className="selected-box">
                                          <Form.Select className="form-control sm">
                                              <option>Select Model</option>
                                              <option>1 Lakh - 5 Lakh</option>
                                              <option>5 Lakh - 10 Lakh</option>
                                              <option>10 Lakh - 20 Lakh</option>
                                              <option>20 Lakh - 50 Lakh</option>
                                              <option>50 Lakh - 1 Crore</option>
                                              <option>Above 1 Crore</option>
                                          </Form.Select>
                                      </div>
                                  </div>
                                  <div className="col-md-4 border-0">
                                      <div className="selected-box">
                                          <Form.Select className="form-control sm">
                                              <option>Select City</option>
                                              <option>Hatchback</option>
                                              <option>Sedans</option>
                                              <option>MUV</option>
                                          </Form.Select>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                                          <span className="d-flex justify-content-between w-100">FIND<i className="las la-long-arrow-alt-right"></i></span>
                                      </Link>
                                  </div>
                                  <img className="img2 move-2" src={IMAGE.patternImg5} alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </>
  )
}

export default SearchCarBanner
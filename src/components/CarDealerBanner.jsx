import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const CarDealerBanner = (props) => {
  return (
      <div className="dlab-bnr-inr dlab-bnr-inr-lg style-1 overlay-black-middle" style={{backgroundImage: `url(${IMAGE.bnr2})`}}>
          <div className="container">
              <div className="dlab-bnr-inr-entry">
                  <h1 className="text-white">{props.title}</h1>
                  <div className="dlab-separator"></div>
                  <div className="car-search-box row item2">
                      <div className="col-md-4">
                          <div className="selected-box">
                              <Form.Select className="form-control sm">
                                  <option>Sélectionner une marque</option>
                                  <option>Marques populaires</option>
                                  <option>Honda</option>
                                  <option>Toyota</option>
                                  <option>BMW</option>
                                  <option>Audi</option>
                                  <option>Renault</option>
                              </Form.Select>
                          </div>
                      </div>
                      <div className="col-md-4 border-0">
                          <div className="selected-box">
                              <Form.Select className="form-control sm">
                                  <option>Ville</option>
                                  <option>Bruxelles</option>
                                  <option>Anvers</option>
                                  <option>Gand</option>
                              </Form.Select>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                              <span className="d-flex justify-content-between w-100">RECHERCHER<i className="las la-long-arrow-alt-right"></i></span>
                          </Link>
                      </div>
                      <img className="img2 move-2" src={IMAGE.patternImg2} alt=""/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CarDealerBanner
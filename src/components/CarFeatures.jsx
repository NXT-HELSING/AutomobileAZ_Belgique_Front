import React from 'react'
import CarFuturSlide from '../element/CarFuturSlide'
import { Link } from 'react-router-dom'

const CarFeatures = () => {
  return (
    <>
   
      <div className="row features-box">
        <div className="col-lg-6 align-self-center m-b30">
          <div className="content-box">
            <div className="section-head">
              <h6 className="sub-title style-1">We Bring You to The Future</h6>
              <h2 className="title">Don’t worries, we check all of unit</h2>
            </div>
            <p className="m-b40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <Link to="/about-us" className="btn btn-primary effect-1"><span>Discover More</span></Link>
          </div>
        </div>
        <CarFuturSlide />
      </div>
    </>
  )
}

export default CarFeatures
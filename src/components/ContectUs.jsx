import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'

const ContectUs = () => {
    return (
        <>

            <div className="row call-to-action-bx">
                <div className="col-xl-5 col-lg-6 me-auto">
                    <div className="section-head">
                        <h2 className="title text-white">Have any question about us?</h2>
                    </div>
                    <Link to="tel:224000221133" className="btn btn-white me-3 mb-2"><i className="fas fa-phone-volume me-sm-3 me-0 shake"></i><span className="d-sm-inline-block d-none">224 000 22 11 33</span></Link>
                    <Link to="/contact-us" className="btn btn-outline-white effect-1  mb-2"><span>Contact Us</span></Link>
                </div>
                <div className="col-lg-6">
                    <div className="media-box">
                        <img src={IMAGE.aboutPic5} className="main-img" alt="" />
                        <img src={IMAGE.patternImg3} className="pt-img move-1" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContectUs
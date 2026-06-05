import React from 'react'
import CarFuturSlide from '../element/CarFuturSlide'
import { Link } from 'react-router-dom';


const Bestcar = ({ setOpen }) => {
    return (
        <>
            <div className="row features-box">
                <CarFuturSlide />
                <div className="col-lg-6 align-self-center m-b30">
                    <div className="content-box right">
                        <div className="section-head">
                            <h6 className="sub-title style-1">Best Car in The World</h6>
                            <h2 className="title">We serve you with best car in the world</h2>
                        </div>
                        <p className="m-b40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <div className="video-bx style-1">
                            <div className="video-btn" onClick={() => { setOpen(true) }}>
                                <Link className="popup-youtube"><span className="icon"><i className="fa fa-play"></i></span>Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Bestcar
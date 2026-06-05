import React from 'react'
import { IMAGE } from '../constent/theme'
import AboutSlider from '../element/AboutSlider'


const About = () => {
    return (

        <div className="row about-bx1">
            <div className="col-lg-5">
                <div className="dlab-media">
                    <img src={IMAGE.about1} alt="" />
                </div>
            </div>
            <div className="col-lg-7 align-self-center" >
                <div className="section-head">
                    <h6 className="text-primary sub-title">ABOUT</h6>
                    <h2 className="title">About the Mobhi</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
               <AboutSlider/>
            </div>
        </div>
    )
}

export default About
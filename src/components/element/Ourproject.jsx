import React from 'react';
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';



const gallery = [
    { categery: 'brakes', img: IMAGE.home4Ourwork1 },
    { categery: 'wheels', img: IMAGE.galleryImg1 },
    { categery: 'suspansiors', img: IMAGE.galleryImg2 },
    { categery: 'steering', img: IMAGE.galleryImg5 },
    { categery: 'steering', img: IMAGE.galleryImg4 },
    { categery: 'wheels', img: IMAGE.galleryImg3 },
]
const Ourproject = () => {

    const [imgGallery, setImgGallery] = useState(gallery);
    const [addactive, setAddactive] = useState(undefined)
    const gelleryfilterBtn = (filterImgdata) => {
        let upadateItems = gallery.filter((updates) => {
            return updates.categery === filterImgdata
        });
        setAddactive(filterImgdata)
        setImgGallery(upadateItems)
    }




    return (
        <>

            <div className="section-full bg-img-fix content-inner bg-gray" id="project">
                <div className="container">
                    <div className="section-head text-center head-style-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <h2 className="title">Our Projects</h2>
                        <div className="dlab-separator-outer">
                            <div className="dlab-separator bg-primary"></div>
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                    </div>
                    <div className="site-filters style-1 clearfix center  m-b40">
                        <ul className="filters" data-toggle="buttons">
                            <li onClick={() => { gelleryfilterBtn('all'); setImgGallery(gallery) }} className={`btn
                            ${addactive === undefined ? 'active' : false}
                            ${addactive === 'all' ? 'active' : false}`}>
                                <input type="radio" />
                                <Link className="site-button-secondry wow fadeInUp"><span>Show All</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('brakes')} className={`btn ${addactive === 'brakes' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Brakes</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('suspansiors')} className={`btn ${addactive === 'suspansiors' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Suspension</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('wheels')} className={`btn ${addactive === 'wheels' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Wheels</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('steering')} className={`btn ${addactive === 'steering' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Steering</span></Link> </li>
                        </ul>
                    </div>
                    <div className="masonaryContainer">
                        <div className="container">
                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                            >
                                {imgGallery.map((image, index) => {
                                    return (
                                        <div data-exthumbimage={image.img} data-src={image.img} className="figure" key={index}>
                                            <li className="office card-container">
                                                <div className="dlab-box dlab-gallery-box">
                                                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect zoom-slow dlab-img-effect zoom">
                                                        <img src={image.img} alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon">
                                                                {/* <i className="fa fa-link icon-bx-xs check-km"></i> */}
                                                                <span className="fas fa-image icon-bx-xs check-km lightimg m-l10" title="Light Gallery Grid 1"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>

                                    )
                                })}
                            </LightGallery>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourproject
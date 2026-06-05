import React from 'react'
import { IMAGE } from '../constent/theme';
import { Link } from 'react-router-dom';




const CarList = [
    { img: IMAGE.blogPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic5 },
];
const clientLogo =[
    { logo: IMAGE.clientLogo1 },
    { logo: IMAGE.clientLogo2 },
    { logo: IMAGE.clientLogo3 },
    { logo: IMAGE.clientLogo4 },
    { logo: IMAGE.clientLogo5 },
    { logo: IMAGE.clientLogo6 },
    { logo: IMAGE.clientLogo7 },
    { logo: IMAGE.clientLogo8 },
    { logo: IMAGE.clientLogo9 },
]
const PopulerCars = (props) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-5">
                <aside className="sticky-top">
                    <div className="widget recent-posts-entry">
                        <div className="widget-title">
                            <h6 className="title">{props.categery}</h6>
                            <div className="dlab-separator style-1 text-primary mb-0"></div>
                        </div>
                        <div className="widget-post-bx">
                            {CarList.map((item, index) => {
                                return (
                                    <div className="widget-post clearfix" key={index}>
                                        <div className="dlab-media">
                                            <Link to="/popular-cars"><img src={item.img} alt="" /></Link>
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/popular-cars">Maruti Swift Dzire</Link></h4>
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date"> $7247 - $8139</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                            <Link to="/popular-cars" className="btn btn-primary d-block w-100 text-center effect-1"><span>View All Popular Cars</span></Link>
                        </div>
                    </div>
                    <div className="widget ads">
                        <img src={IMAGE.adsImg} alt="" />
                    </div>
                    <div className="widget client-logo-wg">
                        <div className="widget-title">
                            <h6 className="title">POPULAR CARS BY BRAND</h6>
                            <div className="dlab-separator style-1 text-primary mb-0"></div>
                        </div>
                        <ul>
                          {clientLogo.map((logo,ind)=>{
                            return(
                                <li className="brand-logo" key={ind}>
                                    <Link to="/popular-cars"><img src={logo.logo} alt="" /></Link>
                                </li>
                            )
                          })}
                           
                        </ul>
                    </div>
                </aside>
            </div>

        </>
    )
}

export default PopulerCars
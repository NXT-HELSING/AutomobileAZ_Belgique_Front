import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom';







const CarList = [
    { img: IMAGE.productPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic5 },
    { img: IMAGE.productGridPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productGridPic1 },
    { img: IMAGE.productPic1 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },

];


const LatestCarSider = () => {
    return (
        <>

            <div className="row lightgallery">
                {CarList.map((item, index) => {
                    return (
                        <div className="col-xl-4 col-lg-6 m-b30" key={index}>
                            <div className="car-list-box box-sm">
                                <div className="media-box">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="list-info">
                                    <h5 className="title mb-0"><Link to="/car-details" data-splitting>SMART GT AA-211</Link></h5>
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
                <nav aria-label="Blog Pagination">
                    <ul className="pagination text-center m-b30">
                        <li className="page-item"><Link className="page-link prev" to="#"><i className="la la-angle-left"></i></Link></li>
                        <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item"><Link className="page-link next" to="#"><i className="la la-angle-right"></i></Link></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default LatestCarSider
import React, { useState } from 'react'
import ContectUs from '../components/ContectUs'
import CarListingFilter from '../element/CarListingFilter'
import { IMAGE } from '../constent/theme'
import CarlistingBanner from '../element/CarlistingBanner'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'


const CarList = [
    { img: IMAGE.productPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic5 },
    { img: IMAGE.productGridPic1 },
]
const SearchCarColumn = () => {
    const [selectBtn, setSelectBtn] = useState('Newest');
    const [bgColor, setColor] = useState(2);

    const setColorBtn = (action) => {
        setColor(action)
    }
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bannerImg1} title={'Car Search Result'} />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            {/* ==============Car listing filters >>>>>>>> */}
                            <CarListingFilter title={'ADVANCED SEARCH'} text={
                                <div className="dlab-separator style-1 text-primary mb-0"></div>
                            } />
                            {/* ===============Car sort by >>>>>>>> */}

                            <div className="col-xl-8 col-lg-8">
                                <div className="catagory-result-row">
                                    <h5 className="serch-result">Showing <strong>8 product from 40</strong></h5>
                                    <div className='d-flex align-items-center'>
                                        <span>Sort by</span>
                                        <Dropdown className='drop-select-btn custom-select '>
                                            <Dropdown.Toggle as="div" className='btn shadow-none m-l20' style={{ borderRadius: '7px' }}>
                                                {selectBtn}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item className={`${bgColor === 2 ? 'bg-primary text-white' : ''}`} onClick={() => { setSelectBtn('Newest'); setColorBtn(2) }}>Newest</Dropdown.Item>
                                                <Dropdown.Item className={`${bgColor === 1 ? 'bg-primary text-white' : ''}`} onClick={() => { setSelectBtn('Oldest'); setColorBtn(1) }}>Oldest</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="row lightgallery">
                                    {CarList.map((list, listKey) => (
                                        <div className="col-xl-6 col-lg-12 col-md-6 m-b30" key={listKey}>
                                            <div className="car-list-box">
                                                <div className="media-box">
                                                    <img src={list.img} alt="" />
                                                </div>
                                                <div className="list-info">
                                                    <h4 className="title mb-0"><Link to="/car-details" data-splitting >SMART GT AA-211</Link></h4>
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
                                    ))}
                                </div>
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination text-center m-b30">
                                        <li className="page-item"><Link className="page-link prev" to={'#'}><i className="la la-angle-left"></i></Link></li>
                                        <li className="page-item"><Link className="page-link active" to={'#'}>1</Link></li>
                                        <li className="page-item"><Link className="page-link" to={'#'}>2</Link></li>
                                        <li className="page-item"><Link className="page-link" to={'#'}>3</Link></li>
                                        <li className="page-item"><Link className="page-link next" to={'#'}><i className="la la-angle-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* =============================================== */}
                        </div>
                    </div>
                    {/* ======================Contect Us page >>> */}
                    <section className="content-inner">
                        <div className="container">
                            <ContectUs />
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}

export default SearchCarColumn
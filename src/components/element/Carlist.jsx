import React, { useState } from 'react'
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { IMAGE } from '../constent/theme';
import { Dropdown } from 'react-bootstrap';




const CarList = [
    { img: IMAGE.productPic1 },
    { img: IMAGE.productPic2 },
    { img: IMAGE.productPic3 },
    { img: IMAGE.productPic4 },
    { img: IMAGE.productPic5 },
    { img: IMAGE.productGridPic1 },
];

export const CarListSlideContent = () => {
    return (
        <>
            <div className="row lightgallery">
                {CarList.map((list, listKey) => (
                    <div className="col-xl-6 col-lg-12 col-md-6 m-b30" key={listKey}>
                        <div className="car-list-box">
                            <div className="media-box">
                                <img src={list.img} alt="" />
                            </div>
                            <div className="list-info">
                                <h4 className="title mb-0"><Link to={'/car-details'} data-splitting>SMART GT AA-211</Link></h4>
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
            </div >
            <Pagination />
        </>
    )
}
const Carlist = () => {
    const [selectBtn, setSelectBtn] = useState('Newest');
    const [bgColor, setColor] = useState(2);

    const setColorBtn = (action) => {
        setColor(action)
    }
    return (
        <>
            <div className="col-xl-8 col-lg-8">
                <div className="catagory-result-row">
                    <h5 className="serch-result">Showing <strong>8 product from 40</strong></h5>
                    <div className='d-flex align-items-center'>
                        <span>Sort by</span>
                        {/* <Form.Select className="dropdown bootstrap-select form-control custom-select ms-3 p-25">
                            <option>Newest</option>
                            <option>Oldest</option>
                        </Form.Select> */}
                        <Dropdown className='drop-select-btn custom-select '>
                            <Dropdown.Toggle as="div" className='btn shadow-none m-l20' style={{ borderRadius: '7px' }}>
                                {selectBtn}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className={`${bgColor === 2 ? 'bg-primary text-white' : ''}`}
                                    onClick={() => { setSelectBtn('Newest'); setColorBtn(2) }}
                                >Newest</Dropdown.Item>
                                <Dropdown.Item className={`${bgColor === 1 ? 'bg-primary text-white' : ''}`}
                                    onClick={() => { setSelectBtn('Oldest'); setColorBtn(1) }}
                                >Oldest</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <CarListSlideContent />
            </div>
        </>
    )
}


export default Carlist;
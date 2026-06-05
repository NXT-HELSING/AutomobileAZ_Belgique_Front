import React, { useState } from 'react'
import CarDetailSpacation from './CarDetailSpacation'
import { IMAGE } from '../constent/theme';
import CarlistingBanner from '../element/CarlistingBanner';
import CarDetailTwo from './CarDetailTwo';
import CarDetailPrice from './CarDetailPrice';
import CarDetailCompare from './CarDetailCompare';
import CarDetailPicture from './CarDetailPicture';
import { Link } from 'react-router-dom';

const CarCompare = () => {
    const [addActive, setActive] = useState('Compare')
    const [banner, setBanner] = useState([IMAGE.bnr2]);
    const [heading, setHeading] = useState('Compare Result');
    const [data, setData] = useState(<CarDetailCompare />);


    function changeData(action) {
        switch (action) {
            case 'Overview':
                setBanner([IMAGE.bannerImg1])
                setHeading('Car Details')
                setActive('Overview');
                setData(<CarDetailTwo />)
                break;
            case 'Specifications':
                setBanner([IMAGE.bnr2])
                setHeading('Car Specifications')
                setActive('Specifications');
                setData(<CarDetailSpacation />)
                break;
            case 'Price':
                setBanner([IMAGE.bnr2])
                setHeading('Car Price')
                setActive('Price')
                setData(<CarDetailPrice />)
                break;
            case 'Compare':
                setBanner([IMAGE.bnr2])
                setHeading('Compare Result')
                setActive('Compare')
                setData(<CarDetailCompare />)
                break;
            case 'Pictures':
                setBanner([IMAGE.bnr2])
                setHeading('Car Pictures')
                setActive('Pictures')
                setData(<CarDetailPicture />)
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={banner} title={heading} />

                <div className="car-details-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="nav">
                                    <ul>
                                        <li className={`${addActive === 'Overview' ? 'active' : ''}`} onClick={() => { changeData('Overview') }}><Link to="#">Overview</Link></li>
                                        <li className={`${addActive === 'Specifications' ? 'active' : ''}`} onClick={() => { changeData('Specifications') }}><Link to="#">Specifications</Link></li>
                                        <li className={`${addActive === 'Price' ? 'active' : ''}`} onClick={() => { changeData('Price') }}><Link to="#">Price</Link></li>
                                        <li className={`${addActive === 'Compare' ? 'active' : ''}`} onClick={() => { changeData('Compare') }}><Link to="#">Compare</Link></li>
                                        <li className={`${addActive === 'Pictures' ? 'active' : ''}`} onClick={() => { changeData('Pictures') }}><Link to="#">Pictures</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {data}
            </div>
        </>
    )
}

export default CarCompare
import React from 'react'
import { IMAGE } from '../constent/theme'
import ContectUs from '../components/ContectUs';
import CarlistingBanner from '../element/CarlistingBanner';
import CarListingFilter from '../element/CarListingFilter';
import Carlist from '../element/Carlist';







const CarListing1 = () => {
    return (
        <>

            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bannerImg1} title={'Car Collections'} />
                {/* --- Car listing filters ---- */}
                <CarListingData />
            </div >
        </>
    )
}
export default CarListing1;

export const CarListingData = () => {
    return (
        <>
            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <CarListingFilter title={'FILTER'} text={'Search your car'} />
                        <Carlist />
                        {/* ================ */}
                    </div>
                </div >
            </section >
            < section className="content-inner" >
                <div className="container">
                    <ContectUs />
                </div>
            </section >
        </>
    )
}

import React from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import CarListingFilter from '../element/CarListingFilter'
import { CarListSlideContent } from '../element/Carlist'
import ContectUs from '../components/ContectUs'

const MyCity = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bannerImg1} title={'Used Car Search Result'} />
                {/* Next section  */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <CarListingFilter title={'FILTER'} text={'Search your car'} />
                            <div className="col-xl-8 col-lg-8">
                                <div className="catagory-result-row">
                                    <h5 className="serch-result">Showing <strong>8 product from 40</strong></h5>
                                </div>
                                <CarListSlideContent />
                            </div>
                            {/* ================ */}
                        </div>
                    </div >
                </section >
                < section className="content-inner" >
                    <div className="container">
                        <ContectUs />
                    </div>
                </section >
            </div>
        </>
    )
}

export default MyCity
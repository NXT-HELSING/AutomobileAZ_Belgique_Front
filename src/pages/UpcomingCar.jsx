import React from 'react'
import LatestCarBanner from '../element/LatestCarBanner'
import LatestCarSider from '../components/LatestCarSider'
import PopulerCars from '../components/PopulerCars'
import ContectUs from '../components/ContectUs'

const UpcomingCar = () => {
    return (
        <>
            <div className="page-content bg-white">
                <LatestCarBanner title={'Upcoming Cars'} />
                {/* ========Latest car >>>>>>>> */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                <div className="section-head">
                                    <h3>UPCOMING CARS</h3>
                                </div>
                                <LatestCarSider  />
                            </div>
                            <PopulerCars categery={'Popular Cars'} />
                        </div>
                    </div>
                </section >
                {/* ======================Contect Us page >>> */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div>
        </>
    )
}

export default UpcomingCar
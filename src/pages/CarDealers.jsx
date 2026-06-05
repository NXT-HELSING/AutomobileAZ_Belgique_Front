import React from 'react'
import CarDealerBanner from '../components/CarDealerBanner'
import CarDealerCards from '../element/CarDealerCards'
import ContectUs from '../components/ContectUs'
import CommenCarSlider from '../element/CommenCarSlider'






const CarDealers = () => {

  return (
    <>
      <div className="page-content bg-white">
        <CarDealerBanner title={'Car dealers'} />
        {/* ============Car Dealer cards >>>>>> */}
        <CarDealerCards />
        {/* =========Car slider >>>>>> */}
        <CommenCarSlider title={"FOR YOUR QUICK LOOK"} />
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

export default CarDealers
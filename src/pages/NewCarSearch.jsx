import React from 'react'
import SearchCarBanner from '../components/SearchCarBanner'
import Home3bannerSlide from '../element/Home3bannerSlide'
import CityCardSlider from '../components/CityCardSlider'
import ContectUs from '../components/ContectUs'




const NewCarSearch = () => {
    return (
        <>
            <div className="page-content bg-white">
                <SearchCarBanner />
                <Home3bannerSlide />
                <Data />
            </div>
        </>
    )
}
export const Data = () => {
    return (
        <>
            <CityCardSlider />
            {/* Contect Us page  */}
            <section className="content-inner">
                <div className="container">
                    <ContectUs />
                </div>
            </section>
        </>
    )
}

export default NewCarSearch
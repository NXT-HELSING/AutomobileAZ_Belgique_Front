import React from 'react'
import Home3Slider from '../element/Home3Slider'
import NewcarSlider from '../element/NewcarSlider'
import { Link } from 'react-router-dom'
import ContectUs from '../components/ContectUs'
import Home3bannerSlide from '../element/Home3bannerSlide'
import CityCardSlider from '../components/CityCardSlider'




const home3Cards = [
    { heading: 'Are You Looking' },
    { heading: 'Are You Looking' },
    { heading: 'Are You Looking' },
];



const Home3 = () => {
    return (
        <>
            <div className="page-content bg-white">
                <Home3Slider />
                <NewcarSlider />
                {/* ======Home slider three >>>> */}
                <Home3bannerSlide />
                {/* ==========Home three cards >>>> */}

                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            {
                                home3Cards.map((card, cardKey) => {
                                    return (
                                        <div className="col-lg-4 m-b30" key={cardKey}>
                                            <div className="icon-bx-wraper style-1 hover-overlay-effect">
                                                <div className="icon-content">
                                                    <h6 className="text-primary m-b15">{card.heading}</h6>
                                                    <h4 className="title m-b20">TO BUY A CAR ?</h4>
                                                    <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..</p>
                                                    <Link to={'/new-car-search'} className="btn btn-outline-primary">
                                                        Search Your Car
                                                    </Link>
                                                </div>
                                                <div className="effect bg-primary"></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                {/* ==========Home three used cars slider >>>> */}
                <CityCardSlider />
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

export default Home3
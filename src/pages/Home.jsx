import React, { useState } from 'react'
import Homebanner from '../components/Homebanner'
import About from '../components/About'
import CarFeatures from '../components/CarFeatures'
import TopDeal from '../components/TopDeal'
import Bestcar from '../components/Bestcar'
import ContectUs from '../components/ContectUs'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
           

            <div className="page-content bg-white">
                <div className="banner-one">
                    <div className="row">
                        <Homebanner />
                    </div>
                </div>
                {/* import About page >>> */}
                <section className="content-inner-2 overflow-hidden">
                    <div className="container">
                        <About />
                    </div>
                </section>
                {/* Car Future page */}
                <section className="content-inner-2">
                    <div className="container">
                        <CarFeatures />
                    </div>
                </section>
                {/* Top deals page >>> */}
                <section className="content-inner-2">
                    <div className="container-fluid">
                        <div className="section-head space-lg text-center">
                            <h2 className="title">Top deals of the week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <TopDeal />
                    </div>
                </section>
                {/* Best Car page >>> */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row features-box">
                            <Bestcar setOpen={setOpen} />
                        </div>
                    </div>
                </section>
                {/* Contect Us page >>> */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div >
            <ModalVideo channel="youtube" autoplay
                isOpen={open} videoId="PkkV1vLHUvQ" onClose={() => setOpen(false)} />   
        </>
    )
}

export default Home
import React from 'react'
import CarFuturSlide from '../element/CarFuturSlide'
import { Link } from 'react-router-dom';


const Bestcar = ({ setOpen }) => {
    return (
        <>
            <div className="row features-box">
                <CarFuturSlide />
                <div className="col-lg-6 align-self-center m-b30">
                    <div className="content-box right">
                        <div className="section-head">
                            <h6 className="sub-title style-1">Les meilleures voitures d'occasion</h6>
                            <h2 className="title">Nous vous proposons les meilleures voitures au meilleur prix</h2>
                        </div>
                        <p className="m-b40">Depuis 1993, AutomobileAZ sélectionne avec soin les véhicules d'occasion les plus fiables et les plus attractifs. Notre expertise de plus de 30 ans nous permet de vous offrir une gamme variée, des citadines aux berlines de luxe, livrées clé en main en Belgique.</p>
                        <div className="video-bx style-1">
                            <div className="video-btn" onClick={() => { setOpen(true) }}>
                                <Link className="popup-youtube"><span className="icon"><i className="fa fa-play"></i></span>Voir la vidéo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Bestcar
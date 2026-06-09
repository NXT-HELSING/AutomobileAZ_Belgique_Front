import React from 'react'
import CarFuturSlide from '../element/CarFuturSlide'
import { Link } from 'react-router-dom'

const CarFeatures = () => {
  return (
    <>
   
      <div className="row features-box">
        <div className="col-lg-6 align-self-center m-b30">
          <div className="content-box">
            <div className="section-head">
              <h6 className="sub-title style-1">Nous vous accompagnons vers l'avenir</h6>
              <h2 className="title">Soyez serein, chaque véhicule est contrôlé</h2>
            </div>
            <p className="m-b40">Chez AutomobileAZ, chaque véhicule d'occasion est soigneusement inspecté avant d'être mis en vente. Nous garantissons la qualité et la fiabilité de notre sélection pour vous offrir une expérience d'achat en toute confiance, à Meise et dans toute la Belgique.</p>
            <Link to="/about-us" className="btn btn-primary effect-1"><span>En savoir plus</span></Link>
          </div>
        </div>
        <CarFuturSlide />
      </div>
    </>
  )
}

export default CarFeatures
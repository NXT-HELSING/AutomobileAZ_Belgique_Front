import React from 'react'
import { IMAGE } from '../constent/theme'
import AboutSlider from '../element/AboutSlider'


const About = () => {
    return (

        <div className="row about-bx1">
            <div className="col-lg-5">
                <div className="dlab-media">
                    <img src={IMAGE.about1} alt="" />
                </div>
            </div>
            <div className="col-lg-7 align-self-center" >
                <div className="section-head">
                    <h6 className="text-primary sub-title">À PROPOS</h6>
                    <h2 className="title">À propos d’AutomobileAZ</h2>
                </div>
                <p>Implanté à Meise et actif à Vilvoorde, AutomobileAZ est un garage familial belge fondé en 1993. Nous achetons, contrôlons et vendons des voitures d’occasion avec transparence. Pas de mauvaise surprise : chaque véhicule est inspecté, révisé et garanti.</p>
               <AboutSlider/>
            </div>
        </div>
    )
}

export default About
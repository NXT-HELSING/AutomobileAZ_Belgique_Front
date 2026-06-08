import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'


const cards = [
    { icon: IMAGE.clientLogo1 },
    { icon: IMAGE.clientLogo2 },
    { icon: IMAGE.clientLogo3 },
    { icon: IMAGE.clientLogo4 },
    { icon: IMAGE.clientLogo5 },
    { icon: IMAGE.clientLogo6 },
    { icon: IMAGE.clientLogo7 },
    { icon: IMAGE.clientLogo8 },
    { icon: IMAGE.clientLogo9 },
    { icon: IMAGE.clientLogo10 },
    { icon: IMAGE.clientLogo11 },
    { icon: IMAGE.clientLogo12 },
    { icon: IMAGE.clientLogo13 },
    { icon: IMAGE.clientLogo14 },
    { icon: IMAGE.clientLogo15 },
    { icon: IMAGE.clientLogo16 },
    { icon: IMAGE.clientLogo17 },
    { icon: IMAGE.clientLogo18 },
    { icon: IMAGE.clientLogo1 },
    { icon: IMAGE.clientLogo2 },
    { icon: IMAGE.clientLogo3 },
    { icon: IMAGE.clientLogo4 },
    { icon: IMAGE.clientLogo5 },
    { icon: IMAGE.clientLogo6 },
    { icon: IMAGE.clientLogo7 },
    { icon: IMAGE.clientLogo8 },
    { icon: IMAGE.clientLogo9 },
    { icon: IMAGE.clientLogo10 },
    { icon: IMAGE.clientLogo11 },
    { icon: IMAGE.clientLogo12 },
]

const CarDealerCards = () => {
    return (
        <>

            <section className="content-inner-2 brand-logo-area">
                <div className="container">
                    <div className="section-head">
                        <h3 className="title">CONNECT TO THE RIGHT DEALER</h3>
                    </div>
                    <div className="row">
                        {cards.map((item, ind) => {
                            return (
                                <div key={ind} className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30">
                                    <div className="brand-logo">
                                        <Link to="/car-service-center"><img src={item.icon} alt="" /></Link>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default CarDealerCards
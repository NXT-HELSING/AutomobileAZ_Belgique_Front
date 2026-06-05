import React from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>

            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr1} title={'404'} />
                <section className="content-inner-1">
                    <div className="container">
                        <div className="error-page text-center" data-text="ERROR">
                            <div className="dz_error">404</div>
                            <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                            <Link to={'/'} className="btn btn-primary effect"><span>BACK TO HOMEPAGE</span></Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Error404







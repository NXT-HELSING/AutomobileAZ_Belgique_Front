import React from 'react'
import { IMAGE } from '../constent/theme'
import Ourproject from '../element/Ourproject'
import Testimonial from '../components/Testimonial';
import { Link } from 'react-router-dom';


const cards = [
  { img: IMAGE.home4Ourwork1, name: 'LUBE, OIL AND FILTERS' },
  { img: IMAGE.home4Ourwork2, name: 'BELTS AND HOSES' },
  { img: IMAGE.home4Ourwork3, name: 'ENGINE DIAGNOSTICS' },
];
const ourService = [
  {
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 23 23" fill="#fff" height="40" width="40" ><path d="M8 3V0L4 4l4 4V5a6.02 6.02 0 0 1 6 6c0 1-.3 2-.7 2.8l1.5 1.5C15.5 14 16 12.6 16 11c0-4.4-3.6-8-8-8h0zm0 14a6.02 6.02 0 0 1-6-6c0-1 .3-2 .7-2.8L1.2 6.7C.5 8 0 9.4 0 11c0 4.4 3.6 8 8 8v3l4-4-4-4v3h0z" fillRule="evenodd" /></svg>
    , text: 'AIR CONDITIONING'
  },
  {
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 32 32" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" ><circle cx="7" cy="23" r="3" /><circle cx="23" cy="23" r="3" /><path d="M28 19h2M4 16h20m-11-6l-3 6m16 7h4a.94.94 0 0 0 1-1v-2c0-2.2-1.8-4-4-4h-3l-3.8-4.6a4.1 4.1 0 0 0-3.1-1.4H9.5c-1.5 0-2.9.9-3.6 2.2L4 16H3c-1.1 0-2 .9-2 2v4a.94.94 0 0 0 1 1h2m6 0h10" strokeLinecap="round" strokeMiterlimit="10" /></svg>
    , text: 'BRAKE REPAIR'
  },
  {
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" height="40" width="40"><path d="M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.264 21h-4.018c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.62 3.62 0 0 1-.608 2.007L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
    , text: 'LUBE, OIL AND FILTERS'
  },
  {
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 -2 23 27" fill="#fff" height="40" width="40" ><path d="M23 5h-3V2h1a.94.94 0 0 0 1-1 .94.94 0 0 0-1-1h-2H5 3a.94.94 0 0 0-1 1 .94.94 0 0 0 1 1h1v3H1a.94.94 0 0 0-1 1v6a.94.94 0 0 0 1 1h3a6.02 6.02 0 0 0 6 6v2H9a.94.94 0 0 0-1 1v1a.94.94 0 0 0 1 1h6a.94.94 0 0 0 1-1v-1a.94.94 0 0 0-1-1h-1v-2a6.02 6.02 0 0 0 6-6h3a.94.94 0 0 0 1-1V6a.94.94 0 0 0-1-1zM4 12H1V6h3v6zm11 10v1H9v-1h2v-3h2v3h2zm3-9c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4V2h12v11zm5-1h-3V6h3v6zm-11 1l.8-3.2L16 9l-3.2-.8L12 5l-.8 3.2L8 9l3.2.8z" /></svg>
    , text: 'BELTS AND HOSES'
  },
  {
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="28 0 40 95" height="40" width="40" ><path d="M84.084 60a11.92 11.92 0 0 0 11.918-11.916 11.92 11.92 0 0 0-11.918-11.918H82a35.52 35.52 0 0 0-1.51-3.686L82 30.968c4.652-4.651 4.652-12.196 0-16.854-4.652-4.652-12.199-4.652-16.854 0l-1.469 1.469a35.48 35.48 0 0 0-3.678-1.528v-2.142A11.92 11.92 0 0 0 48.081-.003a11.92 11.92 0 0 0-11.916 11.916v2.084c-1.261.438-2.494.938-3.687 1.51l-1.51-1.51a11.92 11.92 0 0 0-16.854 0 11.92 11.92 0 0 0 .001 16.854l1.468 1.471c-.602 1.242-1.127 2.525-1.586 3.844h-2.083A11.92 11.92 0 0 0-.003 48.084 11.92 11.92 0 0 0 11.915 60h2.14c.445 1.26.953 2.488 1.53 3.68l-1.469 1.471a11.92 11.92 0 0 0 0 16.853 11.92 11.92 0 0 0 16.853 0l1.51-1.51a37.58 37.58 0 0 0 3.687 1.51v2.084a11.92 11.92 0 0 0 11.916 11.916C54.664 96.003 60 90.667 60 84.087v-2.142c1.258-.444 2.486-.952 3.678-1.528l1.469 1.469c4.654 4.652 12.199 4.654 16.854 0a11.92 11.92 0 0 0 0-16.854l-1.51-1.512c.545-1.141 1.027-2.313 1.453-3.52h2.14 0zm-7.801 10.627a4 4 0 0 1 .002 5.656c-1.562 1.561-4.096 1.561-5.658 0l-5.857-5.857A27.87 27.87 0 0 1 52 75.711V84c0 2.209-1.791 3.998-4 4a4 4 0 0 1-4-4v-8.289c-4.743-.68-9.104-2.543-12.768-5.287l-5.859 5.859a4 4 0 0 1-5.656-5.656l5.859-5.857c-2.745-3.666-4.607-8.024-5.286-12.77H12a4 4 0 1 1 0-8h8.289c.679-4.744 2.541-9.104 5.286-12.768l-5.861-5.861a4 4 0 1 1 5.658-5.656l5.859 5.859a27.85 27.85 0 0 1 12.768-5.285v-8.291C44 9.791 45.792 8 48 8a4 4 0 0 1 4 4v8.289c4.742.678 9.104 2.541 12.768 5.285l5.861-5.859a4 4 0 0 1 5.656 5.656l-5.859 5.859c2.744 3.664 4.607 8.022 5.285 12.77H84a4 4 0 1 1 0 8h-8.289a27.87 27.87 0 0 1-5.285 12.77l5.857 5.857zM48 32c-8.836 0-16 7.163-16 16s7.164 16 16 16 16-7.163 16-16-7.164-16-16-16zm0 24a8 8 0 1 1 0-16 8 8 0 1 1 0 16z" /></svg>
    , text: 'ENGINE DIAGNOSTICS'
  },
  {
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 25 20" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="40" ><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" /></svg>
    , text: 'TIRE AND WHEEL SERVICES'
  },
]
const Home4 = () => {
  return (
    <>
      <div className="page-content bg-white">
        {/* =======Our servises >>>>>> */}
        <div className="section-full content-inner overlay-white-dark" id="choose-us">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Why Choose Us</h2>
              <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <div className="row">
              {cards.map((card, index) => {
                return (
                  <div key={index} className="col-md-6 col-lg-4 col-sm-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                    <div className="service-box">
                      <div className="dlab-media"><Link to="#" className='cursorUnsate'><img src={card.img} alt="" /></Link> </div>
                      <div className="dlab-info">
                        <h4 className="dlab-title m-t0 m-b20"><Link className=' cursorUnsate' to="#">{card.name}</Link></h4>
                        <p className="m-b30">Our consulting team is always ready to help you. We are devoted to the task to construct your dream.  </p>
                        <Link to={'/car-service-center'} className="btn btn-primary">READ MORE</Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* ============Our project >>>>>>> */}
        <Ourproject />
        {/* ===========Our services >>>>>>> */}
        <div className="section-full bg-white content-inner" id="our-service">
          <div className="container">
            <div className="section-head text-center head-style-2 wow fadeIn">
              <h2 className="title">Our Services</h2>
              <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <div className="row">
              {ourService.map((item, ind) => {
                return (
                  <div key={ind} className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp">
                    <div className="icon-bx-wraper style-6 center m-b40">
                      <div className="icon-bx-sm bg-primary m-b20">
                        <span className="icon-cell">{item.icon}</span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte text-uppercase">{item.text}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
        {/* ===============Testimonial >>>>> */}
        <div className="section-full bg-gray content-inner-1" id="client">
          <div className="container">
            <div className="section-head text-center wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
              <h2 className="title">What peolpe are saying</h2>
              <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <Testimonial />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home4
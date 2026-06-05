import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="site-footer style-1" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-12 " >
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <img src={IMAGE.logo1} alt="" />
                  </div>
                  <h5 className="m-b20">Best car dealer in europe</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="social-list style-1">
                    <li><Link to="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                    <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget widget_categories p-l50">
                  <div className="widget-title">
                    <h5 className="title">Quick Links</h5>
                  </div>
                  <ul>
                    <li className="cat-item"><Link to="/contact-us">Contact us</Link></li>
                    <li className="cat-item"><Link to="/car-listing">Products</Link></li>
                    <li className="cat-item"><Link to='/latest-cars'>Latest car</Link></li>
                    <li className="cat-item"><Link to={'/blog-list-sidebar'}>Blog list</Link></li>
                    <li className="cat-item"><Link to={'/blog-details'}>Blog detail</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6" >
                <div className="widget widget_categories">
                  <div className="widget-title">
                    <h5 className="title">Support</h5>
                  </div>
                  <ul>
                    <li className="cat-item"><Link to="/about-us">About us</Link></li>
                    <li className="cat-item"><Link to={'/services'}>Services</Link></li>
                    <li className="cat-item"><Link to={'/location'}>Location</Link></li>
                    <li className="cat-item"><Link to={'/error-404'}>Error 404</Link></li>
                    <li className="cat-item"><Link to="/used-car-search">Search car</Link></li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget">
                  <div className="widget-title">
                    <h5 className="title">Contact</h5>
                  </div>
                  <div className="icon-bx-wraper style-2 m-b20">
                    <div className="icon-bx-sm radius">
                      <span className="icon-cell">
                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.6675 23.3511H20.6854V1.97607C20.6854 1.35475 20.1578 0.851074 19.5068 0.851074H3.00684C2.35592 0.851074 1.82826 1.35475 1.82826 1.97607V23.3511H0.846122C0.520689 23.3511 0.256836 23.6029 0.256836 23.9136V24.8511H22.2568V23.9136C22.2568 23.6029 21.993 23.3511 21.6675 23.3511ZM6.54255 4.41357C6.54255 4.10293 6.8064 3.85107 7.13184 3.85107H9.09612C9.42155 3.85107 9.68541 4.10293 9.68541 4.41357V6.28857C9.68541 6.59922 9.42155 6.85107 9.09612 6.85107H7.13184C6.8064 6.85107 6.54255 6.59922 6.54255 6.28857V4.41357ZM6.54255 8.91357C6.54255 8.60293 6.8064 8.35107 7.13184 8.35107H9.09612C9.42155 8.35107 9.68541 8.60293 9.68541 8.91357V10.7886C9.68541 11.0992 9.42155 11.3511 9.09612 11.3511H7.13184C6.8064 11.3511 6.54255 11.0992 6.54255 10.7886V8.91357ZM9.09612 15.8511H7.13184C6.8064 15.8511 6.54255 15.5992 6.54255 15.2886V13.4136C6.54255 13.1029 6.8064 12.8511 7.13184 12.8511H9.09612C9.42155 12.8511 9.68541 13.1029 9.68541 13.4136V15.2886C9.68541 15.5992 9.42155 15.8511 9.09612 15.8511ZM12.8283 23.3511H9.68541V19.4136C9.68541 19.1029 9.94926 18.8511 10.2747 18.8511H12.239C12.5644 18.8511 12.8283 19.1029 12.8283 19.4136V23.3511ZM15.9711 15.2886C15.9711 15.5992 15.7073 15.8511 15.3818 15.8511H13.4176C13.0921 15.8511 12.8283 15.5992 12.8283 15.2886V13.4136C12.8283 13.1029 13.0921 12.8511 13.4176 12.8511H15.3818C15.7073 12.8511 15.9711 13.1029 15.9711 13.4136V15.2886ZM15.9711 10.7886C15.9711 11.0992 15.7073 11.3511 15.3818 11.3511H13.4176C13.0921 11.3511 12.8283 11.0992 12.8283 10.7886V8.91357C12.8283 8.60293 13.0921 8.35107 13.4176 8.35107H15.3818C15.7073 8.35107 15.9711 8.60293 15.9711 8.91357V10.7886ZM15.9711 6.28857C15.9711 6.59922 15.7073 6.85107 15.3818 6.85107H13.4176C13.0921 6.85107 12.8283 6.59922 12.8283 6.28857V4.41357C12.8283 4.10293 13.0921 3.85107 13.4176 3.85107H15.3818C15.7073 3.85107 15.9711 4.10293 15.9711 4.41357V6.28857Z" fill="white"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="icon-content">
                      <p>77 Highfield Road London N36 7SB</p>
                    </div>
                  </div>
                  <div className="icon-bx-wraper style-2">
                    <div className="icon-bx-sm radius">
                      <span className="icon-cell">
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.3722 16.9589L16.5597 14.7089C16.3541 14.6134 16.1257 14.5932 15.9087 14.6515C15.6917 14.7099 15.4979 14.8435 15.3566 15.0324L13.2254 17.873C9.88055 16.1526 7.18876 13.2161 5.61172 9.56722L8.21562 7.24222C8.38908 7.08832 8.51185 6.87696 8.56535 6.64014C8.61884 6.40331 8.60015 6.15392 8.51211 5.92972L6.44961 0.67973C6.35298 0.438047 6.18207 0.240721 5.96636 0.121777C5.75065 0.00283366 5.50366 -0.0302721 5.26797 0.0281687L0.799219 1.15317C0.571987 1.21041 0.36925 1.34999 0.224097 1.54911C0.0789444 1.74824 -5.2345e-05 1.99516 2.60228e-08 2.24957C2.60228e-08 14.273 8.9332 23.9995 19.9375 23.9995C20.1708 23.9997 20.3972 23.9136 20.5799 23.7552C20.7625 23.5969 20.8905 23.3756 20.943 23.1277L21.9742 18.2527C22.0274 17.9943 21.9965 17.7238 21.8866 17.4877C21.7767 17.2515 21.5948 17.0646 21.3722 16.9589Z" fill="white"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="icon-content">
                      <p>412 444 1124</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center fb-inner spno">
              <div className="col-12 text-center">
                <span className="copyright-text">Copyright © 2023 <Link to="https://dexignlab.com/" className="text-primary" target="_blank">DexignLabs</Link> All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
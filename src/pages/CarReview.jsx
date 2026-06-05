import React from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import { Form } from 'react-bootstrap'

const CarReview = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr2} title={'Love Your Car'} />
                {/* === */}
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="section-head">
                                    <div className="icon-full">
                                        <svg id="Icons" version="1.1" width="80" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><style type="text/css">
                                        </style><path className="st0" d="M3,8v14c0,1.1,0.9,2,2,2h16.8l7.3,6v-6V8c0-1.1-0.9-2-2-2H5C3.9,6,3,6.9,3,8z"></path><polygon className="st0" points="12,9.9 13.5,13.1 17,13.6 14.5,16 15.1,19.4 12,17.8 8.9,19.4 9.5,16 7,13.6 10.5,13.1 "></polygon><line className="st0" x1="20" x2="25" y1="13" y2="13"></line><line className="st0" x1="22" x2="25" y1="17" y2="17"></line></svg>
                                    </div>
                                    <h2 className="title">Write A Review</h2>
                                </div>
                                <p className="m-b50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                <div className="star-rating d-flex m-b30">
                                    <h6 className="me-3">Car Rating</h6>
                                    <div data-rating="3">
                                        <i className="fa fa-star text-yellow me-1" data-alt="1" title="regular"></i>
                                        <i className="fa fa-star text-yellow me-1" data-alt="2" title="regular"></i>
                                        <i className="fa fa-star text-yellow me-1" data-alt="3" title="regular"></i>
                                        <i className="far fa-star text-yellow me-1" data-alt="4" title="regular"></i>
                                        <i className="far fa-star text-yellow" data-alt="5" title="regular"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 m-b20">
                                        <div className="icon-bx-wraper style-2">
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
                                    </div>
                                    <div className="col-sm-6 m-b20">
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
                            <div className="col-xl-6">
                                <div className="contact-area1">
                                    <form>
                                        <div className="row sp10">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="m-b10 font-weight-600">Get Started</label>
                                                    <Form.Select className="form-control">
                                                        <option>Select Brand</option>
                                                        <option>Popular Brands</option>
                                                        <option>Honda</option>
                                                        <option>Toyota</option>
                                                        <option>Mahindra</option>
                                                        <option>Tata</option>
                                                        <option>Ford</option>
                                                        <option>Renault</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="m-b10 font-weight-600">Your Review</label>
                                                    <input type="text" placeholder="Review title can't be blank" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea placeholder="Tip: Ideal length for a good review is 200 to 350 words. Use minimum 50 words. For more tips and guidelines to write a great review, please check the right section." className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Select className="form-control" >
                                                        <option>Select Model Year</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                        <option>2016</option>
                                                        <option>2015</option>
                                                        <option>2014</option>
                                                        <option>2013</option>
                                                        <option>2012</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Select className="form-control p-l50">
                                                        <option className='p-l5'>Variant (Option)</option>
                                                        <option>Hatchback</option>
                                                        <option>MUV</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-center">
                                                    <button className="btn btn-primary d-block w-100" type="button">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CarReview
import React from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import ContectUs from '../components/ContectUs'
import { Link } from 'react-router-dom'


const carReview = [
    { img: IMAGE.productPic1, name: 'SPORT X-GTZ 2023' },
    { img: IMAGE.productPic2, name: 'GT-Z 2023 BOOST' },
    { img: IMAGE.productPic3, name: 'FORT 22 GT' },
    { img: IMAGE.productPic4, name: 'SMART GT AA-211' },
]
const CarReviewDetail = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr2} title={'User Reviews'} option={
                    <div className="car-search-box row item1">
                        <div className="col-md-8">
                            <div className="selected-box">
                                <input className="form-control" type="text" placeholder="Reviews to help you choose the right car" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                                <span className="d-flex justify-content-between w-100">SEARCH REVIEWS<i className="las la-long-arrow-alt-right"></i></span>
                            </Link>
                        </div>
                        <img className="img2 move-2" src={IMAGE.patternImg5} alt="" />
                    </div>
                } />
                {/* Car review slider */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-head">
                                    <h3 className="title">RECOMMENDED CAR REVIEWS</h3>
                                </div>
                                <Swiper className="swiper-container similar-slider lightgallery"
                                    slidesPerView={3}
                                    speed={1500}
                                    spaceBetween={30}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false
                                    }}
                                    breakpoints={{
                                        1200: { slidesPerView: 3 },
                                        780: { slidesPerView: 2 },
                                        240: { slidesPerView: 1 },
                                    }}
                                >
                                    {carReview.map((carSlides, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="car-list-box border box-sm " style={{ boxShadow: 'none' }}>
                                                <div className="media-box">
                                                    <img src={carSlides.img} alt="" />
                                                </div>
                                                <div className="list-info">
                                                    <h4 className="title mb-0"><Link to="/car-details" data-splitting>{carSlides.name}</Link></h4>
                                                    <div className="car-type">SPORT CAR</div>
                                                    <span className="badge m-b30">$34,500</span>
                                                    <div className="rating-info">
                                                        <div className="total-rating">
                                                            <span className="rate">4.2</span>
                                                            <div className="star-rating m-b10">
                                                                <div data-rating="3">
                                                                    <i className="fa fa-star text-yellow me-1" data-alt="1" title="regular"></i>
                                                                    <i className="fa fa-star text-yellow me-1" data-alt="2" title="regular"></i>
                                                                    <i className="fa fa-star text-yellow me-1" data-alt="3" title="regular"></i>
                                                                    <i className="far fa-star text-yellow me-1" data-alt="4" title="regular"></i>
                                                                    <i className="far fa-star text-yellow" data-alt="5" title="regular"></i>
                                                                </div>
                                                            </div>
                                                            <span>20 reviews</span>
                                                        </div>
                                                        <ul className="rating-body">
                                                            <li className="rating-bar">
                                                                <div className="rating-left">
                                                                    <span> 5 <i className="fa fa-star"></i></span>
                                                                </div>
                                                                <div className="rating-body">
                                                                    <div className="progress "><div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}></div></div>
                                                                </div>
                                                            </li>
                                                            <li className="rating-bar">
                                                                <div className="rating-left">
                                                                    <span> 4 <i className="fa fa-star"></i></span>
                                                                </div>
                                                                <div className="rating-body">
                                                                    <div className="progress "><div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }}></div></div>
                                                                </div>
                                                            </li>
                                                            <li className="rating-bar">
                                                                <div className="rating-left">
                                                                    <span> 3 <i className="fa fa-star"></i></span>
                                                                </div>
                                                                <div className="rating-body">
                                                                    <div className="progress "><div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }}></div></div>
                                                                </div>
                                                            </li>
                                                            <li className="rating-bar">
                                                                <div className="rating-left">
                                                                    <span> 2 <i className="fa fa-star"></i></span>
                                                                </div>
                                                                <div className="rating-body">
                                                                    <div className="progress "><div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }}></div></div>
                                                                </div>
                                                            </li>
                                                            <li className="rating-bar">
                                                                <div className="rating-left">
                                                                    <span> 1 <i className="fa fa-star"></i></span>
                                                                </div>
                                                                <div className="rating-body">
                                                                    <div className="progress "><div className="progress-bar bg-danger" role="progressbar" style={{ width: '10%' }}></div></div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contect Us page */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div>
        </>
    )
}

export default CarReviewDetail
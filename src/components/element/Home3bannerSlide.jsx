import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom';




const carSlider = [
    { categery: 'populer', img: IMAGE.productPic3 },
    { categery: 'populer', img: IMAGE.productPic2 },
    { categery: 'populer', img: IMAGE.productPic1 },
    { categery: 'populer', img: IMAGE.productPic3 },
    { categery: 'populer', img: IMAGE.productPic1 },
    { categery: 'populer', img: IMAGE.productPic2 },
    { categery: 'letest', img: IMAGE.productPic4 },
    { categery: 'letest', img: IMAGE.productPic5 },
    { categery: 'letest', img: IMAGE.productPic4 },
    { categery: 'letest', img: IMAGE.productPic5 },
    { categery: 'letest', img: IMAGE.productPic4 },
    { categery: 'letest', img: IMAGE.productPic5 },
];
const Home3bannerSlide = () => {
    const [addClass, setAddClass] = useState(1)
    const [imgFiter, setImgFiter] = useState(carSlider);
    const filterBtn = (imgCategery, event) => {
        let upadetItemes = carSlider.filter((fiterEle) => {
            return fiterEle.categery === imgCategery
        });
        setImgFiter(upadetItemes);
    }
    const focus = (e) => {
        setAddClass(e.currentTarget.id)
    }
    const swiperRef = React.useRef(null)

    return (
        <section className="content-inner-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-head row">
                            <div className="col-sm-8">
                                <h3 className="title m-b20">FOR YOUR QUICK LOOK</h3>
                                <ul className="nav nav-tabs style-1 m-b0 m-sm-b20">
                                    <li className="nav-item">
                                        <button onFocus={focus} id='1' onClick={() => { setImgFiter(carSlider) }} className={`nav-link ${addClass == '1' ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#upcoming" type="button">UPCOMING</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onFocus={focus} id='2' onClick={() => { filterBtn('populer') }} className={`nav-link ${addClass == '2' ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#popular" type="button">POPULAR</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onFocus={focus} id='3' onClick={() => { filterBtn('letest') }} className={`nav-link ${addClass == '3' ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#latest" type="button">LATEST</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4 text-sm-end">
                                <div className="portfolio-pagination d-inline-block">
                                    <div className="btn-prev swiper-button-prev2 cursorPointer"
                                        onClick={() => swiperRef.current.swiper.slidePrev()}
                                    ><i className="las la-arrow-left"></i></div>
                                    <div className="btn-next swiper-button-next2 cursorPointer"
                                        onClick={() => swiperRef.current.swiper.slideNext()}
                                    ><i className="las la-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="upcoming">
                                <Swiper className="swiper-container similar-slider lightgallery"
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    speed={1200}
                                    ref={swiperRef}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 3
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        300: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >

                                    {imgFiter.map((cards, index) => (
                                        <SwiperSlide className="swiper-slide" key={index}>
                                            <div className="car-list-box shadow-none" style={{ border: '1px solid #E1E1F0', borderBottom: 0 }}>
                                                <div className="media-box">
                                                    <img src={cards.img} alt="" />
                                                </div>
                                                <div className="list-info">
                                                    <h4 className="title mb-0"><Link to="/car-details">SMART GT AA-211</Link></h4>
                                                    <div className="car-type">SPORT CAR</div>
                                                    <span className="badge m-b30">$34,500</span>
                                                    <div className="feature-list">
                                                        <div>
                                                            <label>Transmotion</label>
                                                            <p className="value">Automatic</p>
                                                        </div>
                                                        <div>
                                                            <label>Fuel</label>
                                                            <p className="value">Electric</p>
                                                        </div>
                                                        <div>
                                                            <label>Passenger</label>
                                                            <p className="value">2 Person</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home3bannerSlide


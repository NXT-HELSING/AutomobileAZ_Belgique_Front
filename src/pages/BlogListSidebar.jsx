import React, { useRef, useState } from 'react'
import { IMAGE } from '../constent/theme'
import CarlistingBanner from '../element/CarlistingBanner'
import { Link } from 'react-router-dom'
import BlogSidebarCard from '../element/BlogSidebarCard'
import ModalVideo from 'react-modal-video'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pagination from '../element/Pagination'
import PageSider from '../element/PageSider'


const blogSidebar = [
    { img: IMAGE.blogLargPic3 },
    { img: IMAGE.blogLargPic4 },
    { img: IMAGE.blogLargPic5 },
]
const BlogListSidebar = () => {
    const [open, setOpen] = useState(false);
    const swiperRef = useRef(null);
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={open} videoId="XKfgdkcIUxw" onClose={() => setOpen(false)} />
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bannerImg1} title={'Blog List Sidebar'} />

                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b40">
                                <BlogSidebarCard img={IMAGE.blogGridpic1} heading={'Think Positive, Think Always Powering Your Business'} />
                                <div className="dlab-card style-1 blog-half shadow m-b30">
                                    <div className="dlab-media video-bx style-2 h-auto">
                                        <Link to="/blog-details"><img src={IMAGE.blogGridpic2} alt="" /></Link>
                                        <div className="video-btn sm" onClick={() => { setOpen(true) }}>
                                            <Link to={'#'} className="popup-youtube"><i className="fa fa-play"></i></Link>
                                        </div>
                                    </div>
                                    <div className="dlab-info">
                                        <div className="dlab-meta">
                                            <ul>
                                                <li className="post-date">August 30, 2019</li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title"><Link to="/blog-details">SuperEasy Ways To Learn Everything About Industry</Link></h4>
                                        <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                                        <Link to="/blog-details" className="btn btn-primary btn-sm light shadow-none effect-1"><span>Read More</span></Link>

                                    </div>
                                </div>
                                <div className="dlab-card style-1 blog-half shadow m-b30">
                                    <div className="dlab-media">
                                        <Swiper className="swiper-container post-swiper"
                                            speed={1200}
                                            loop={true}
                                            ref={swiperRef}
                                        >
                                            <div className="swiper-wrapper">
                                                {blogSidebar.map((i, ind) => (
                                                    <SwiperSlide className="swiper-slide" key={ind}>
                                                        <Link to="/blog-details"><img src={i.img} alt="" /></Link>
                                                    </SwiperSlide>
                                                ))}
                                            </div>
                                            <div className="prev-post-swiper-btn cursorPointer" onClick={() => { swiperRef.current.swiper.slidePrev() }}><i className="fas fa-chevron-left"></i></div>
                                            <div className="next-post-swiper-btn cursorPointer" onClick={() => { swiperRef.current.swiper.slideNext() }}><i className="fas fa-chevron-right"></i></div>
                                        </Swiper>
                                    </div>
                                    <div className="dlab-info">
                                        <div className="dlab-meta">
                                            <ul>
                                                <li className="post-date">August 30, 2019</li>
                                            </ul>
                                        </div>
                                        <h4 className="dlab-title"><Link to="/blog-details">What You Can Learn From Bill Gates About Industry</Link></h4>
                                        <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                                        <Link to="/blog-details" className="btn btn-primary btn-sm light shadow-none effect-1"><span>Read More</span></Link>
                                    </div>
                                </div>
                                <BlogSidebarCard img={IMAGE.blogGridpic6} heading={'Think Positive, Think Always Powering Your Business'} />
                                <BlogSidebarCard img={IMAGE.blogGridpic7} heading={'Think Positive, Think Always Powering Your Business'} />
                                <BlogSidebarCard img={IMAGE.blogGridpic8} heading={'Think Positive, Think Always Powering Your Business'} />
                                <Pagination li={
                                    <li className="page-item"><Link className="page-link" to={'#'}>4</Link></li>
                                } />
                            </div>
                            <PageSider />
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default BlogListSidebar
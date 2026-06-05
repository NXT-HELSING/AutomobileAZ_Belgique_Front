import React from 'react'
import { Link } from 'react-router-dom'
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { IMAGE } from '../constent/theme'


const gallery = [
    { img: IMAGE.smallGaleryPic1 },
    { img: IMAGE.smallGaleryPic2 },
    { img: IMAGE.smallGaleryPic3 },
    { img: IMAGE.smallGaleryPic4 },
    { img: IMAGE.smallGaleryPic5 },
    { img: IMAGE.smallGaleryPic6 },
]
const post = [
    { img: IMAGE.blogPic1 },
    { img: IMAGE.blogPic2 },
    { img: IMAGE.blogPic3 },
]
const PageSider = () => {
    const onInit = () => {
        // console.log('lightGallery has been initialized');
    };
    return (
        <>
            <div className="col-xl-4 col-lg-4">
                <aside className="side-bar sticky-top right">
                    <div className="widget style-1">
                        <div className="widget-title">
                            <h4 className="title">Search</h4>
                        </div>
                        <div className="search-bx">
                            <form role="search" method="post">
                                <div className="input-group">
                                    <input name="text" className="form-control" placeholder="Search Here..." type="text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="widget style-1 widget_categories">
                        <div className="widget-title">
                            <h4 className="title">Category</h4>
                        </div>
                        <ul>
                            <li className="cat-item"><Link to={'#'}>Software</Link></li>
                            <li className="cat-item"><Link to={'#'}>Analysis</Link></li>
                            <li className="cat-item"><Link to={'#'}>Cryptocurrency</Link></li>
                            <li className="cat-item"><Link to={'#'}>Technology</Link></li>
                            <li className="cat-item"><Link to={'#'}>Mobile App</Link></li>
                            <li className="cat-item"><Link to={'#'}>Development</Link></li>
                        </ul>
                    </div>

                    <div className="widget style-1 widget_gallery gallery-grid-3">
                        <div className="widget-title">
                            <h4 className="title">Gallery</h4>
                        </div>
                        <div id="lightgallery" className="lightgallery ">
                            <LightGallery
                                onInit={onInit}
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                                elementClassNames='row'
                            >
                                {gallery.map((item, ind) => (                                                    
                                    <div data-exthumbimage={item.img} data-src={item.img} className="lightimg col-4 g-2"  key={ind}>
                                        <img src={item.img} alt="" className="w-100"  style={{borderRadius: '7px'}}/>
                                    </div>
                                    
                                ))}
                             </LightGallery>
                        </div>
                    </div>

                    <div className="widget style-1 recent-posts-entry">
                      <div className="widget-title">
                          <h4 className="title">Recent Post</h4>
                      </div>
                      <div className="widget-post-bx">
                            {post.map((i, index) => (
                                <div className="widget-post clearfix" key={index}>
                                    <div className="dlab-media">
                                        <img src={i.img} alt=""/>
                                    </div>
                                    <div className="dlab-info">
                                        <h6 className="title"><Link to="/blog-details">Aliqua sodales vestibulum nterdum</Link></h6>
                                        <div className="dlab-meta">
                                            <ul>
                                                <li className="post-date text-primary"> 7 March, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                         ))}
                      </div>
                  </div>

                    <div className="widget style-1 widget_tag_cloud">
                      <div className="widget-title">
                          <h4 className="title">Popular Tags</h4>
                      </div>
                      <div className="tagcloud">
                          <Link to={'#'}>Mock-Ups</Link>
                          <Link to={'#'}>UI</Link>
                          <Link to={'#'}>Websites</Link>
                          <Link to={'#'}>PSD Templates</Link>
                          <Link to={'#'}>Branding</Link>
                          <Link to={'#'}>WordPress</Link>
                          <Link to={'#'}>Graphic Design</Link>
                          <Link to={'#'}>UI Kit</Link>
                          <Link to={'#'}>Development</Link>
                      </div>
                  </div>

                </aside>
            </div>
        </>
    )
}

export default PageSider
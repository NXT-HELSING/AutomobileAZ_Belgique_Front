import React from 'react'
import { IMAGE } from '../constent/theme'
import CarlistingBanner from '../element/CarlistingBanner'
import PageSider from '../element/PageSider'
import { Link } from 'react-router-dom'

const BlogDetail = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr1} title={'Blog Details'} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b40">
                                <div className="dlab-card style-1 blog-single">
                                    <div className="dlab-media">
                                        <img src={IMAGE.largeBlogPic1} alt="" />
                                    </div>
                                    <div className="dlab-info">
                                        <div className="dlab-meta">
                                            <ul>
                                                <li className="post-date"><i className="las la-calendar"></i> 7 March, 2023</li>
                                                <li className="post-author"><Link to={'#'}><i className="las la-user"></i> By Johne Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="dlab-title">When Professionals Run Into Problems With AGENCY, This Is What They Do</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, tortor in varius lobortis, sapien arcu ornare nisi, ut volutpat ante augue quis arcu. Phasellus lacinia magna elit, at maximus leo tristique non. Phasellus laoreet, nisi quis fermentum blandit, leo dolor bibendum arcu, vel dignissim diam odio Link elit. In dapibus congue urna vitae porta. Quisque tincidunt velit sed ullamcorper pretium. Nullam vitae luctus libero.</p>
                                        <ul className="wp-block-gallery columns-3">
                                            <li className="blocks-gallery-item"><img alt="" src={IMAGE.blogGridpic2} /></li>
                                            <li className="blocks-gallery-item"><img alt="" src={IMAGE.blogGridpic1} /></li>
                                        </ul>
                                        <p>Vestibulum porttitor purus commodo sagittis molestie. Fusce facilisis ipsum ut tincidunt suscipit. Vivamus tristique lectus quis dignissim convallis. Cras eget ipsum bibendum, feugiat libero in, scelerisque erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                                        <blockquote className="block-quote style-1">
                                            <p>“You can make anything look good. Only Link quarter of young adults are financially literate. You don’t want to overwhelm them with terrible advice.”</p>
                                            <cite> Mobhil </cite>
                                        </blockquote>
                                        <p className="m-b40">Aliquam in laoreet dui. Aliquam blandit nisl lacus, sed suscipit massa pulvinar vitae. Proin non dui eros. Mauris lobortis arcu Link quam tincidunt, at consectetur urna dapibus. Curabitur sagittis nisl vel dolor porta, eu fringilla est accumsan. Donec eleifend dignissim risus Link tempor. Sed suscipit ultrices viverra.</p>
                                        <h4 className="m-b15">Aliquam pretium neque vel condimentum sodales.</h4>
                                        <div className="row m-b40">
                                            <div className="col-md-6">
                                                <ul className="list-check-1">
                                                    <li>Mauris molestie ex non ante sceleris</li>
                                                    <li>Nullam vel mi sed quam venenatis bibendum</li>
                                                    <li>Aliquam at iaculis purus, eget aliquam erat</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-check-1">
                                                    <li>Mauris molestie ex non ante sceleris</li>
                                                    <li>Nullam vel mi sed quam venenatis bibendum</li>
                                                    <li>Aliquam at iaculis purus, eget aliquam erat</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dlab-share-post">
                                        <div className="dlab-social-icon">
                                            <h6 className="title">Share:</h6>
                                            <ul>
                                                <li><Link className="fab fa-facebook-f" to={'#'}></Link></li>
                                                <li><Link className="fab fa-instagram" to={'#'}></Link></li>
                                                <li><Link className="fab fa-twitter" to={'#'}></Link></li>
                                            </ul>
                                        </div>
                                        <div className="post-tags">
                                            <Link to={'#'}>#Mobile</Link>
                                            <Link to={'#'}>#Software</Link>
                                            <Link to={'#'}>#Technology</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-box blog-user m-b60">
                                    <div className="author-profile-info">
                                        <div className="author-profile-pic">
                                            <img src={IMAGE.testimonialPic2} alt="Profile Pic" />
                                        </div>
                                        <div className="author-profile-content">
                                            <h4>Jake Johnson</h4>
                                            <p>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed.</p>
                                            <ul className="list-inline m-b0">
                                                <li>
                                                    <Link to="https://www.facebook.com" target="_blank" className="btn-link">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.twitter.com" target="_blank" className="btn-link">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.google.com" target="_blank" className="btn-link">
                                                        <i className="fab fa-google-plus"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.youtube.com" target="_blank" className="btn-link">
                                                        <i className="fab fa-youtube"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="comments-area" id="comments">
                                        <div className="widget-title">
                                            <h4 className="title">8 Comments</h4>
                                        </div>
                                        <div className="clearfix">
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard">
                                                            <img className="avatar photo" src={IMAGE.testimonialPic1} alt="" />
                                                            <cite className="fn">Celesto Anderson</cite>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="reply">
                                                            <Link to={'#'} className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
                                                        </div>
                                                    </div>
                                                    <ol className="children">
                                                        <li className="comment odd parent">
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard">
                                                                    <img className="avatar photo" src={IMAGE.testimonialPic2} alt="" />
                                                                    <cite className="fn">Jake Johnson</cite>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                <div className="reply">
                                                                    <Link to={'#'} className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard">
                                                            <img className="avatar photo" src={IMAGE.testimonialPic3} alt="" />
                                                            <cite className="fn">John Doe</cite>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="reply">
                                                            <Link to={'#'} className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div className="comment-respond" id="respond">
                                                <div className="widget-title">
                                                    <h4 className="title" id="reply-title">Leave Your Comment
                                                        <small><Link style={{ display: 'none' }} to={'#'} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link></small>
                                                    </h4>
                                                </div>
                                                <form className="comment-form" id="commentform" method="post">
                                                    <p className="comment-form-author">
                                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                                        <input type="text" name="Author" placeholder="Author" id="author" />
                                                    </p>
                                                    <p className="comment-form-email">
                                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                                        <input type="text" placeholder="Email" name="email" id="email" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label htmlFor="comment">Comment</label>
                                                        <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                    </p>
                                                    <p className="form-submit">
                                                        <button type="submit" className="btn btn-border shadow-primary btn-primary" id="submit">SUBMIT</button>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PageSider />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BlogDetail
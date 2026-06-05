import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../constent/theme'



const testimonial = [
    {
        img: IMAGE.testimonialPic1, neme: 'Celesto Anderson', img2:
            <ol className="children">
                <li className="comment odd parent">
                    <div className="comment-body">
                        <div className="comment-author vcard">
                            <img className="avatar photo" src={IMAGE.testimonialPic2} alt="" />
                            <cite className="fn">Jake Johnson</cite>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="reply">
                            <Link to="#" className="comment-reply-link">
                                <i className="fa fa-reply"></i>Reply</Link>
                        </div>
                    </div>
                </li>
            </ol>
    },
    { img: IMAGE.testimonialPic3, neme: 'John Doe' },
];

const retingsBlog = [
    { img: IMAGE.testimonialPic1, name: 'Cobus Bester', star1: 'fa', star2: 'fa', star3: 'far', star4: 'far', star5: 'far' },
    { img: IMAGE.testimonialPic2, name: 'Emilia Johnson', star1: 'fa', star2: 'fa', star3: 'fa', star4: 'fa', star5: 'far' },
    { img: IMAGE.testimonialPic3, name: 'Mark Steven', star1: 'fa', star2: 'fa', star3: 'fa', star4: 'far', star5: 'far' },
    { img: IMAGE.testimonialPic1, name: 'Cobus Bester', star1: 'fa', star2: 'fa', star3: 'fa', star4: 'fa', star5: 'fa' },
]
const TestimonialReting = () => {
    const [addActive, setAddActive] = useState('one')
    function addActiveClassBtn(e) {
        setAddActive(e.currentTarget.className)
    }
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-b40">
                            <div className="dlab-tabs  product-description">
                                <ul className="nav nav-tabs m-b60 m-lg-b30">
                                    <li onClick={addActiveClassBtn} className='one'><Link className={`Description ${addActive === 'one' ? 'active' : ''}`}>Description</Link></li>
                                    <li onClick={addActiveClassBtn} className='two'><Link className={`Discussion ${addActive === 'two' ? 'active' : ''}`}>Discussion</Link></li>
                                    <li onClick={addActiveClassBtn} className='three'><Link className={`Reviews ${addActive === 'three' ? 'active' : ''}`}>Reviews</Link></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="description" className={`tab-pane ${addActive === 'one' ? 'active' : ''}`}>
                                        <h5 className="m-b20">The standard Lorem Ipsum passage, used since the 1500s</h5>
                                        <p className="m-b50">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        <h5 className="m-b20">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                    </div>
                                    <div id="discussion" className={`tab-pane ${addActive === 'two' ? 'active' : ''}`}>
                                        <div className="comments-area style-1" id="comments">
                                            <div className="widget-title">
                                                <h5 className="title">8 Comments</h5>
                                                <div className="dlab-separator style-1 text-primary mb-0"></div>
                                            </div>
                                            <div className="clearfix">
                                                <ol className="comment-list">
                                                    {testimonial.map((item, index) => (
                                                        <li className="comment" key={index}>
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard">
                                                                    <img className="avatar photo" src={item.img} alt="" />
                                                                    <cite className="fn">{item.neme}</cite>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                <div className="reply">
                                                                    <Link to="#" className="comment-reply-link">
                                                                        Reply<i className="fa fa-reply"></i></Link>
                                                                </div>
                                                            </div>
                                                            {item.img2}
                                                        </li>
                                                    ))}
                                                </ol>
                                                <div className="comment-respond style-1" id="respond">
                                                    <div className="widget-title">
                                                        <h5 className="title">Leave Your Comment</h5>
                                                        <div className="dlab-separator style-1 text-primary mb-0"></div>
                                                        <Link to={'#'} style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link>
                                                        <div className="dlab-separator bg-primary"></div>
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
                                                            <button type="submit" className="btn shadow-primary btn-primary btn-icon" id="submit">POST NOW
                                                                <i className="fas fa-caret-right ms-1"></i>
                                                            </button>
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="reviews" className={`tab-pane ${addActive === 'three' ? 'active' : ''}`}>
                                        <ol className="commentlist">
                                            {retingsBlog.map((reting, blog) => (
                                                <li className="comment" key={blog}>
                                                    <div className="comment_container">
                                                        <img className="avatar avatar-60 photo" src={reting.img} alt="" />
                                                        <div className="comment-text">
                                                            <div className="star-rating">
                                                                <div data-rating='5'>
                                                                    <i className={`${reting.star1} fa-star text-yellow me-1`} data-alt="1" title="regular"></i>
                                                                    <i className={`${reting.star2} fa-star text-yellow me-1`} data-alt="2" title="regular"></i>
                                                                    <i className={`${reting.star3} fa-star text-yellow me-1`} data-alt="3" title="regular"></i>
                                                                    <i className={`${reting.star4} fa-star text-yellow me-1`} data-alt="4" title="regular"></i>
                                                                    <i className={`${reting.star5} fa-star text-yellow me-1`} data-alt="5" title="regular"></i>
                                                                </div>
                                                            </div>
                                                            <p className="meta">
                                                                <strong className="author">{reting.name}</strong>
                                                                <span><i className="fa fa-clock-o"></i> March 7, 2013</span>
                                                            </p>
                                                            <div className="description">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Next section */}

                        <div className="col-lg-4 m-b40 m-lg-b0">
                            <div className="product-rating-box sticky-top">
                                <div className="review-text"><span>4.5</span> / 5.0</div>
                                <div className="rating-footer">
                                    <h4 className="text-white">Ratings</h4>
                                    <ul className="item-review">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}

export default TestimonialReting
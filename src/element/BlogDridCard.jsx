import React from 'react'
import { Link } from 'react-router-dom'


const BlogDridCard = (props) => {
    return (
        <>
            <li className="card-container grid-item col-xl-4 col-md-6">
                <div className="dlab-card style-1 shadow m-b30">
                    <div className="dlab-media">
                        <Link to="/blog-details"><img src={props.img}
                            alt="" /></Link>
                    </div>
                    <div className="dlab-info">
                        <div className="dlab-meta">
                            <ul>
                                <li className="post-date">{ props.date}</li>
                            </ul>
                        </div>
                        <h4 className="dlab-title"><Link to="/blog-details">{props.heading}</Link></h4>
                        <p>Qui nunc nobis videntur parum clari, sollemnes in futurum putamus parum
                            claram legere.</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BlogDridCard
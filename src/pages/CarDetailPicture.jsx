import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../constent/theme';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';






const galleryPic = [
  { img: IMAGE.galleryPic1, categery: 'Interior' },

  { img: IMAGE.galleryPic7, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic9, categery: 'Exterior', mt: 'm-t10' },
  { img: IMAGE.galleryPic11, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic10, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic2, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic13, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic14, categery: 'Exterior', mt: 'm-t10' },
  { img: IMAGE.galleryPic15, categery: 'Roadtest', mt: 'm-t10' },
  { img: IMAGE.galleryPic16, categery: 'Exterior', mt: 'm-t10' },
  { img: IMAGE.galleryPic3, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic1, categery: 'Roadtest', mt: 'm-t10' },
  { img: IMAGE.galleryPic2, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic8, categery: 'Roadtest', mt: 'm-t10' },
  { img: IMAGE.galleryPic5, categery: 'Exterior', mt: 'm-t10' },
  { img: IMAGE.galleryPic4, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic6, categery: 'Exterior', mt: 'm-t10' },
  { img: IMAGE.galleryPic17, categery: 'Roadtest', mt: 'm-t10' },
  { img: IMAGE.galleryPic8, categery: 'Interior', mt: 'm-t10' },
  { img: IMAGE.galleryPic12, categery: 'Interior', mt: 'm-t10' },

]
const CarDetailPicture = () => {
  const [galleryBlog, setGalleryBlog] = useState(galleryPic);
  const [addActive, setActive] = useState('All');

  const masonryBtn = (fiterItem) => {
    if (fiterItem === 'All') {
      setActive(fiterItem);
      setGalleryBlog(galleryPic)
    } else {
      setActive(fiterItem);
      let updateItems = galleryPic.filter((ele) => {
        return ele.categery === fiterItem;
      });
      setGalleryBlog(updateItems)
    }
  }
  return (
    <>
      <section className="content-inner-2">
        <div className="section-head text-center">
          <h3 className="h3">Hyundai Magna Plus Pictures</h3>
        </div>

        <div className="site-filters style-1 clearfix center mb-5">
          <ul className="filters">
            <li onClick={() => { masonryBtn('All') }} className={`btn ${addActive === 'All' ? 'active' : ''}`}>
              <Link to="#">All Pictures</Link>
            </li>
            <li onClick={() => { masonryBtn('Interior') }} className={`btn ${addActive === 'Interior' ? 'active' : ''}`}>
              <Link to="#">Interior</Link>
            </li>
            <li onClick={() => { masonryBtn('Exterior') }} className={`btn ${addActive === 'Exterior' ? 'active' : ''}`}>
              <Link to="#">Exterior</Link>
            </li>
            <li onClick={() => { masonryBtn('Roadtest') }} className={`btn ${addActive === 'Roadtest' ? 'active' : ''}`}>
              <Link to="#">Road Test</Link>
            </li>
          </ul>
        </div>
        <div className="container-fluid clearfix p-a10">
          <div className="masonaryContainer2">
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames='container'
            >
              {galleryBlog.map((galleryImg, index) => (
                <div data-exthumbimage={galleryImg.img} data-src={galleryImg.img} className="card-container  interior lightimg" key={index}>
                  <img src={galleryImg.img} alt="" className={galleryImg.mt} />
                </div>
              ))}
            </LightGallery>
          </div>
        </div>

      </section>
    </>
  )
}

export default CarDetailPicture
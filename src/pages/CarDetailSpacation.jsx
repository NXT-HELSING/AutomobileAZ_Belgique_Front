import React, { useState } from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import CommenCarSlider from '../element/CommenCarSlider'
import ContectUs from '../components/ContectUs'



const imageBlog = [
  { img: IMAGE.slideItem1 },
  { img: IMAGE.slideItem2 },
  { img: IMAGE.slideItem3 },
  { img: IMAGE.slideItem4 },
  { img: IMAGE.slideItem1 },
  { img: IMAGE.slideItem2 },
  { img: IMAGE.slideItem3 },
  { img: IMAGE.slideItem4 },
]

const carFiturs = [

  {
    img:
      <svg enableBackground="new 0 0 32 32" height="28px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="calendar_2_"><path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z" fill="#333332" /><rect fill="#333332" height="3" width="4" x="7" y="12" /><rect fill="#333332" height="3" width="4" x="7" y="17" /><rect fill="#333332" height="3" width="4" x="7" y="22" /><rect fill="#333332" height="3" width="4" x="14" y="22" /><rect fill="#333332" height="3" width="4" x="14" y="17" /><rect fill="#333332" height="3" width="4" x="14" y="12" /><rect fill="#333332" height="3" width="4" x="21" y="22" /><rect fill="#333332" height="3" width="4" x="21" y="17" /><rect fill="#333332" height="3" width="4" x="21" y="12" /></g></svg>
    , text: '2019', text2: 'Model'
  },
  {
    img:
      <svg data-name="Capa 1" height="32px" id="Capa_1" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M18.19,10.24a8.17,8.17,0,0,0-3-5.18A8.28,8.28,0,0,0,10,3.32h0A9.14,9.14,0,0,0,5.12,4.85a7.93,7.93,0,0,0-3.41,6.33A7.84,7.84,0,0,0,2.94,16a1.47,1.47,0,0,0,1.18.57,1.63,1.63,0,0,0,.64-.13,1.4,1.4,0,0,0,.76-1.68.3.3,0,0,0,0-.1s-1.6-3-.11-5.57L5.4,9h0s0,0,0,0A5.05,5.05,0,0,1,10,6.32,5.48,5.48,0,0,1,14.61,9a5.09,5.09,0,0,1,.58,3.54l-5-1.88a.38.38,0,1,0-.27.7L15,13.25a5.92,5.92,0,0,1-.37,1,1.63,1.63,0,0,0-.14,1.36,1.38,1.38,0,0,0,.75.8c.65.27,1.55.3,2.2-1.1A8.09,8.09,0,0,0,18.19,10.24ZM4.8,14.92a.64.64,0,0,1-.35.78.74.74,0,0,1-.9-.2,7,7,0,0,1-1.09-4.26,9,9,0,0,1,.8-3.1l1.33.78A6.93,6.93,0,0,0,4.8,14.92ZM5,8.27,3.62,7.49a7.23,7.23,0,0,1,2-2A8.34,8.34,0,0,1,9.69,4.09l0,1.49A5.71,5.71,0,0,0,5,8.27Zm5.44-2.69,0-1.5a7.33,7.33,0,0,1,4.25,1.55,8,8,0,0,1,1.69,1.88L15,8.28A6.25,6.25,0,0,0,10.41,5.58ZM16.78,15c-.48,1-1,.85-1.23.73a.67.67,0,0,1-.34-.36,1,1,0,0,1,.1-.77,5.67,5.67,0,0,0,.41-1l.29.11a.35.35,0,0,0,.14,0,.39.39,0,0,0,.35-.25.38.38,0,0,0-.22-.48l-.38-.14a6,6,0,0,0-.47-3.86l1.32-.75a7.3,7.3,0,0,1,.7,2.19A7.37,7.37,0,0,1,16.78,15Z" /><path d="M7.87,7.5a.34.34,0,1,0,.33.33A.34.34,0,0,0,7.87,7.5Z" /><circle cx="12.14" cy="7.81" r="0.33" /><path d="M14.85,11.62a.34.34,0,1,0-.34.33A.34.34,0,0,0,14.85,11.62Z" /><path d="M5.58,11.29a.33.33,0,1,0,.34.33A.33.33,0,0,0,5.58,11.29Z" /></svg>
    , text: '6,900 km', text2: "Driven"
  },
  {
    img:
      <svg enableBackground="new 0 0 24 24" height="32px" id="Layer_2" version="1.1" viewBox="0 0 24 24" width="24px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g><circle cx="8" cy="13" r="1" /><circle cx="12" cy="13" r="1" /><path d="M5,10h10V3H5V10z M6,4h8v5h-3.6L9.3,5l-1,0.3L9.4,9H6V4z" /><path d="M21.4,4.2l-0.8,0.6L23,8v8c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4c0-1.7-1.3-3-3-3V1c0-0.6-0.4-1-1-1H3C2.4,0,2,0.4,2,1v21H1   c-0.6,0-1,0.4-1,1v1h20v-1c0-0.6-0.4-1-1-1h-1V10c1.1,0,2,0.9,2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2V7.7L21.4,4.2z M4,22V2h12v20H4z" /></g></svg>
    , text: 'Diesel', text2: 'Fuel'
  },
  {
    img:
      <svg id="Lineal" viewBox="0 0 512 512" height="32px" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="30. Police man" id="_30._Police_man"><path d="M335.43,398.17a33.25,33.25,0,0,1-28.6-16.05,8,8,0,1,0-13.66,8.32A49,49,0,0,0,324.88,413l-20.22,35.22-23-26.53c3.63-4.17,2.76-9-.37-11.77a8,8,0,0,0-11.29.79L255.9,426.93l-35.44-39.37a48.85,48.85,0,0,0,5.39-19c61.85,16.26,134.68-18.66,137.09-98.32A32.25,32.25,0,0,0,389,238.46V202a8,8,0,0,0-16,0v36.46a16,16,0,0,1-10,15.09V191.22a39.93,39.93,0,0,0,21.82-26.52c4.77-19.06,2.69-11.72,9.12-32.18a56.7,56.7,0,0,0-29.78-68L282.82,26.1a63.76,63.76,0,0,0-54.64,0L146.84,64.49a56.7,56.7,0,0,0-29.78,68c6.29,20,4.73,14.63,7.2,24.5-.38,1.46-.26-4.7-.26,81.44a32.65,32.65,0,0,0,25.06,31.62c1.3,44.39,24.68,77.29,60.94,93v1.78a33.08,33.08,0,0,1-9.79,23.58c-11.19,11.16-25.3,9.76-23.64,9.76A82.52,82.52,0,0,0,94,480.74V488a8,8,0,0,0,16,0v-7.26a66.54,66.54,0,0,1,59.53-66.19L199.06,466a8,8,0,0,0,13,1.27l13.07-15.05-7,34.21a8,8,0,1,0,15.68,3.18L244.32,438c5.81,6.46,6.81,8.22,10.14,8.87A10.37,10.37,0,0,0,256,447a8.07,8.07,0,0,0,5.35-2.05c.63-.58,1.13-1.21,6.29-7.15l10.52,51.79a8,8,0,1,0,15.68-3.18l-6.95-34.21L300,467.25a8,8,0,0,0,13-1.27l29.53-51.43A66.53,66.53,0,0,1,402,480.74V488a8,8,0,0,0,16,0v-7.26A82.53,82.53,0,0,0,335.43,398.17ZM153.66,79,235,40.56a47.89,47.89,0,0,1,41,0L357.34,79a40.65,40.65,0,0,1,21.34,48.76L375.13,139H343a8,8,0,0,0,0,16h27.75l-1.45,5.82A24,24,0,0,1,346,179H165a24,24,0,0,1-23.28-18.18L140.25,155H301.67a8,8,0,0,0,0-16H135.87l-3.55-11.28A40.65,40.65,0,0,1,153.66,79ZM140,238.46V186.25a39.94,39.94,0,0,0,9,5.43V253.1A16.54,16.54,0,0,1,140,238.46Zm25,27.67V195c1.51,0,180.71,0,182,0v71.15C347,386.78,165,386.39,165,266.13Zm42.34,182.13L187.12,413a49,49,0,0,0,23.52-12.48L230,422.12Z" /></g></svg>
    , text: 'Individual', text2: 'Seller'
  },
  {
    img:
      <svg enableBackground="new 0 0 32 32" height="28px" id="Layer_3" version="1.1" viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="calendar_1_"><path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z" fill="#333332" /><rect fill="#333332" height="3" width="4" x="7" y="12" /><rect fill="#333332" height="3" width="4" x="7" y="17" /><rect fill="#333332" height="3" width="4" x="7" y="22" /><rect fill="#333332" height="3" width="4" x="14" y="22" /><rect fill="#333332" height="3" width="4" x="14" y="17" /><rect fill="#333332" height="3" width="4" x="14" y="12" /><rect fill="#333332" height="3" width="4" x="21" y="22" /><rect fill="#333332" height="3" width="4" x="21" y="17" /><rect fill="#333332" height="3" width="4" x="21" y="12" /></g></svg>
    , text: 'Automatic', text2: 'Transmission'
  },
  {
    img:
      <svg enableBackground="new 0 0 50 50" height="32px" id="Layer_4" version="1.1" viewBox="0 0 50 50" width="50px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50" /><polyline fill="none" points="28.081,29.919   24,34 22,34 22,36 20,38 18,38 18,40 15,43 12,43 12,46 9,49 3,49 1,47 1,41 19.96,22.04 " stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><path d="M49,16  c0,8.281-6.719,15-15,15s-15-6.719-15-15c0-8.282,6.719-15,15-15S49,7.718,49,16z" fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><path d="M41.071,23.071L26.929,8.929  c3.904-3.904,10.238-3.904,14.143,0S44.976,19.167,41.071,23.071z" fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><line fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" x1="1.61" x2="18.282" y1="46.39" y2="29.718" /></svg>
    , text: 'First', text2: 'Owner'
  },
]
const CarDetailSpacation = () => {
  const [addActive, setActive] = useState('1');


  const toggleClassBtn = (value) => {
    setActive(value);
  }
  return (
    <>
      <div className="page-content bg-white">
        <section className="content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-head">
                  <h3 className="title">Key specifications Hyundai EON</h3>
                  <p>Ex-showroom price in Bangalore</p>
                </div>
              </div>
            </div>
          </div>
          {/* Slider  */}
          <Swiper className="swiper-container specifications-slider swiper-btn-lr"
            slidesPerView={4}
            speed={1500}
            spaceBetween={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            breakpoints={{
              1024: {
                spaceBetween: 1,
                slidesPerView: 4
              },
              775: {
                spaceBetween: 30,
                slidesPerView: 3
              },
              500: {
                spaceBetween: 30,
                slidesPerView: 2
              },
              240: {
                spaceBetween: 30,
                slidesPerView: 1
              },
            }}
          >
            {imageBlog.map((item, index) => {
              return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <img src={item.img} alt="" />
                </SwiperSlide>
              )
            })}
          </Swiper>
          {/* ======= */}
          <div className="container">
            <div className="used-car-features grid2 clearfix m-b50 m-t30">
              {carFiturs.map((icons, ind) => (
                <div className="car-features" key={ind}>{icons.img}
                  <h5>{icons.text}</h5>
                  <span>{icons.text2}</span>
                </div>
              ))}
            </div>
            {/* ======= */}

            <div className="product-description">
              <ul className="nav nav-tabs style-1 m-b20">
                <li><Link to="#" onClick={() => { toggleClassBtn('1') }} className={`nav-link ${addActive === '1' ? 'active' : ''}`}>Engine & Transmission</Link></li>
                <li><Link to="#" onClick={() => { toggleClassBtn('2') }} className={`nav-link ${addActive === '2' ? 'active' : ''}`}>Capacity</Link></li>
                <li><Link to="#" onClick={() => { toggleClassBtn('3') }} className={`nav-link ${addActive === '3' ? 'active' : ''}`}>Comfort</Link></li>
                <li><Link to="#" onClick={() => { toggleClassBtn('4') }} className={`nav-link ${addActive === '4' ? 'active' : ''}`}>Safety</Link></li>
                <li><Link to="#" onClick={() => { toggleClassBtn('5') }} className={`nav-link ${addActive === '5' ? 'active' : ''}`}>Others</Link></li>
              </ul>
              <div className="tab-content">
                <div id="specifications" className={`tab-pane ${addActive === '1' ? 'active' : ''}`}>
                  <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                    <ul className="table-dl clearfix">
                      <li>
                        <div className="leftview">Top Speed</div>
                        <div className="rightview">235 kmph</div>
                      </li>
                      <li>
                        <div className="leftview">Acceleration (0-100 kmph)</div>
                        <div className="rightview">7.9</div>
                      </li>
                      <li>
                        <div className="leftview">Engine Displacement(cc)</div>
                        <div className="rightview">1968</div>
                      </li>
                      <li>
                        <div className="leftview">Maximum Power</div>
                        <div className="rightview">187.74bhp@3800-4200rpm</div>
                      </li>

                      <li>
                        <div className="leftview">Maximum Torque</div>
                        <div className="rightview">400nm@1750-3000rpm</div>
                      </li>
                      <li>
                        <div className="leftview">Engine Description</div>
                        <div className="rightview">2.0 litre 187.74bhp TDI Engine </div>
                      </li>
                      <li>
                        <div className="leftview">Turning Radius</div>
                        <div className="rightview">-</div>
                      </li>
                      <li>
                        <div className="leftview">No. of Cylinders</div>
                        <div className="rightview">4</div>
                      </li>
                      <li>
                        <div className="leftview">Drive Type</div>
                        <div className="rightview">FWD</div>
                      </li>
                      <li>
                        <div className="leftview">Turbo Charger</div>
                        <div className="rightview text-green"><i className="fa fa-check font-18"></i> Yes</div>
                      </li>
                      <li>
                        <div className="leftview">Super Charger</div>
                        <div className="rightview text-red"><i className="fa fa-times font-18"></i> No</div>
                      </li>
                      <li>
                        <div className="leftview">Valves Per Cylinder</div>
                        <div className="rightview">5</div>
                      </li>
                      <li>
                        <div className="leftview">Compression Ratio</div>
                        <div className="rightview">-</div>
                      </li>
                      <li>
                        <div className="leftview">Fuel Supply System</div>
                        <div className="rightview">CRDi</div>
                      </li>
                      <li>
                        <div className="leftview">Gear box</div>
                        <div className="rightview">7 Speed</div>
                      </li>
                      <li>
                        <div className="leftview">Steering Gear Type</div>
                        <div className="rightview">-</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="capacity" className={`tab-pane ${addActive === '2' ? 'active' : ''}`}>
                  <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                    <ul className="table-dl clearfix">
                      <li>
                        <div className="leftview">Seating Capacity</div>
                        <div className="rightview">4 </div>
                      </li>
                      <li>
                        <div className="leftview">No of Doors</div>
                        <div className="rightview">4</div>
                      </li>
                      <li>
                        <div className="leftview">Length</div>
                        <div className="rightview">4752mm</div>
                      </li>
                      <li>
                        <div className="leftview">Width</div>
                        <div className="rightview">2029mm</div>
                      </li>
                      <li>
                        <div className="leftview">Height</div>
                        <div className="rightview">1384mm</div>
                      </li>
                      <li>
                        <div className="leftview">Ground Clearance</div>
                        <div className="rightview">-</div>
                      </li>
                      <li>
                        <div className="leftview">Engine</div>
                        <div className="rightview">1989 cc </div>
                      </li>
                      <li>
                        <div className="leftview">BHP</div>
                        <div className="rightview">188</div>
                      </li>
                      <li>
                        <div className="leftview">No. of Cylinders</div>
                        <div className="rightview">4</div>
                      </li>
                      <li>
                        <div className="leftview">No. of Gears</div>
                        <div className="rightview">Spped 7</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="comfort" className={`tab-pane ${addActive === '3' ? 'active' : ''}`}>
                  <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                    <ul className="table-dl clearfix">
                      <li>
                        <div className="leftview">Air Conditioner</div>
                        <div className="rightview text-green"><i className="fa fa-check font-18"></i> Yes</div>
                      </li>
                      <li>
                        <div className="leftview">Power Steering</div>
                        <div className="rightview text-green"><i className="fa fa-check font-18"></i> Yes</div>
                      </li>
                      <li>
                        <div className="leftview">Rear A/C Vents</div>
                        <div className="rightview text-red"><i className="fa fa-times font-18"></i> Yes</div>
                      </li>
                      <li>
                        <div className="leftview">Engine Start/Stop Button</div>
                        <div className="rightview text-green"><i className="fa fa-check font-18"></i> Yes</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="safety" className={`tab-pane ${addActive === '4' ? 'active' : ''}`}>
                  <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                    <ul className="table-dl clearfix">
                      <li>
                        <div className="leftview">Parking Sensor</div>
                        <div className="rightview">Yes </div>
                      </li>
                      <li>
                        <div className="leftview">Airbags</div>
                        <div className="rightview">Yes</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="others" className={`tab-pane ${addActive === '5' ? 'active' : ''}`}>
                  <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                    <ul className="table-dl clearfix">
                      <li>
                        <div className="leftview">Parking Sensor</div>
                        <div className="rightview">Yes </div>
                      </li>
                      <li>
                        <div className="leftview">Airbags</div>
                        <div className="rightview">Yes</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =========Car slider >>>>>> */}
        <CommenCarSlider title={"FOR YOUR QUICK LOOK"} />
        {/* ======================Contect Us page >>> */}
        <section className="content-inner">
          <div className="container">
            <ContectUs />
          </div>
        </section>


      </div>
    </>
  )
}

export default CarDetailSpacation
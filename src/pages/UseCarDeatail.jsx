import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IMAGE } from "../constent/theme";
import { Link } from "react-router-dom";
import AccordianUsecar from "../element/AccordianUsecar";
import UserMinislider from "../element/UserMinislider";
import ContectUs from "../components/ContectUs";

const slides = [
    { img: IMAGE.slideItem1, image2: IMAGE.thumb1 },
    { img: IMAGE.slideItem2, image2: IMAGE.thumb2 },
    { img: IMAGE.slideItem3, image2: IMAGE.thumb3 },
    { img: IMAGE.slideItem4, image2: IMAGE.thumb4 },
]
const socialLinks = [
    {
        icons: <svg width="31" height="29" viewBox="0 0 31 29" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M28.0994 0H2.15474C0.965916 0 0 0.938616 0 2.09085V26.9092C0 28.0614 0.965916 29 2.15474 29H28.0994C29.2882 29 30.2609 28.0614 30.2609 26.9092V2.09085C30.2609 0.938616 29.2882 0 28.0994 0ZM9.14581 24.8571H4.66071V11.0174H9.15256V24.8571H9.14581ZM6.90326 9.12723C5.46452 9.12723 4.30272 8.00737 4.30272 6.63504C4.30272 5.26272 5.46452 4.14286 6.90326 4.14286C8.33525 4.14286 9.50381 5.26272 9.50381 6.63504C9.50381 8.01384 8.342 9.12723 6.90326 9.12723ZM25.9582 24.8571H21.4731V18.125C21.4731 16.5196 21.4393 14.4547 19.1427 14.4547C16.8056 14.4547 16.4476 16.2025 16.4476 18.0085V24.8571H11.9625V11.0174H16.2652V12.9076H16.326C16.9272 11.8201 18.3929 10.6743 20.5747 10.6743C25.1138 10.6743 25.9582 13.542 25.9582 17.2705V24.8571Z"
                fill="#314BA5"></path>
        </svg>
        , link: 'https://www.linkedin.com/',
    },
    {
        icons: <svg width="28" height="25" viewBox="0 0 28 25" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25.1487 6.33653C25.1663 6.60534 25.1663 6.8742 25.1663 7.143C25.1663 15.3418 19.4461 24.7888 8.99107 24.7888C5.77008 24.7888 2.77793 23.7711 0.260986 22.0046C0.718628 22.0622 1.15861 22.0814 1.63386 22.0814C4.29156 22.0814 6.73813 21.1022 8.69184 19.4317C6.1925 19.3741 4.09798 17.5884 3.37633 15.1306C3.72838 15.1882 4.08037 15.2266 4.45003 15.2266C4.96044 15.2266 5.4709 15.1498 5.9461 15.0154C3.34117 14.4394 1.3874 11.9432 1.3874 8.92869V8.85191C2.14421 9.31274 3.02433 9.60075 3.95712 9.63911C2.42583 8.52542 1.42262 6.62454 1.42262 4.47401C1.42262 3.32197 1.70418 2.26591 2.19704 1.34426C4.9956 5.10766 9.20225 7.56535 13.9193 7.83421C13.8313 7.37338 13.7785 6.89341 13.7785 6.41337C13.7785 2.99554 16.313 0.211426 19.4636 0.211426C21.1004 0.211426 22.5789 0.960264 23.6174 2.16993C24.9022 1.90113 26.1343 1.38268 27.2256 0.672254C26.8031 2.11236 25.9055 3.32203 24.7262 4.09002C25.8703 3.95568 26.9792 3.60998 28 3.13C27.2257 4.35882 26.2576 5.45324 25.1487 6.33653Z"
                fill="#32C3E2"></path>
        </svg>
        , link: 'https://twitter.com/',
    },
    {
        icons: <svg width="16" height="29" viewBox="0 0 16 29" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.1389 16.2336L14.9235 11.2135H10.0178V7.95578C10.0178 6.58237 10.7031 5.24363 12.9002 5.24363H15.1304V0.969525C15.1304 0.969525 13.1066 0.630371 11.1715 0.630371C7.13153 0.630371 4.4908 3.03479 4.4908 7.38745V11.2135H0V16.2336H4.4908V28.3695H10.0178V16.2336H14.1389Z"
                fill="#3D7AD6"></path>
        </svg>
        , link: 'https://www.facebook.com/',
    },

];

const slider2 = [
    {
        image:
            <svg className="mt-2 mb-3" enableBackground="new 0 0 32 32" height="28px"
                id="Layer_3" version="1.1" viewBox="0 0 32 32" space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink">
                <g id="calendar_1_">
                    <path
                        d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"
                        fill="#333332"></path>
                    <rect fill="#333332" height="3" width="4" x="7" y="12"></rect>
                    <rect fill="#333332" height="3" width="4" x="7" y="17"></rect>
                    <rect fill="#333332" height="3" width="4" x="7" y="22"></rect>
                    <rect fill="#333332" height="3" width="4" x="14" y="22"></rect>
                    <rect fill="#333332" height="3" width="4" x="14" y="17"></rect>
                    <rect fill="#333332" height="3" width="4" x="14" y="12"></rect>
                    <rect fill="#333332" height="3" width="4" x="21" y="22"></rect>
                    <rect fill="#333332" height="3" width="4" x="21" y="17"></rect>
                    <rect fill="#333332" height="3" width="4" x="21" y="12"></rect>
                </g>
            </svg>, heading: '2023', text: 'Modal'
    }, {
        image:
            <svg className="mt-2 mb-3" data-name="Capa 1" height="32px" id="Capa_1"
                viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.19,10.24a8.17,8.17,0,0,0-3-5.18A8.28,8.28,0,0,0,10,3.32h0A9.14,9.14,0,0,0,5.12,4.85a7.93,7.93,0,0,0-3.41,6.33A7.84,7.84,0,0,0,2.94,16a1.47,1.47,0,0,0,1.18.57,1.63,1.63,0,0,0,.64-.13,1.4,1.4,0,0,0,.76-1.68.3.3,0,0,0,0-.1s-1.6-3-.11-5.57L5.4,9h0s0,0,0,0A5.05,5.05,0,0,1,10,6.32,5.48,5.48,0,0,1,14.61,9a5.09,5.09,0,0,1,.58,3.54l-5-1.88a.38.38,0,1,0-.27.7L15,13.25a5.92,5.92,0,0,1-.37,1,1.63,1.63,0,0,0-.14,1.36,1.38,1.38,0,0,0,.75.8c.65.27,1.55.3,2.2-1.1A8.09,8.09,0,0,0,18.19,10.24ZM4.8,14.92a.64.64,0,0,1-.35.78.74.74,0,0,1-.9-.2,7,7,0,0,1-1.09-4.26,9,9,0,0,1,.8-3.1l1.33.78A6.93,6.93,0,0,0,4.8,14.92ZM5,8.27,3.62,7.49a7.23,7.23,0,0,1,2-2A8.34,8.34,0,0,1,9.69,4.09l0,1.49A5.71,5.71,0,0,0,5,8.27Zm5.44-2.69,0-1.5a7.33,7.33,0,0,1,4.25,1.55,8,8,0,0,1,1.69,1.88L15,8.28A6.25,6.25,0,0,0,10.41,5.58ZM16.78,15c-.48,1-1,.85-1.23.73a.67.67,0,0,1-.34-.36,1,1,0,0,1,.1-.77,5.67,5.67,0,0,0,.41-1l.29.11a.35.35,0,0,0,.14,0,.39.39,0,0,0,.35-.25.38.38,0,0,0-.22-.48l-.38-.14a6,6,0,0,0-.47-3.86l1.32-.75a7.3,7.3,0,0,1,.7,2.19A7.37,7.37,0,0,1,16.78,15Z">
                </path>
                <path d="M7.87,7.5a.34.34,0,1,0,.33.33A.34.34,0,0,0,7.87,7.5Z"></path>
                <circle cx="12.14" cy="7.81" r="0.33"></circle>
                <path d="M14.85,11.62a.34.34,0,1,0-.34.33A.34.34,0,0,0,14.85,11.62Z"></path>
                <path d="M5.58,11.29a.33.33,0,1,0,.34.33A.33.33,0,0,0,5.58,11.29Z"></path>
            </svg>, heading: ' 6, 900 km', text: 'Driven'
    },
    {
        image:
            <svg className="mt-2 mb-3" enableBackground="new 0 0 24 24" height="32"
                id="Layer_4" version="1.1" viewBox="0 0 24 24" space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink">
                <g>
                    <circle cx="8" cy="13" r="1"></circle>
                    <circle cx="12" cy="13" r="1"></circle>
                    <path d="M5,10h10V3H5V10z M6,4h8v5h-3.6L9.3,5l-1,0.3L9.4,9H6V4z"></path>
                    <path
                        d="M21.4,4.2l-0.8,0.6L23,8v8c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4c0-1.7-1.3-3-3-3V1c0-0.6-0.4-1-1-1H3C2.4,0,2,0.4,2,1v21H1   c-0.6,0-1,0.4-1,1v1h20v-1c0-0.6-0.4-1-1-1h-1V10c1.1,0,2,0.9,2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2V7.7L21.4,4.2z M4,22V2h12v20H4z">
                    </path>
                </g>
            </svg>, heading: ' Diesel', text: 'Fuel'
    }, {
        image:
            <svg className="mt-2 mb-3" id="Lineal" viewBox="0 0 512 512" height="32px"
                xmlns="http://www.w3.org/2000/svg">
                <title></title>
                <g data-name="30. Police man" id="_30._Police_man">
                    <path
                        d="M335.43,398.17a33.25,33.25,0,0,1-28.6-16.05,8,8,0,1,0-13.66,8.32A49,49,0,0,0,324.88,413l-20.22,35.22-23-26.53c3.63-4.17,2.76-9-.37-11.77a8,8,0,0,0-11.29.79L255.9,426.93l-35.44-39.37a48.85,48.85,0,0,0,5.39-19c61.85,16.26,134.68-18.66,137.09-98.32A32.25,32.25,0,0,0,389,238.46V202a8,8,0,0,0-16,0v36.46a16,16,0,0,1-10,15.09V191.22a39.93,39.93,0,0,0,21.82-26.52c4.77-19.06,2.69-11.72,9.12-32.18a56.7,56.7,0,0,0-29.78-68L282.82,26.1a63.76,63.76,0,0,0-54.64,0L146.84,64.49a56.7,56.7,0,0,0-29.78,68c6.29,20,4.73,14.63,7.2,24.5-.38,1.46-.26-4.7-.26,81.44a32.65,32.65,0,0,0,25.06,31.62c1.3,44.39,24.68,77.29,60.94,93v1.78a33.08,33.08,0,0,1-9.79,23.58c-11.19,11.16-25.3,9.76-23.64,9.76A82.52,82.52,0,0,0,94,480.74V488a8,8,0,0,0,16,0v-7.26a66.54,66.54,0,0,1,59.53-66.19L199.06,466a8,8,0,0,0,13,1.27l13.07-15.05-7,34.21a8,8,0,1,0,15.68,3.18L244.32,438c5.81,6.46,6.81,8.22,10.14,8.87A10.37,10.37,0,0,0,256,447a8.07,8.07,0,0,0,5.35-2.05c.63-.58,1.13-1.21,6.29-7.15l10.52,51.79a8,8,0,1,0,15.68-3.18l-6.95-34.21L300,467.25a8,8,0,0,0,13-1.27l29.53-51.43A66.53,66.53,0,0,1,402,480.74V488a8,8,0,0,0,16,0v-7.26A82.53,82.53,0,0,0,335.43,398.17ZM153.66,79,235,40.56a47.89,47.89,0,0,1,41,0L357.34,79a40.65,40.65,0,0,1,21.34,48.76L375.13,139H343a8,8,0,0,0,0,16h27.75l-1.45,5.82A24,24,0,0,1,346,179H165a24,24,0,0,1-23.28-18.18L140.25,155H301.67a8,8,0,0,0,0-16H135.87l-3.55-11.28A40.65,40.65,0,0,1,153.66,79ZM140,238.46V186.25a39.94,39.94,0,0,0,9,5.43V253.1A16.54,16.54,0,0,1,140,238.46Zm25,27.67V195c1.51,0,180.71,0,182,0v71.15C347,386.78,165,386.39,165,266.13Zm42.34,182.13L187.12,413a49,49,0,0,0,23.52-12.48L230,422.12Z">
                    </path>
                </g>
            </svg>, heading: ' Individual', text: 'Seller'
    }, {
        image:
            <svg className="mt-2 mb-3" enableBackground="new 0 0 32 32" height="28"
                id="Layer_5" version="1.1" viewBox="0 0 32 32" space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink">
                <g id="calendar_2_">
                    <path
                        d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"
                        fill="#333332"></path>
                    <rect fill="#333332" height="3" width="4" x="7" y="12"></rect>
                    <rect fill="#333332" height="3" width="4" x="7" y="17"></rect>
                    <rect fill="#333332" height="3" width="4" x="7" y="22"></rect>
                    <rect fill="#333332" height="3" width="4" x="14" y="22"></rect>
                    <rect fill="#333332" height="3" width="4" x="14" y="17"></rect>
                    <rect fill="#333332" height="3" width="4" x="14" y="12"></rect>
                    <rect fill="#333332" height="3" width="4" x="21" y="22"></rect>
                    <rect fill="#333332" height="3" width="4" x="21" y="17"></rect>
                    <rect fill="#333332" height="3" width="4" x="21" y="12"></rect>
                </g>
            </svg>, heading: ' Automatic', text: 'Transmission'
    }, {
        image:
            <svg className="mt-2 mb-3" enableBackground="new 0 0 50 50" height="32px"
                id="Layer_2" version="1.1" viewBox="0 0 50 50" width="50px"
                space="preserve" xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink">
                <rect fill="none" height="50" width="50"></rect>
                <polyline fill="none"
                    points="28.081,29.919   24,34 22,34 22,36 20,38 18,38 18,40 15,43 12,43 12,46 9,49 3,49 1,47 1,41 19.96,22.04 "
                    stroke="#000000" strokeLinecap="round" strokeMiterlimit="10"
                    strokeWidth="2"></polyline>
                <path
                    d="M49,16  c0,8.281-6.719,15-15,15s-15-6.719-15-15c0-8.282,6.719-15,15-15S49,7.718,49,16z"
                    fill="none" stroke="#000000" strokeLinecap="round"
                    strokeMiterlimit="10" strokeWidth="2"></path>
                <path
                    d="M41.071,23.071L26.929,8.929  c3.904-3.904,10.238-3.904,14.143,0S44.976,19.167,41.071,23.071z"
                    fill="none" stroke="#000000" strokeLinecap="round"
                    strokeMiterlimit="10" strokeWidth="2"></path>
                <line fill="none" stroke="#000000" strokeLinecap="round"
                    strokeMiterlimit="10" strokeWidth="2" x1="1.61" x2="18.282" y1="46.39"
                    y2="29.718"></line>
            </svg>, heading: ' First', text: 'Owner'
    }
];


const UseCarDeatail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="page-content bg-white">
                {/* slide nav bar */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/">Car Collections</Link></li>
                            <li className="breadcrumb-item">SMART GT AA-211</li>
                        </ul>
                    </div>
                </nav>
                {/* Slider */}
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className=" col-xl-8 col-lg-7 col-md-6 m-b0 m-md-b50">
                                <div className="product-gallery on-show-slider lightgallery m-b40" id="lightgallery">
                                    <Swiper className="swiper-container sync1"
                                        spaceBetween={10}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                    >
                                        {slides.map((slide, index) => {
                                            return (
                                                <SwiperSlide className="swiper-slide" key={index}>
                                                    <div className="dlab-thum-bx">
                                                        <img src={slide.img} alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                    {/* Slide thumbs  */}
                                    <Swiper className="swiper-container thumb-slider sync2"
                                        onClick={setThumbsSwiper}
                                        spaceBetween={30}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        breakpoints={{
                                            1200: { slidesPerView: 4, },
                                            780: { slidesPerView: 2, },
                                            300: { slidesPerView: 1, },
                                        }}

                                    >
                                        {slides.map((item, ind) => {
                                            return (
                                                <SwiperSlide id="thumbsSlides" className="swiper-slide slidethumbs " key={ind}>
                                                    <div className="dlab-media">
                                                        <img className="cursorPointer" src={item.image2} alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <div className="m-b50">
                                    <div className="dlab-post-title">
                                        <h3 className="post-title"><Link to="#">SMART GT AA-211</Link></h3>
                                        <h6 className="sub-title">SPORT CAR</h6>
                                        <p className="m-b10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam</p>
                                        <div className="dlab-divider bg-gray tb15">
                                            <i className="icon-dot c-square"></i>
                                        </div>
                                    </div>
                                    <div className="social-list">
                                        <span>Share</span>
                                        <SocialMediaLinks />
                                    </div>
                                </div>
                                {/* Accordian */}
                                <AccordianUsecar />
                            </div>
                            {/* form  */}
                            <div className="col-xl-4  col-lg-5 col-md-6">
                                <div className="sticky-top">
                                    <div className="car-dl-info icon-bx-wraper style-1 m-b50">
                                        <div className="price m-b30">
                                            <h3 className="">Price $5890</h3>
                                            <span>New Car Price: $5890</span>
                                        </div>
                                        <form>
                                            <p className="">Please enter your contact details to get seller details.</p>
                                            <div className="form-group m-b20">
                                                <input className="form-control sm" placeholder="Name" />
                                            </div>
                                            <div className="form-group m-b20">
                                                <input className="form-control sm" placeholder="Mobile Number" />
                                            </div>
                                            <div className="text-left m-b20">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                        id="flexCheckChecked" />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Send details on email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="clearfix">
                                                <button type="button" className="btn-primary btn btn-block" data-toggle="modal"
                                                    data-target="#car-details">See Seller Details Now</button>
                                            </div>
                                        </form>
                                    </div>
                                    <SliderBlog />
                                    <UserMinislider />
                                </div>
                            </div>
                        </div >
                    </div >
                </section >
                {/*Contect Us page >>> */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div >
        </>
    )
}

export const SocialMediaLinks = () => {
    return (
        <ul>
            {socialLinks.map((item, ind) => {
                return (
                    <li key={ind}><Link to={item.link}>{item.icons}</Link></li>
                )
            })}
        </ul>
    )
}



export function SliderBlog() {
    return (
        <div className="used-car-features clearfix m-b50">
            {slider2.map((items, slideKey) => (
                <div className="car-features" key={slideKey}>
                    {items.image}
                    <h6>{items.heading}</h6>
                    <span>{items.text}</span>
                </div>
            ))}
        </div>
    )
}


export default UseCarDeatail;






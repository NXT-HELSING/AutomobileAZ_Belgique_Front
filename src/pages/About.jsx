import React, { useEffect, useState } from 'react'
import { IMAGE } from '../constent/theme'
import CarlistingBanner from '../element/CarlistingBanner'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContectUs from '../components/ContectUs';




const progressCard = [
    {
        icon:
            <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9787 1.46102L15.2421 12.3206L2.40714 14.0677C0.105462 14.3793 -0.816966 17.0286 0.85219 18.546L10.138 26.9942L7.94171 38.9283C7.54638 41.0854 9.97984 42.7012 12.018 41.6924L23.5 36.0575L34.982 41.6924C37.0202 42.693 39.4536 41.0854 39.0583 38.9283L36.862 26.9942L46.1478 18.546C47.817 17.0286 46.8945 14.3793 44.5929 14.0677L31.7579 12.3206L26.0213 1.46102C24.9935 -0.474683 22.0153 -0.499289 20.9787 1.46102Z" fill="#0D3DE6"></path>
            </svg>, title: 'FIND'
    },
    {
        icon:
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 26.2499V39.375C44 40.8245 42.7685 42 41.25 42H27.5C25.9815 42 24.75 40.8245 24.75 39.375V26.2499C24.75 24.8004 25.9815 23.6249 27.5 23.6249H41.25C42.7685 23.6249 44 24.8004 44 26.2499ZM11 20.9999C4.92508 20.9999 0 25.7011 0 31.4999C0 37.2988 4.92508 42 11 42C17.0749 42 22 37.2988 22 31.4999C22 25.7011 17.0749 20.9999 11 20.9999ZM41.1666 18.3749C43.3443 18.3749 44.7055 16.1871 43.6167 14.4374L35.4501 1.3123C34.3613 -0.437434 31.6388 -0.437434 30.5499 1.3123L22.3833 14.4374C21.2945 16.1871 22.6557 18.3749 24.8334 18.3749H41.1666Z" fill="#0D3DE5"></path>
            </svg>, title: 'UPDATE'
    },
    {
        icon:
            <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.7875 6.21086L19.3875 0.272785C18.9489 0.0926974 18.4786 0 18.0037 0C17.5289 0 17.0586 0.0926974 16.62 0.272785L2.22 6.21086C0.8775 6.76014 0 8.05909 0 9.49908C0 24.2329 8.5875 34.4167 16.6125 37.7272C17.4975 38.0909 18.495 38.0909 19.38 37.7272C25.8075 35.0774 36 25.9253 36 9.49908C36 8.05909 35.1225 6.76014 33.7875 6.21086ZM18.0075 33.1252L18 4.84511L31.1925 10.2859C30.945 21.5237 25.035 29.6663 18.0075 33.1252Z" fill="#0D3DE6"></path>
            </svg>, title: 'SECURE'
    },
    {
        icon:
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 26.2499V39.375C44 40.8245 42.7685 42 41.25 42H27.5C25.9815 42 24.75 40.8245 24.75 39.375V26.2499C24.75 24.8004 25.9815 23.6249 27.5 23.6249H41.25C42.7685 23.6249 44 24.8004 44 26.2499ZM11 20.9999C4.92508 20.9999 0 25.7011 0 31.4999C0 37.2988 4.92508 42 11 42C17.0749 42 22 37.2988 22 31.4999C22 25.7011 17.0749 20.9999 11 20.9999ZM41.1666 18.3749C43.3443 18.3749 44.7055 16.1871 43.6167 14.4374L35.4501 1.3123C34.3613 -0.437434 31.6388 -0.437434 30.5499 1.3123L22.3833 14.4374C21.2945 16.1871 22.6557 18.3749 24.8334 18.3749H41.1666Z" fill="#0D3DE5"></path>
            </svg>, title: 'We Deliver'
    },
]
const imageCard = [
    {
        location: 1, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear)" />
            <defs>
                <linearGradient id="paint0_linear" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }, {
        location: 2, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear4)" />
            <defs>
                <linearGradient id="paint0_linear4" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }, {
        location: 3, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear2)" />
            <defs>
                <linearGradient id="paint0_linear2" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }, {
        location: 4, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear3)" />
            <defs>
                <linearGradient id="paint0_linear3" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }
];

const ourTeam = [
    { img: IMAGE.teamPic1, name: 'Tommy Hank' },
    { img: IMAGE.teamPic2, name: 'Emilia Johnson' },
    { img: IMAGE.teamPic3, name: 'Mark Steven' },
    { img: IMAGE.teamPic4, name: 'Cindy Stark' },
    { img: IMAGE.teamPic5, name: 'Wanda Hummels' },
    { img: IMAGE.teamPic6, name: 'David Lee' },
    { img: IMAGE.teamPic7, name: 'Franklin Mc. Good' },
    { img: IMAGE.teamPic8, name: 'James Rodriguez' },
]






const About = () => {
    const [addAcrtive, setActive] = useState(1);
    const [swiperWidth, setSwiperWidth] = useState(false);

    window.onresize = function () {
        const isNarrowScreen = window.matchMedia("(max-width: 990px)");
        if (isNarrowScreen.matches) {
            setSwiperWidth(true);
        } else {
            setSwiperWidth(false);
        }
    }
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr1} title={'About Mobhil'} />
                {/* Content */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 me-auto">
                                <div className="section-head">
                                    <h6 className="text-primary sub-title">PROCCESS</h6>
                                    <h2 className="title">This is how we work</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                            </div>
                        </div>
                        <div className="row process-wrapper m-t40">
                            {progressCard.map((cards, index) => (
                                <div className="col-xl-3 col-md-6" key={index}>
                                    <div className="icon-bx-wraper style-1 shadow-none rounded-0">
                                        <div className="icon-md m-b40">{cards.icon}</div>
                                        <div className="icon-content">
                                            <h4 className="title m-b10">{cards.title}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ====== */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Our dealer shops</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                        </div>
                        <div className="map-bx-wraper">
                            <img src={IMAGE.mapPic1} className="map-img" alt="" />
                            {imageCard.map((i, ind) => (
                                <div onMouseEnter={() => { setActive(ind) }} className={`shop-location location${i.location} ${addAcrtive === ind ? 'active' : ''} `} key={ind}>{i.img}</div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ======= */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 me-auto">
                                <div className="section-head">
                                    <h6 className="text-primary sub-title">TEAM</h6>
                                    <h2 className="title">Our teams</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                            </div>
                        </div>
                        {swiperWidth == false &&
                            <div className="team-slider">
                                <div className="swiper-wrapper row">
                                    {
                                        ourTeam.map((team, tkey) => (
                                            <div className="swiper-slide col-xl-3 col-lg-4" key={tkey}>
                                                <div className="dlab-team style-1 m-b40">
                                                    <div className="dlab-media">
                                                        <Link to={'#'}>
                                                            <img src={team.img} alt="" /></Link>
                                                        <div className="overlay-bx">
                                                            <div className="social-list style-2">
                                                                <ul>
                                                                    <li><Link to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                                                                    <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                                                    <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                                                    <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dlab-content">
                                                        <h4 className="dlab-name">{team.name}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }


                        {swiperWidth == true &&
                            <Swiper className="team-slider"
                                slidesPerView={3}
                                spaceBetween={20}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 2
                                    },
                                    240: {
                                        slidesPerView: 1
                                    }
                                }}

                            >
                                <div className="swiper-wrapper row">
                                    {
                                        ourTeam.map((team, tkey) => (
                                            <SwiperSlide className="swiper-slide col-xl-3 col-lg-4" key={tkey}>
                                                <div className="dlab-team style-1 m-b40">
                                                    <div className="dlab-media">
                                                        <Link to={'#'}>
                                                            <img src={team.img} alt="" /></Link>
                                                        <div className="overlay-bx">
                                                            <div className="social-list style-2">
                                                                <ul>
                                                                    <li><Link to="/https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                                                                    <li><Link to="/https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                                                    <li><Link to="/https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                                                    <li><Link to="/https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dlab-content">
                                                        <h4 className="dlab-name">Tommy Hank</h4>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </div>
                            </Swiper>
                        }
                    </div>
                </section >
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div >
        </>
    )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'


const abuotSlider = [
    {
        icon: 'M20.9787 1.46102L15.2421 12.3206L2.40714 14.0677C0.105462 14.3793 -0.816966 17.0286 0.85219 18.546L10.138 26.9942L7.94171 38.9283C7.54638 41.0854 9.97984 42.7012 12.018 41.6924L23.5 36.0575L34.982 41.6924C37.0202 42.693 39.4536 41.0854 39.0583 38.9283L36.862 26.9942L46.1478 18.546C47.817 17.0286 46.8945 14.3793 44.5929 14.0677L31.7579 12.3206L26.0213 1.46102C24.9935 -0.474683 22.0153 -0.499289 20.9787 1.46102Z',
        title: 'EXCLUSIF',
        desc: 'Une sélection unique de véhicules d’occasion, choisie avec soin.'
    },
    {
        icon: 'M44 26.2499V39.375C44 40.8245 42.7685 42 41.25 42H27.5C25.9815 42 24.75 40.8245 24.75 39.375V26.2499C24.75 24.8004 25.9815 23.6249 27.5 23.6249H41.25C42.7685 23.6249 44 24.8004 44 26.2499ZM11 20.9999C4.92508 20.9999 0 25.7011 0 31.4999C0 37.2988 4.92508 42 11 42C17.0749 42 22 37.2988 22 31.4999C22 25.7011 17.0749 20.9999 11 20.9999ZM41.1666 18.3749C43.3443 18.3749 44.7055 16.1871 43.6167 14.4374L35.4501 1.3123C34.3613 -0.437434 31.6388 -0.437434 30.5499 1.3123L22.3833 14.4374C21.2945 16.1871 22.6557 18.3749 24.8334 18.3749H41.1666Z',
        title: 'MISE À JOUR',
        desc: 'Annonces mises à jour quotidiennement via notre flux FTP direct.'
    },
    {
        icon: 'M33.7875 6.21086L19.3875 0.272785C18.9489 0.0926974 18.4786 0 18.0037 0C17.5289 0 17.0586 0.0926974 16.62 0.272785L2.22 6.21086C0.8775 6.76014 0 8.05909 0 9.49908C0 24.2329 8.5875 34.4167 16.6125 37.7272C17.4975 38.0909 18.495 38.0909 19.38 37.7272C25.8075 35.0774 36 25.9253 36 9.49908C36 8.05909 35.1225 6.76014 33.7875 6.21086ZM18.0075 33.1252L18 4.84511L31.1925 10.2859C30.945 21.5237 25.035 29.6663 18.0075 33.1252Z',
        title: 'SÉCURISÉ',
        desc: 'Achat serein : garantie, historique transparent et papiers en ordre.'
    }
]

const AboutSlider = () => {
    return (
        <Swiper className="swiper-container about-swiper"
            slidesPerView={3}
            speed={1200}
            breakpoints={{
                1280: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1,
                },
            }}
        >
            {
                abuotSlider.map((item, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        <div className="icon-bx-wraper style-1 hover-overlay-effect">
                            <div className="icon-md m-b40">
                                <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={item.icon} fill="#0D3DE6" />
                                </svg>
                            </div>
                            <div className="icon-content">
                                <h4 className="title text-white"><Link to="/cars" id='about-title' className="text-effect-1">{item.title}</Link></h4>
                                <p>{item.desc}</p>
                            </div>
                            <div className="effect bg-primary"></div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default AboutSlider
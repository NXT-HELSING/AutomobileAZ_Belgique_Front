import React from 'react';
import { IMAGE } from '../constent/theme';
import CarlistingBanner from '../element/CarlistingBanner';
import ContectUs from '../components/ContectUs';

const progressCard = [
    {
        icon:
            <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9787 1.46102L15.2421 12.3206L2.40714 14.0677C0.105462 14.3793 -0.816966 17.0286 0.85219 18.546L10.138 26.9942L7.94171 38.9283C7.54638 41.0854 9.97984 42.7012 12.018 41.6924L23.5 36.0575L34.982 41.6924C37.0202 42.693 39.4536 41.0854 39.0583 38.9283L36.862 26.9942L46.1478 18.546C47.817 17.0286 46.8945 14.3793 44.5929 14.0677L31.7579 12.3206L26.0213 1.46102C24.9935 -0.474683 22.0153 -0.499289 20.9787 1.46102Z" fill="#0D3DE6"></path>
            </svg>, title: 'RECHERCHE'
    },
    {
        icon:
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 26.2499V39.375C44 40.8245 42.7685 42 41.25 42H27.5C25.9815 42 24.75 40.8245 24.75 39.375V26.2499C24.75 24.8004 25.9815 23.6249 27.5 23.6249H41.25C42.7685 23.6249 44 24.8004 44 26.2499ZM11 20.9999C4.92508 20.9999 0 25.7011 0 31.4999C0 37.2988 4.92508 42 11 42C17.0749 42 22 37.2988 22 31.4999C22 25.7011 17.0749 20.9999 11 20.9999ZM41.1666 18.3749C43.3443 18.3749 44.7055 16.1871 43.6167 14.4374L35.4501 1.3123C34.3613 -0.437434 31.6388 -0.437434 30.5499 1.3123L22.3833 14.4374C21.2945 16.1871 22.6557 18.3749 24.8334 18.3749H41.1666Z" fill="#0D3DE5"></path>
            </svg>, title: 'MISE À JOUR'
    },
    {
        icon:
            <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.7875 6.21086L19.3875 0.272785C18.9489 0.0926974 18.4786 0 18.0037 0C17.5289 0 17.0586 0.0926974 16.62 0.272785L2.22 6.21086C0.8775 6.76014 0 8.05909 0 9.49908C0 24.2329 8.5875 34.4167 16.6125 37.7272C17.4975 38.0909 18.495 38.0909 19.38 37.7272C25.8075 35.0774 36 25.9253 36 9.49908C36 8.05909 35.1225 6.76014 33.7875 6.21086ZM18.0075 33.1252L18 4.84511L31.1925 10.2859C30.945 21.5237 25.035 29.6663 18.0075 33.1252Z" fill="#0D3DE6"></path>
            </svg>, title: 'SÉCURISÉ'
    },
    {
        icon:
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 26.2499V39.375C44 40.8245 42.7685 42 41.25 42H27.5C25.9815 42 24.75 40.8245 24.75 39.375V26.2499C24.75 24.8004 25.9815 23.6249 27.5 23.6249H41.25C42.7685 23.6249 44 24.8004 44 26.2499ZM11 20.9999C4.92508 20.9999 0 25.7011 0 31.4999C0 37.2988 4.92508 42 11 42C17.0749 42 22 37.2988 22 31.4999C22 25.7011 17.0749 20.9999 11 20.9999ZM41.1666 18.3749C43.3443 18.3749 44.7055 16.1871 43.6167 14.4374L35.4501 1.3123C34.3613 -0.437434 31.6388 -0.437434 30.5499 1.3123L22.3833 14.4374C21.2945 16.1871 22.6557 18.3749 24.8334 18.3749H41.1666Z" fill="#0D3DE5"></path>
            </svg>, title: 'LIVRAISON'
    },
];

const About = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr1} title={'À propos de nous'} />
                
                {/* Process Section */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 me-auto">
                                <div className="section-head">
                                    <h6 className="text-primary sub-title">NOTRE PROCESSUS</h6>
                                    <h2 className="title">Voici comment nous travaillons</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <p>Chez AutomobileAZ, nous sélectionnons chaque véhicule avec rigueur. De la recherche à la livraison, chaque étape est pensée pour vous garantir une expérience d'achat simple, transparente et sécurisée.</p>
                            </div>
                        </div>
                        <div className="row process-wrapper m-t40">
                            {progressCard.map((cards, index) => (
                                <div className="col-xl-3 col-md-6" key={index}>
                                    <div className="icon-bx-wraper style-1 shadow-none rounded-0">
                                        <div className="icon-md m-b40">{cards.icon}</div>
                                        <div className="icon-content">
                                            <h4 className="title m-b10">{cards.title}</h4>
                                            <p>Nous sélectionnons rigoureusement chaque véhicule d'occasion pour vous assurer qualité et fiabilité à chaque étape de votre achat.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Showroom Section */}
                <section className="content-inner-2 bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className="section-head">
                                    <h6 className="text-primary sub-title">NOTRE SHOWROOM UNIQUE</h6>
                                    <h2 className="title">Une expérience d'achat de confiance à Meise</h2>
                                </div>
                                <p className="m-b20">
                                    Situé aux portes de Bruxelles à Meise, notre showroom unique vous accueille dans un cadre chaleureux et professionnel. Chez AutomobileAZ, nous privilégions la qualité à la quantité : chaque véhicule de notre collection est méticuleusement sélectionné, inspecté et préparé avant de vous être présenté.
                                </p>
                                <p className="m-b30">
                                    Que vous cherchiez une berline confortable, un SUV familial ou une citadine économique, notre équipe d'experts est là pour vous offrir un service clé en main, de l'essai routier jusqu'aux formalités administratives.
                                </p>
                                <div className="row">
                                    <div className="col-md-6 m-b15">
                                        <div className="icon-bx-wraper style-2">
                                            <div className="icon-content">
                                                <h5 className="title"><i className="fas fa-check-circle text-primary me-2"></i>Service Sur-Mesure</h5>
                                                <p className="m-b0">Essai personnalisé et conseils neutres d'experts adaptés à vos besoins réels.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-b15">
                                        <div className="icon-bx-wraper style-2">
                                            <div className="icon-content">
                                                <h5 className="title"><i className="fas fa-shield-alt text-primary me-2"></i>Garantie Totale</h5>
                                                <p className="m-b0">Inspection complète et garantie certifiée sur chaque véhicule d'occasion.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="showroom-card p-40 bg-white shadow-sm" style={{ borderRadius: '15px', border: '1px solid #eee' }}>
                                    <h3 className="m-b20">Informations Pratiques</h3>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-start m-b15">
                                            <i className="fas fa-map-marker-alt text-primary me-3 m-t5" style={{ fontSize: '18px' }}></i>
                                            <div>
                                                <strong>Adresse</strong>
                                                <p className="m-b0">Wellingstraat 89, 1861 Meise, Belgique</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start m-b15">
                                            <i className="fas fa-clock text-primary me-3 m-t5" style={{ fontSize: '18px' }}></i>
                                            <div>
                                                <strong>Heures d'ouverture</strong>
                                                <p className="m-b0">Lundi - Samedi : 09h00 - 18h30</p>
                                                <p className="m-b0 text-muted">Dimanche & Jours fériés : Fermé</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start m-b15">
                                            <i className="fas fa-phone-alt text-primary me-3 m-t5" style={{ fontSize: '18px' }}></i>
                                            <div>
                                                <strong>Contact direct</strong>
                                                <p className="m-b0">+32 (0)2 251 19 90</p>
                                                <p className="m-b0">info@automobileaz.be</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="m-t30">
                                        <a href="https://maps.google.com/?q=Wellingstraat+89,+1861+Meise,+Belgique" target="_blank" rel="noopener noreferrer" className="btn btn-primary d-block text-center rounded-pill">
                                            Obtenir l'itinéraire
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
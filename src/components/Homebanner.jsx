import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Homeslide from '../element/Homeslide'

const Homebanner = () => {
    return (
        <>
            <div className="col-lg-6">
                <div className="banner-content-area">
                    <div className="trending-text">
                        <span className="badge badge-primary">TENDANCE</span>
                        <span>BMW Série 3</span>
                    </div>
                    <img className="pattern-img move-1" src={IMAGE.patternImg} alt="" />
                    <h1 className="title" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Bienvenue chez AutomobileAZ – Spécialiste de la voiture d’occasion en Belgique</h1>
                    <p>Plus de 30 ans d’expérience (depuis 1993). Véhicules contrôlés, garantis et livrés clé en main.<br />Découvrez notre sélection rigoureuse de voitures d’occasion à Meise, Vilvoorde et toute la Belgique.</p>
                    <div className="car-search-box row item3">
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select className="form-control sm">
                                    <option>MARQUE</option>
                                    <option>BMW</option>
                                    <option>Mercedes</option>
                                    <option>Audi</option>
                                    <option>Toyota</option>
                                    <option>Volkswagen</option>
                                    <option>Opel</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select className="form-control sm">
                                    <option>CATÉGORIE</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Hatchback</option>
                                    <option>Coupe</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select className="form-control sm">
                                    <option>MODÈLE</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Link to={'/cars'} className="btn btn-primary btn-lg effect-1 d-flex align-items-center justify-content-between">
                                <span className="d-flex justify-content-between w-100">RECHERCHER<i className="las la-long-arrow-alt-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="advance-search">
                        <Link to={'/cars'} className="text-primary">Recherche avancée  <i className="las la-long-arrow-alt-right"></i></Link>
                    </div>
                    <div className="popular-brand m-t40">
                        <span>Marques populaires</span>
                        <div className="brand-list">
                            <Link to={'/cars'}>BMW</Link>
                            <Link to={'/cars'}>MERCEDES</Link>
                            <Link to={'/cars'}>VOLKSWAGEN</Link>
                            <Link to={'/cars'}>AUDI</Link>
                            <Link to={'/cars'}>OPEL</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Homeslide />
        </>
    );
};

export default Homebanner;

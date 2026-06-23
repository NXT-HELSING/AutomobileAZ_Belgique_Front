import React, { useState, useEffect } from 'react'
import { IMAGE } from '../constent/theme'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Homeslide from '../element/Homeslide'
import { vehicleApi } from '../services/api'

const Homebanner = () => {
    const navigate = useNavigate();
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [modelsByBrand, setModelsByBrand] = useState({});
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [availableModels, setAvailableModels] = useState([]);

    useEffect(() => {
        vehicleApi.getFilterOptions()
            .then(res => {
                setBrands(res.data.brands || []);
                setCategories(res.data.categories || []);
                setModelsByBrand(res.data.models || {});
            })
            .catch(err => console.error('Failed to load filter options:', err));
    }, []);

    const handleBrandChange = (e) => {
        const brand = e.target.value;
        setSelectedBrand(brand);
        setSelectedModel('');
        setAvailableModels(modelsByBrand[brand] || []);
    };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedBrand) params.set('manufacturer', selectedBrand);
        if (selectedCategory) params.set('category', selectedCategory);
        if (selectedModel) params.set('model', selectedModel);
        navigate(`/cars?${params.toString()}`);
    };

    return (
        <>
            <div className="col-lg-6">
                <div className="banner-content-area">
                    <div className="trending-text">
                        <span className="badge badge-primary">TENDANCE</span>
                        <span>BMW Série 3</span>
                    </div>
                    <img className="pattern-img move-1" src={IMAGE.patternImg} alt="" />
                    <h1 className="title" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Bienvenue chez AutomobileAZ – Spécialiste de la voiture d'occasion en Belgique</h1>
                    <p>Plus de 30 ans d'expérience (depuis 1993). Véhicules contrôlés, garantis et livrés clé en main.<br />Découvrez notre sélection rigoureuse de voitures d'occasion à Meise, Vilvoorde et toute la Belgique.</p>
                    <div className="car-search-box row item3">
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select
                                    className="form-control sm"
                                    value={selectedBrand}
                                    onChange={handleBrandChange}
                                >
                                    <option value="">MARQUE</option>
                                    {brands.map((brand, i) => (
                                        <option key={i} value={brand}>{brand}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select
                                    className="form-control sm"
                                    value={selectedCategory}
                                    onChange={e => setSelectedCategory(e.target.value)}
                                >
                                    <option value="">CATÉGORIE</option>
                                    {categories.map((cat, i) => (
                                        <option key={i} value={cat}>{cat}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="selected-box">
                                <Form.Select
                                    className="form-control sm"
                                    value={selectedModel}
                                    onChange={e => setSelectedModel(e.target.value)}
                                    disabled={!selectedBrand}
                                >
                                    <option value="">MODÈLE</option>
                                    {availableModels.map((model, i) => (
                                        <option key={i} value={model}>{model}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button
                                onClick={handleSearch}
                                className="btn btn-primary btn-lg effect-1 d-flex align-items-center justify-content-between w-100"
                            >
                                <span className="d-flex justify-content-between w-100">RECHERCHER<i className="las la-long-arrow-alt-right"></i></span>
                            </button>
                        </div>
                    </div>
                    <div className="advance-search">
                        <Link to={'/cars'} className="text-primary">Recherche avancée  <i className="las la-long-arrow-alt-right"></i></Link>
                    </div>
                    <div className="popular-brand m-t40">
                        <span>Marques populaires</span>
                        <div className="brand-list">
                            {brands.slice(0, 5).map((brand, i) => (
                                <Link key={i} to={`/cars?manufacturer=${encodeURIComponent(brand)}`}>{brand.toUpperCase()}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Homeslide />
        </>
    );
};

export default Homebanner;


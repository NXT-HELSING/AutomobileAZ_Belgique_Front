import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import MultiRangeSlider from '../components/MultiRangeSlider';
import { vehicleApi } from '../services/api';

const CarListingFilter = (props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Filter options from API
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);
    const [modelsByBrand, setModelsByBrand] = useState({});

    // Selected filter values (initialized from URL params)
    const [manufacturer, setManufacturer] = useState(searchParams.get('manufacturer') || '');
    const [model, setModel] = useState(searchParams.get('model') || '');
    const [category, setCategory] = useState(searchParams.get('category') || '');
    const [fuelType, setFuelType] = useState(searchParams.get('fuel_type') || '');
    const [minPrice, setMinPrice] = useState(searchParams.get('min_price') || '');
    const [maxPrice, setMaxPrice] = useState(searchParams.get('max_price') || '');
    const [availableModels, setAvailableModels] = useState([]);

    useEffect(() => {
        vehicleApi.getFilterOptions()
            .then(res => {
                setBrands(res.data.brands || []);
                setCategories(res.data.categories || []);
                setFuelTypes(res.data.fuel_types || []);
                setModelsByBrand(res.data.models || {});
                // Populate models if manufacturer pre-selected
                if (manufacturer) {
                    setAvailableModels(res.data.models?.[manufacturer] || []);
                }
            })
            .catch(err => console.error('Filter options error:', err));
    }, []);

    const handleBrandChange = (e) => {
        const val = e.target.value;
        setManufacturer(val);
        setModel('');
        setAvailableModels(modelsByBrand[val] || []);
    };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (manufacturer) params.set('manufacturer', manufacturer);
        if (model) params.set('model', model);
        if (category) params.set('category', category);
        if (fuelType) params.set('fuel_type', fuelType);
        if (minPrice) params.set('min_price', minPrice);
        if (maxPrice) params.set('max_price', maxPrice);
        navigate(`/cars?${params.toString()}`);
        if (props.onFilter) {
            props.onFilter(Object.fromEntries(params));
        }
    };

    const handleReset = () => {
        setManufacturer('');
        setModel('');
        setCategory('');
        setFuelType('');
        setMinPrice('');
        setMaxPrice('');
        setAvailableModels([]);
        navigate('/cars');
        if (props.onFilter) props.onFilter({});
    };

    return (
        <>
            <div className="col-xl-4 col-lg-4 m-b30">
                <aside className="side-bar sticky-top left">
                    <div className="section-head">
                        <h3 className="title">{props.title}</h3>
                        <h6 className="sub-title style-1">{props.text}</h6>
                    </div>
                    <form onSubmit={e => { e.preventDefault(); handleSearch(); }}>
                        <div className="widget widget_search">
                            {/* Manufacturer */}
                            <div className="form-group m-b20">
                                <Form.Select
                                    className="form-control cursorPointer borderNone"
                                    value={manufacturer}
                                    onChange={handleBrandChange}
                                >
                                    <option value="">Choisir une marque</option>
                                    {brands.map((b, i) => (
                                        <option key={i} value={b}>{b}</option>
                                    ))}
                                </Form.Select>
                            </div>

                            {/* Model (depends on manufacturer) */}
                            <div className="form-group m-b20">
                                <Form.Select
                                    className="form-control cursorPointer borderNone"
                                    value={model}
                                    onChange={e => setModel(e.target.value)}
                                    disabled={!manufacturer}
                                >
                                    <option value="">Choisir un modèle</option>
                                    {availableModels.map((m, i) => (
                                        <option key={i} value={m}>{m}</option>
                                    ))}
                                </Form.Select>
                            </div>

                            {/* Category */}
                            <div className="form-group">
                                <Form.Select
                                    className="form-control cursorPointer borderNone"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="">Choisir une catégorie</option>
                                    {categories.map((c, i) => (
                                        <option key={i} value={c}>{c}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>

                        {/* Price range */}
                        <div className="widget widget_price_range">
                            <h5>Fourchette de prix</h5>
                            <div className="row g-2 mt-1">
                                <div className="col-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Min €"
                                        value={minPrice}
                                        onChange={e => setMinPrice(e.target.value)}
                                        min={0}
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Max €"
                                        value={maxPrice}
                                        onChange={e => setMaxPrice(e.target.value)}
                                        min={0}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            {/* Fuel type */}
                            <div className="form-group m-b20">
                                <Form.Select
                                    className="form-control cursorPointer borderNone"
                                    value={fuelType}
                                    onChange={e => setFuelType(e.target.value)}
                                >
                                    <option value="">Tout carburant</option>
                                    {fuelTypes.map((ft, i) => (
                                        <option key={i} value={ft}>{ft}</option>
                                    ))}
                                </Form.Select>
                            </div>

                            {/* Action buttons */}
                            <div className="form-group m-b10">
                                <button
                                    type="submit"
                                    className="btn btn-lg shadow-none btn-primary d-flex justify-content-between w-100"
                                >
                                    RECHERCHER <i className="las la-long-arrow-alt-right"></i>
                                </button>
                            </div>
                            <div className="form-group">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="btn btn-lg shadow-none btn-outline-secondary d-flex justify-content-center w-100"
                                >
                                    Réinitialiser
                                </button>
                            </div>
                        </div>
                    </form>
                </aside>
            </div>
        </>
    )
}

export default CarListingFilter
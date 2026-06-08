import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { vehicleApi } from '../services/api';

const VehicleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        loadVehicle();
        window.scrollTo({ top: 0 });
    }, [id]);

    const loadVehicle = async () => {
        try {
            setLoading(true);
            const response = await vehicleApi.getById(id);
            setVehicle(response.data);
            setError(null);
        } catch (err) {
            if (err.response?.status === 404) {
                setError('Vehicle not found');
            } else {
                setError('Failed to load vehicle details');
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading vehicle details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">{error}</div>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="breadcrumb-row">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/cars">Car Collections</Link></li>
                        <li className="breadcrumb-item active">{vehicle.manufacturer_name} {vehicle.model}</li>
                    </ul>
                </div>
            </nav>

            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        {/* Images Gallery */}
                        <div className="col-xl-7 col-lg-6 m-b40">
                            <div className="product-gallery">
                                {vehicle.images && vehicle.images.length > 0 ? (
                                    <>
                                        <div className="main-image mb-3">
                                            <img 
                                                src={vehicle.images[selectedImage]?.url} 
                                                alt={vehicle.model}
                                                className="img-fluid rounded"
                                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="thumbnails d-flex gap-2 flex-wrap">
                                            {vehicle.images.map((img, idx) => (
                                                <div 
                                                    key={idx}
                                                    className={`thumbnail ${selectedImage === idx ? 'active border-primary' : ''}`}
                                                    onClick={() => setSelectedImage(idx)}
                                                    style={{ 
                                                        width: '80px', 
                                                        height: '80px', 
                                                        cursor: 'pointer',
                                                        border: selectedImage === idx ? '2px solid #0D3DE6' : '1px solid #ddd',
                                                        borderRadius: '4px',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    <img 
                                                        src={img.url} 
                                                        alt={`${vehicle.model} ${idx + 1}`}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="bg-light text-center py-5 rounded">No images available</div>
                                )}
                            </div>
                        </div>

                        {/* Vehicle Info */}
                        <div className="col-xl-5 col-lg-6 m-b40">
                            <div className="sticky-top">
                                <div className="dlab-post-title">
                                    <h3 className="post-title">
                                        {vehicle.manufacturer_name} {vehicle.model}
                                    </h3>
                                    <h6 className="sub-title">{vehicle.submodel || 'Vehicle'}</h6>
                                    <p className="m-b10">{vehicle.description || 'No description available.'}</p>
                                    <div className="dlab-divider bg-gray tb15">
                                        <i className="icon-dot c-square"></i>
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="feature-list m-b40">
                                    <div>
                                        <label>Year</label>
                                        <p className="value">{vehicle.year || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Mileage</label>
                                        <p className="value">{vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Fuel Type</label>
                                        <p className="value">{vehicle.fuel_type_name || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Transmission</label>
                                        <p className="value">{vehicle.transmission_name || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Engine</label>
                                        <p className="value">{vehicle.cylinder_capacity ? `${vehicle.cylinder_capacity} cc` : 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Power</label>
                                        <p className="value">{vehicle.engine_power_hp ? `${vehicle.engine_power_hp} HP` : 'N/A'}</p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="m-b40">
                                    <span className="btn btn-primary price-btn m-b10 m-r10">
                                        {vehicle.gross_price?.toLocaleString()}
                                    </span>
                                    <div className="mt-3">
                                        <span className="text-muted">Condition: </span>
                                        <span className={`badge ${vehicle.usage_category_id === 1 ? 'bg-success' : 'bg-info'}`}>
                                            {vehicle.condition || (vehicle.usage_category_id === 1 ? 'New' : 'Used')}
                                        </span>
                                    </div>
                                    {vehicle.accident_flag && vehicle.accident_flag !== 'N' && (
                                        <div className="mt-2">
                                            <span className="badge bg-warning text-dark">
                                                {vehicle.accident_flag === 'Y' ? 'Damaged Vehicle' : 'Repaired After Accident'}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <Link to={`/contact?vehicle=${vehicle.id}`} className="btn btn-primary w-100">
                                    Contact Dealer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Options Section */}
            {vehicle.options && vehicle.options.length > 0 && (
                <section className="content-inner-2 bg-light">
                    <div className="container">
                        <h4 className="mb-4">Vehicle Features & Options</h4>
                        <div className="row">
                            {vehicle.options.map((option, idx) => (
                                <div key={idx} className="col-md-4 col-lg-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-check-circle text-primary me-2"></i>
                                        <span>{option.option_name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default VehicleDetail;

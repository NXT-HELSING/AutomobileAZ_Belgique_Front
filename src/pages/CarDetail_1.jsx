import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicleApi } from '../services/api';

const CarDetail_1 = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const loadVehicle = async () => {
            setLoading(true);
            try {
                const response = await vehicleApi.getById(id);
                setVehicle(response.data);
            } catch (error) {
                console.error('Error loading vehicle:', error);
            } finally {
                setLoading(false);
            }
        };
        loadVehicle();
        window.scrollTo({ top: 0 });
    }, [id]);

    if (loading) {
        return (
            <div className="page-content bg-white">
                <div className="container py-5 text-center">
                    <div className="spinner-border text-primary"></div>
                    <p>Loading vehicle details...</p>
                </div>
            </div>
        );
    }

    if (!vehicle) {
        return (
            <div className="page-content bg-white">
                <div className="container py-5 text-center">
                    <h3>Vehicle not found</h3>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content bg-white theme-rounded">
            <nav aria-label="breadcrumb" className="breadcrumb-row">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/car-listing">Car Collections</Link></li>
                        <li className="breadcrumb-item active">{vehicle.manufacturer_name} {vehicle.model}</li>
                    </ul>
                </div>
            </nav>
            
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 m-b40">
                            <div className="product-gallery on-show-slider lightgallery" id="lightgallery">
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
                                
                                <div className="feature-list m-b40 m-lg-b30">
                                    <div>
                                        <label>Year</label>
                                        <p className="value">{vehicle.year || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Mileage</label>
                                        <p className="value">{vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Fuel</label>
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
                                
                                <div className="m-b40 m-lg-b30">
                                    <span className="btn btn-primary price-btn m-b10 m-r10">
                                        €{vehicle.gross_price?.toLocaleString()}
                                    </span>
                                    <div className="mt-3">
                                        <span className="text-muted">Condition: </span>
                                        <span className={`badge ${vehicle.usage_category_id === 1 ? 'bg-success' : 'bg-info'}`}>
                                            {vehicle.condition || (vehicle.usage_category_id === 1 ? 'New' : 'Used')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarDetail_1;
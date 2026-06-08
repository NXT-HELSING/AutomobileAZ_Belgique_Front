import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { vehicleApi } from '../services/api';

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0
    });

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async (page = 1) => {
        try {
            setLoading(true);
            const response = await vehicleApi.getAll({ page, per_page: 9 });
            setVehicles(response.data.data);
            setPagination({
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                total: response.data.total
            });
            setError(null);
        } catch (err) {
            setError('Failed to load vehicles');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        loadVehicles(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading vehicles...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">{error}</div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="section-head text-center space-lg">
                <h2 className="title">Our Vehicles</h2>
                <p>Browse through our collection of quality vehicles</p>
            </div>
            
            <div className="row">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="col-xl-4 col-lg-6 col-md-6 m-b30">
                        <div className="car-list-box border box-sm shadow-none">
                            <div className="media-box">
                                {vehicle.images && vehicle.images.length > 0 ? (
                                    <img src={vehicle.images[0].url} alt={vehicle.model} />
                                ) : (
                                    <div className="bg-light text-center py-5">No Image</div>
                                )}
                            </div>
                            <div className="list-info">
                                <h4 className="title mb-0">
                                    <Link to={`/vehicle/${vehicle.id}`}>
                                        {vehicle.manufacturer_name} {vehicle.model}
                                    </Link>
                                </h4>
                                <div className="car-type">{vehicle.category_name || 'Vehicle'}</div>
                                <span className="badge m-b30">{vehicle.price_formatted || `${vehicle.gross_price?.toLocaleString()}`}</span>
                                <div className="feature-list">
                                    <div>
                                        <label>Year</label>
                                        <p className="value">{vehicle.year || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Fuel</label>
                                        <p className="value">{vehicle.fuel_type_name || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <label>Transmission</label>
                                        <p className="value">{vehicle.transmission_name || 'N/A'}</p>
                                    </div>
                                </div>
                                <Link to={`/vehicle/${vehicle.id}`} className="btn btn-primary btn-sm mt-3">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {vehicles.length === 0 && (
                <div className="text-center py-5">
                    <p>No vehicles found</p>
                </div>
            )}
            
            {pagination.last_page > 1 && (
                <nav aria-label="Page navigation" className="mt-4">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(pagination.current_page - 1)}>
                                Previous
                            </button>
                        </li>
                        {[...Array(pagination.last_page)].map((_, i) => (
                            <li key={i} className={`page-item ${pagination.current_page === i + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(pagination.current_page + 1)}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default VehiclesList;

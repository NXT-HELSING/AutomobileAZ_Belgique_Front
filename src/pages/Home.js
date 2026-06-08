import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { vehicleApi } from '../services/api';
import Homebanner from '../components/Homebanner';
import ContectUs from '../components/ContectUs';

const Home = () => {
    const [featuredVehicles, setFeaturedVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFeaturedVehicles();
    }, []);

    const loadFeaturedVehicles = async () => {
        try {
            const response = await vehicleApi.getAll({ per_page: 6, sort_by: 'created_at', sort_direction: 'desc' });
            setFeaturedVehicles(response.data.data);
        } catch (error) {
            console.error('Error loading vehicles:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-content bg-white">
            <div className="banner-one">
                <div className="row">
                    <Homebanner />
                </div>
            </div>

            {/* Featured Vehicles Section */}
            <section className="content-inner-2">
                <div className="container">
                    <div className="section-head text-center space-lg">
                        <h2 className="title">Featured Vehicles</h2>
                        <p>Check out our latest and most popular vehicles</p>
                    </div>
                    
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary"></div>
                        </div>
                    ) : (
                        <div className="row">
                            {featuredVehicles.map((vehicle) => (
                                <div key={vehicle.id} className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="car-list-box border box-sm shadow-none">
                                        <div className="media-box">
                                            {vehicle.images && vehicle.images[0] ? (
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
                                            <span className="badge m-b30">{vehicle.gross_price?.toLocaleString()}</span>
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
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <div className="text-center mt-4">
                        <Link to="/cars" className="btn btn-primary">View All Vehicles</Link>
                    </div>
                </div>
            </section>

            <section className="content-inner">
                <div className="container">
                    <ContectUs />
                </div>
            </section>
        </div>
    );
};

export default Home;

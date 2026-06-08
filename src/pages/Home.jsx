import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Homebanner from '../components/Homebanner';
import About from '../components/About';
import CarFeatures from '../components/CarFeatures';
import Bestcar from '../components/Bestcar';
import ContectUs from '../components/ContectUs';
import { vehicleApi } from '../services/api';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { IMAGE } from '../constent/theme';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [featuredVehicles, setFeaturedVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFeaturedVehicles = async () => {
            try {
                const response = await vehicleApi.getAll({ per_page: 6, sort_by: 'created_at', sort_direction: 'desc' });
                setFeaturedVehicles(response.data.data || []);
            } catch (error) {
                console.error('Error loading vehicles:', error);
            } finally {
                setLoading(false);
            }
        };
        loadFeaturedVehicles();
    }, []);

    return (
        <>
            <div className="page-content bg-white">
                <div className="banner-one">
                    <div className="row">
                        <Homebanner />
                    </div>
                </div>
                
                <section className="content-inner-2 overflow-hidden">
                    <div className="container">
                        <About />
                    </div>
                </section>
                
                <section className="content-inner-2">
                    <div className="container">
                        <CarFeatures />
                    </div>
                </section>
                
                {/* Top Deals Section - Dynamic from API */}
                <section className="content-inner-2">
                    <div className="container-fluid">
                        <div className="section-head space-lg text-center">
                            <h2 className="title">Top deals of the week</h2>
                            <p>Browse our latest vehicles fresh from the market. Click on any car to see full details.</p>
                        </div>
                        
                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : featuredVehicles.length > 0 ? (
                            <div className="row justify-content-center">
                                {featuredVehicles.map((vehicle) => (
                                    <div key={vehicle.id} className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                        <div className="car-list-box border box-sm shadow-none">
                                            <div className="media-box">
                                                {vehicle.images && vehicle.images[0] ? (
                                                    <Link to={`/car-details/${vehicle.id}`}>
                                                        <img src={vehicle.images[0].url} alt={`${vehicle.manufacturer_name} ${vehicle.model}`} />
                                                    </Link>
                                                ) : (
                                                    <Link to={`/car-details/${vehicle.id}`}>
                                                        <img src={IMAGE.productPic1} alt={vehicle.model} />
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="list-info">
                                                <h4 className="title mb-0">
                                                    <Link to={`/car-details/${vehicle.id}`}>
                                                        {vehicle.manufacturer_name} {vehicle.model}
                                                    </Link>
                                                </h4>
                                                <div className="car-type">{vehicle.category_name || 'Vehicle'}</div>
                                                <span className="badge m-b30">€{vehicle.gross_price?.toLocaleString()}</span>
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
                        ) : (
                            /* Fallback to static template cars when API is not available */
                            <div className="row justify-content-center">
                                {[IMAGE.productPic1, IMAGE.productPic2, IMAGE.productPic3, IMAGE.productPic4, IMAGE.productPic5, IMAGE.productGridPic1].map((img, index) => (
                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                        <div className="car-list-box border box-sm shadow-none">
                                            <div className="media-box">
                                                <img src={img} alt="" />
                                            </div>
                                            <div className="list-info">
                                                <h4 className="title mb-0"><Link to="/car-details">SMART GT AA-211</Link></h4>
                                                <div className="car-type">SPORT CAR</div>
                                                <span className="badge m-b30">$34,500</span>
                                                <div className="feature-list">
                                                    <div>
                                                        <label>Transmission</label>
                                                        <p className="value">Automatic</p>
                                                    </div>
                                                    <div>
                                                        <label>Fuel</label>
                                                        <p className="value">Electric</p>
                                                    </div>
                                                    <div>
                                                        <label>Passenger</label>
                                                        <p className="value">2 Person</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className="text-center mt-4">
                            <Link to="/car-listing" className="btn btn-primary">View All Vehicles</Link>
                        </div>
                    </div>
                </section>
                
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row features-box">
                            <Bestcar setOpen={setOpen} />
                        </div>
                    </div>
                </section>
                
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div>
            <ModalVideo channel="youtube" autoplay isOpen={open} videoId="PkkV1vLHUvQ" onClose={() => setOpen(false)} />
        </>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { vehicleApi } from '../services/api';

const TopDeal = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        try {
            const response = await vehicleApi.getAll({ per_page: 8 });
            setVehicles(response.data.data);
        } catch (error) {
            console.error('Error loading vehicles:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center py-5">Chargement des offres...</div>;
    }

    return (
        <Swiper
            className="swiper-container top-deal-slider"
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
            }}
        >
            {vehicles.map((vehicle) => (
                <SwiperSlide key={vehicle.id}>
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
                                <Link to={`/car-details/${vehicle.id}`}>
                                    {vehicle.manufacturer_name} {vehicle.model}
                                </Link>
                            </h4>
                            <div className="car-type">{vehicle.category_name || 'Vehicle'}</div>
                            <span className="badge m-b30">€{vehicle.gross_price?.toLocaleString()}</span>
                            <div className="feature-list">
                                <div>
                                    <label>Année</label>
                                    <p className="value">{vehicle.year || 'N/A'}</p>
                                </div>
                                <div>
                                    <label>Carburant</label>
                                    <p className="value">{vehicle.fuel_type_name || 'N/A'}</p>
                                </div>
                                <div>
                                    <label>Transmission</label>
                                    <p className="value">{vehicle.transmission_name || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopDeal;
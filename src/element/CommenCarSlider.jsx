import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { vehicleApi } from '../services/api';
import {
    formatVehiclePrice,
    getVehicleImage,
    getVehicleTitle,
    getVehicleYear,
} from '../utils/vehicle';

const CommenCarSlider = ({ title, excludeIds = [] }) => {
    const swiperRef = React.useRef(null);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVehicles = async () => {
            try {
                const params = { per_page: 8 };
                if (excludeIds.length) {
                    params.exclude_ids = excludeIds.join(',');
                }
                const response = await vehicleApi.getAll(params);
                setVehicles(response.data.data || []);
            } catch (error) {
                console.error('Error loading similar vehicles:', error);
            } finally {
                setLoading(false);
            }
        };

        loadVehicles();
    }, [excludeIds.join(',')]);

    if (loading) {
        return (
            <section className="content-inner-2">
                <div className="container text-center py-4">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            </section>
        );
    }

    if (!vehicles.length) {
        return null;
    }

    return (
        <section className="content-inner-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-head row">
                            <div className="col-sm-8">
                                <h3 className="title m-b20">{title}</h3>
                            </div>
                            <div className="col-sm-4 text-sm-end">
                                <div className="portfolio-pagination d-inline-block">
                                    <div className="btn-prev swiper-button-prev2 cursorPointer" onClick={() => swiperRef.current.swiper.slidePrev()}>
                                        <i className="las la-arrow-left"></i>
                                    </div>
                                    <div className="btn-next swiper-button-next2 cursorPointer" onClick={() => swiperRef.current.swiper.slideNext()}>
                                        <i className="las la-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="upcoming">
                                <Swiper
                                    className="swiper-container similar-slider lightgallery"
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    speed={1200}
                                    ref={swiperRef}
                                    breakpoints={{
                                        1200: { slidesPerView: 3 },
                                        775: { slidesPerView: 2 },
                                        240: { slidesPerView: 1 },
                                    }}
                                >
                                    {vehicles.map((vehicle) => (
                                        <SwiperSlide className="swiper-slide" key={vehicle.id}>
                                            <div className="car-list-box border shadow-none">
                                                <div className="media-box">
                                                    <img src={getVehicleImage(vehicle)} alt={getVehicleTitle(vehicle)} />
                                                </div>
                                                <div className="list-info">
                                                    <h4 className="title mb-0">
                                                        <Link to={`/car-details/${vehicle.id}`}>{getVehicleTitle(vehicle)}</Link>
                                                    </h4>
                                                    <div className="car-type">{vehicle.category_name || 'Véhicule'}</div>
                                                    <span className="badge m-b30">{formatVehiclePrice(vehicle)}</span>
                                                    <div className="feature-list">
                                                        <div>
                                                            <label>Transmission</label>
                                                            <p className="value">{vehicle.transmission_name || 'N/A'}</p>
                                                        </div>
                                                        <div>
                                                            <label>Carburant</label>
                                                            <p className="value">{vehicle.fuel_type_name || 'N/A'}</p>
                                                        </div>
                                                        <div>
                                                            <label>Année</label>
                                                            <p className="value">{getVehicleYear(vehicle)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommenCarSlider;

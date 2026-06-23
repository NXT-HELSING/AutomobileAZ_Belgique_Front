import React, { useState, useEffect, useCallback } from 'react';
import { IMAGE } from '../constent/theme';
import ContectUs from '../components/ContectUs';
import CarlistingBanner from '../element/CarlistingBanner';
import CarListingFilter from '../element/CarListingFilter';
import { Link, useSearchParams } from 'react-router-dom';
import { vehicleApi } from '../services/api';

const CarListing1 = () => {
    const [searchParams] = useSearchParams();
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({ current_page: 1, last_page: 1, total: 0 });

    const buildApiParams = useCallback((page = 1) => {
        const params = { page, per_page: 9 };
        const manufacturer = searchParams.get('manufacturer');
        const model = searchParams.get('model');
        const category = searchParams.get('category');
        const fuel_type = searchParams.get('fuel_type');
        const min_price = searchParams.get('min_price');
        const max_price = searchParams.get('max_price');
        if (manufacturer) params.manufacturer = manufacturer;
        if (model) params.model = model;
        if (category) params.category = category;
        if (fuel_type) params.fuel_type = fuel_type;
        if (min_price) params.min_price = min_price;
        if (max_price) params.max_price = max_price;
        return params;
    }, [searchParams]);

    const loadVehicles = useCallback(async (page = 1) => {
        setLoading(true);
        try {
            const response = await vehicleApi.getAll(buildApiParams(page));
            setVehicles(response.data.data);
            setPagination({
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                total: response.data.total,
            });
        } catch (error) {
            console.error('Error loading vehicles:', error);
        } finally {
            setLoading(false);
        }
    }, [buildApiParams]);

    // Reload whenever URL search params change
    useEffect(() => {
        loadVehicles(1);
    }, [searchParams, loadVehicles]);

    const handlePageChange = (page) => {
        loadVehicles(page);
        window.scrollTo({ top: 0 });
    };

    return (
        <div className="page-content bg-white">
            <CarlistingBanner img={IMAGE.bannerImg1} title={'Notre collection de véhicules'} />

            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <CarListingFilter title={'FILTRES'} text={'Rechercher un véhicule'} />

                        <div className="col-xl-8 col-lg-8">
                            <div className="catagory-result-row">
                                <h5 className="serch-result">
                                    Affichage de <strong>{pagination.total} véhicule{pagination.total > 1 ? 's' : ''}</strong>
                                </h5>
                            </div>

                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary"></div>
                                </div>
                            ) : vehicles.length === 0 ? (
                                <div className="text-center py-5">
                                    <i className="las la-car" style={{ fontSize: '4rem', color: '#ccc' }}></i>
                                    <h5 className="mt-3 text-muted">Aucun véhicule trouvé pour ces critères.</h5>
                                    <p className="text-muted">Essayez de modifier vos filtres.</p>
                                </div>
                            ) : (
                                <div className="row">
                                    {vehicles.map((vehicle) => (
                                        <div key={vehicle.id} className="col-xl-6 col-lg-12 col-md-6 m-b30">
                                            <div className="car-list-box overlay">
                                                <div className="media-box">
                                                    {vehicle.images && vehicle.images[0] ? (
                                                        <img src={vehicle.images[0].url} alt={vehicle.model} />
                                                    ) : (
                                                        <img src={IMAGE.productPic1} alt={vehicle.model} />
                                                    )}
                                                </div>
                                                <div className="list-info">
                                                    <h4 className="title">
                                                        <Link to={`/car-details/${vehicle.id}`} className="text-white">
                                                            {vehicle.manufacturer_name} {vehicle.model}
                                                        </Link>
                                                    </h4>
                                                    <div className="car-type text-white">{vehicle.category_name || 'Vehicle'}</div>
                                                    <span className="badge m-b30">€{vehicle.gross_price?.toLocaleString()}</span>
                                                    <div className="feature-list">
                                                        <div>
                                                            <label className="text-white">Transmission</label>
                                                            <p className="value text-white">{vehicle.transmission_name || 'N/A'}</p>
                                                        </div>
                                                        <div>
                                                            <label className="text-white">Carburant</label>
                                                            <p className="value text-white">{vehicle.fuel_type_name || 'N/A'}</p>
                                                        </div>
                                                        <div>
                                                            <label className="text-white">Année</label>
                                                            <p className="value text-white">
                                                                {vehicle.first_registration_date
                                                                    ? new Date(vehicle.first_registration_date).getFullYear()
                                                                    : (vehicle.manufacturing_date
                                                                        ? new Date(vehicle.manufacturing_date).getFullYear()
                                                                        : 'N/A')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {pagination.last_page > 1 && (
                                <nav aria-label="Page navigation" className="mt-4">
                                    <ul className="pagination justify-content-center">
                                        <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => handlePageChange(pagination.current_page - 1)}>
                                                Précédent
                                            </button>
                                        </li>
                                        {[...Array(Math.min(pagination.last_page, 10))].map((_, i) => (
                                            <li key={i} className={`page-item ${pagination.current_page === i + 1 ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => handlePageChange(pagination.current_page + 1)}>
                                                Suivant
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            )}
                        </div>
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

export default CarListing1;

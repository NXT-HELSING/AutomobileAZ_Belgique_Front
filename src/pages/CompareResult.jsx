import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import CarlistingBanner from '../element/CarlistingBanner';
import CommenCarSlider from '../element/CommenCarSlider';
import ContectUs from '../components/ContectUs';
import { IMAGE } from '../constent/theme';
import { vehicleApi } from '../services/api';
import {
    formatVehiclePrice,
    getVehicleImage,
    getVehicleTitle,
    getVehicleVariantLabel,
    getVehicleYear,
} from '../utils/vehicle';

const formatValue = (value) => {
    if (value === null || value === undefined || value === '') return '—';
    return value;
};

const CompareTable = ({ title, rows, vehicles }) => {
    const colWidth = `${100 / (vehicles.length + 1)}%`;

    return (
        <div className="m-b30">
            <ul className="table-dl table-col4 clearfix">
                <li className="table-head">
                    <div className="leftview compare-list-1" style={{ width: colWidth }}>{title}</div>
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="rightview" style={{ width: colWidth }}>
                            {getVehicleVariantLabel(vehicle)}
                        </div>
                    ))}
                </li>
                {rows.map((row) => (
                    <li key={row.label}>
                        <div className="leftview compare-list-1" style={{ width: colWidth }}>{row.label}</div>
                        {vehicles.map((vehicle) => (
                            <div key={`${vehicle.id}-${row.label}`} className="rightview" style={{ width: colWidth }}>
                                {row.render ? row.render(vehicle) : formatValue(row.getValue(vehicle))}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CompareResult = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadComparison = async () => {
            const ids = searchParams.get('ids');
            if (!ids) {
                setError('Aucun véhicule sélectionné pour la comparaison.');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError('');
            try {
                const response = await vehicleApi.compare(ids);
                setVehicles(response.data.vehicles || []);
            } catch (err) {
                setError(err.response?.data?.message || 'Impossible de charger la comparaison.');
            } finally {
                setLoading(false);
            }
        };

        loadComparison();
    }, [searchParams]);

    const overviewRows = [
        { label: 'Prix', getValue: (v) => formatVehiclePrice(v) },
        { label: 'Marque', getValue: (v) => v.manufacturer_name },
        { label: 'Modèle', getValue: (v) => v.model },
        { label: 'Finition', getValue: (v) => getVehicleVariantLabel(v) },
        { label: 'Année', getValue: (v) => getVehicleYear(v) },
        { label: 'Kilométrage', getValue: (v) => v.mileage ? `${v.mileage.toLocaleString('fr-BE')} km` : '—' },
        { label: 'Carburant', getValue: (v) => v.fuel_type_name },
        { label: 'Transmission', getValue: (v) => v.transmission_name },
        { label: 'Puissance', getValue: (v) => v.engine_power_hp ? `${v.engine_power_hp} ch` : '—' },
        { label: 'Cylindrée', getValue: (v) => v.cylinder_capacity ? `${v.cylinder_capacity} cc` : '—' },
        { label: 'Couleur', getValue: (v) => v.exterior_color },
        { label: 'Catégorie', getValue: (v) => v.category_name },
        { label: 'Carrosserie', getValue: (v) => v.body_style_name },
    ];

    const optionNames = [...new Set(
        vehicles.flatMap((vehicle) => (vehicle.options || []).map((option) => option.option_name))
    )].sort();

    const optionRows = optionNames.map((name) => ({
        label: name,
        render: (vehicle) => {
            const hasOption = (vehicle.options || []).some((option) => option.option_name === name);
            return hasOption
                ? <i className="fa fa-check font-18 text-green"></i>
                : <i className="fas fa-times font-18 text-red"></i>;
        },
    }));

    const compareTitle = vehicles.length >= 2
        ? vehicles.map((v) => getVehicleTitle(v)).join(' vs ')
        : 'Résultat de comparaison';

    return (
        <div className="page-content bg-white">
            <CarlistingBanner img={IMAGE.bnr2} title={'Résultat de comparaison'} />

            <section className="content-inner-2">
                <div className="container">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status"></div>
                            <p className="mt-3">Chargement de la comparaison...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-5">
                            <p className="text-danger mb-4">{error}</p>
                            <Link to="/compare-car" className="btn btn-primary">Retour à la comparaison</Link>
                        </div>
                    ) : (
                        <>
                            <div className="row m-b30 lightgallery">
                                <div className="col-12 m-b30">
                                    <h3>{compareTitle}</h3>
                                    <p>Comparez les caractéristiques des véhicules sélectionnés depuis notre stock FTP.</p>
                                </div>

                                {vehicles.map((vehicle) => (
                                    <div key={vehicle.id} className={`col-xl-${12 / vehicles.length} col-lg-6 m-b30`}>
                                        <div className="car-list-box box-sm borderNone">
                                            <div className="media-box">
                                                <img src={getVehicleImage(vehicle)} alt={getVehicleTitle(vehicle)} />
                                            </div>
                                            <div className="list-info" style={{ boxShadow: '1px 2px 6px' }}>
                                                <h5 className="title mb-0">
                                                    <Link to={`/car-details/${vehicle.id}`}>{getVehicleTitle(vehicle)}</Link>
                                                </h5>
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
                                    </div>
                                ))}
                            </div>

                            <CompareTable title="Aperçu" rows={overviewRows} vehicles={vehicles} />

                            {optionRows.length > 0 && (
                                <CompareTable title="Équipements" rows={optionRows} vehicles={vehicles} />
                            )}

                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary me-2"
                                    onClick={() => navigate('/compare-car')}
                                >
                                    Modifier la sélection
                                </button>
                                <Link to="/cars" className="btn btn-primary">Voir tous les véhicules</Link>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {!loading && !error && (
                <CommenCarSlider
                    title="Comparaisons similaires"
                    excludeIds={vehicles.map((v) => v.id)}
                />
            )}

            <section className="content-inner">
                <div className="container">
                    <ContectUs />
                </div>
            </section>
        </div>
    );
};

export default CompareResult;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarlistingBanner from '../element/CarlistingBanner';
import CompareSlot from '../element/CompareSlot';
import { IMAGE } from '../constent/theme';
import CommenCarSlider from '../element/CommenCarSlider';
import ContectUs from '../components/ContectUs';
import { vehicleApi } from '../services/api';

const emptySlot = () => ({ manufacturer: '', model: '', vehicleId: '' });

const ComapeCar = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState({ manufacturers: [] });
    const [slots, setSlots] = useState([emptySlot(), emptySlot(), emptySlot(), emptySlot()]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadOptions = async () => {
            try {
                const response = await vehicleApi.getCompareOptions();
                setOptions(response.data);
            } catch (err) {
                console.error(err);
                setError('Impossible de charger les véhicules. Vérifiez que le backend et l\'import FTP sont actifs.');
            } finally {
                setLoading(false);
            }
        };

        loadOptions();
    }, []);

    const updateSlot = (index, nextSlot) => {
        setSlots((prev) => prev.map((slot, i) => (i === index ? nextSlot : slot)));
    };

    const handleCompare = () => {
        const ids = slots.map((slot) => slot.vehicleId).filter(Boolean);
        if (ids.length < 2) {
            setError('Sélectionnez au moins deux véhicules complets (marque, modèle et finition).');
            return;
        }

        const uniqueIds = [...new Set(ids)];
        if (uniqueIds.length !== ids.length) {
            setError('Chaque emplacement doit contenir un véhicule différent.');
            return;
        }

        setError('');
        navigate(`/compare-result?ids=${uniqueIds.join(',')}`);
    };

    return (
        <div className="page-content bg-white">
            <CarlistingBanner img={IMAGE.bnr2} title={'Comparer des véhicules'} />
            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="m-b30">
                                <h3 className="m-t0">Comparez pour choisir le véhicule idéal !</h3>
                                <ul className="used-car-dl-info">
                                    <li>Chez AutomobileAZ, comparez les véhicules importés depuis notre flux FTP et trouvez celui qui correspond à vos besoins et à votre budget.</li>
                                </ul>
                            </div>
                        </div>

                        {loading ? (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status"></div>
                                <p className="mt-3">Chargement du stock...</p>
                            </div>
                        ) : options.manufacturers.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <p>Aucun véhicule disponible pour le moment. Lancez l&apos;import FTP avec <code>php artisan vehicles:import --ftp</code>.</p>
                            </div>
                        ) : (
                            <>
                                {slots.map((slot, index) => (
                                    <div key={index} className="col-xl-3 col-md-6 m-b30">
                                        <CompareSlot
                                            slot={slot}
                                            options={options}
                                            onChange={(nextSlot) => updateSlot(index, nextSlot)}
                                        />
                                    </div>
                                ))}
                                {error && (
                                    <div className="col-12">
                                        <div className="alert alert-danger">{error}</div>
                                    </div>
                                )}
                                <div className="col-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={handleCompare}>
                                        Comparer maintenant
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <CommenCarSlider title="Comparaisons similaires" />

            <section className="content-inner">
                <div className="container">
                    <ContectUs />
                </div>
            </section>
        </div>
    );
};

export default ComapeCar;

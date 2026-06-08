import React, { useState, useEffect } from 'react';
import { vehicleApi } from '../services/api';

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        try {
            setLoading(true);
            const response = await vehicleApi.getAll();
            setVehicles(response.data.data);
            setError(null);
        } catch (err) {
            setError('Failed to load vehicles');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center py-5">Loading vehicles...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Our Vehicles</h1>
            <div className="row">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {vehicle.manufacturer_name} {vehicle.model}
                                </h5>
                                <p className="card-text">
                                    <strong>Price:</strong> {vehicle.gross_price?.toLocaleString()}
                                </p>
                                <p className="card-text">
                                    <strong>Condition:</strong> {vehicle.is_online ? 'Available' : 'Sold'}
                                </p>
                                <a href={`/vehicle/${vehicle.id}`} className="btn btn-primary">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {vehicles.length === 0 && (
                <div className="text-center">No vehicles found</div>
            )}
        </div>
    );
};

export default VehiclesList;

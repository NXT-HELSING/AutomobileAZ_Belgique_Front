import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehicleApi } from '../services/api';

const VehicleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadVehicle();
    }, [id]);

    const loadVehicle = async () => {
        try {
            setLoading(true);
            const response = await vehicleApi.getById(id);
            setVehicle(response.data);
            setError(null);
        } catch (err) {
            if (err.response?.status === 404) {
                setError('Vehicle not found');
            } else {
                setError('Failed to load vehicle details');
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center py-5">Loading vehicle details...</div>;
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">{error}</div>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
                 Back
            </button>
            
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">
                        {vehicle.manufacturer_name} {vehicle.model}
                    </h1>
                    
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Vehicle Information</h5>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Manufacturer</th>
                                        <td>{vehicle.manufacturer_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Model</th>
                                        <td>{vehicle.model}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td className="h4 text-primary">
                                            {vehicle.gross_price?.toLocaleString()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>
                                            {vehicle.is_online ? 
                                                <span className="badge bg-success">Available</span> : 
                                                <span className="badge bg-secondary">Sold</span>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetail;

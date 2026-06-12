import { IMAGE } from '../constent/theme';

export const getVehicleYear = (vehicle) => {
    const date = vehicle?.first_registration_date || vehicle?.manufacturing_date;
    if (!date) return 'N/A';
    try {
        return new Date(date).getFullYear();
    } catch {
        return 'N/A';
    }
};

export const getVehicleImage = (vehicle, fallback = IMAGE.productPic1) => {
    if (vehicle?.images?.[0]?.url) {
        return vehicle.images[0].url;
    }
    return fallback;
};

export const formatVehiclePrice = (vehicle) => {
    if (!vehicle?.gross_price) return 'Prix sur demande';
    return `€${vehicle.gross_price.toLocaleString('fr-BE')}`;
};

export const getVehicleTitle = (vehicle) => {
    if (!vehicle) return '';
    return [vehicle.manufacturer_name, vehicle.model, vehicle.model_text]
        .filter(Boolean)
        .join(' ');
};

export const getVehicleVariantLabel = (vehicle) => {
    if (!vehicle) return '';
    return [vehicle.model_text, vehicle.submodel].filter(Boolean).join(' — ') || vehicle.model;
};

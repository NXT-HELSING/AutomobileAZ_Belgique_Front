import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const vehicleApi = {
    // Get all vehicles with pagination
    getAll: (page = 1) => api.get(`/vehicles?page=${page}`),
    
    // Get single vehicle by ID
    getById: (id) => api.get(`/vehicles/${id}`),
};

export default api;

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api/v1';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const vehicleApi = {
    // Get all vehicles with pagination and filters
    getAll: (params = {}) => api.get('/vehicles', { params }),
    
    // Get single vehicle by ID
    getById: (id) => api.get(`/vehicles/${id}`),
    
    // Get vehicle by slug
    getBySlug: (slug) => api.get(`/vehicles/slug/${slug}`),
    
    // Get filter options (manufacturers, fuel types, etc.)
    getFilterOptions: () => api.get('/vehicles/filter-options'),
    
    // Search vehicles
    search: (query) => api.post('/vehicles/search', { query }),
    
    // Autocomplete
    autocomplete: (query) => api.get('/vehicles/search/autocomplete', { params: { query } }),
};

export const manufacturerApi = {
    getAll: () => api.get('/manufacturers'),
    getVehicles: (id, params = {}) => api.get(`/manufacturers/${id}/vehicles`, { params }),
};

export default api;

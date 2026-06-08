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
    getAll: (params = {}) => api.get('/vehicles', { params }),
    getById: (id) => api.get(`/vehicles/${id}`),
    getBySlug: (slug) => api.get(`/vehicles/slug/${slug}`),
    getFilterOptions: () => api.get('/vehicles/filter-options'),
    search: (query) => api.post('/vehicles/search', { query }),
    autocomplete: (query) => api.get('/vehicles/search/autocomplete', { params: { query } }),
};

export default api;

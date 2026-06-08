import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehiclesList from './pages/VehiclesList';
import VehicleDetail from './pages/VehicleDetail';

// Import your template CSS (adjust paths as needed)
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<VehiclesList />} />
                    <Route path="/vehicle/:id" element={<VehicleDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

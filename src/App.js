import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import VehiclesList from './pages/VehiclesList';
import VehicleDetail from './pages/VehicleDetail';
import About from './pages/About';
import Contect from './pages/Contect';
import Error404 from './pages/Error404';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';
import './assets/css/style.css';
import './assets/css/skin/skin-1.css';

function App() {
    useEffect(() => {
        import('aos').then((AOS) => {
            AOS.init({
                duration: 1000,
                once: true,
            });
        });
    }, []);

    return (
        <HelmetProvider>
            <Router>
                <div className="page-wraper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cars" element={<VehiclesList />} />
                        <Route path="/vehicle/:id" element={<VehicleDetail />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contect />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;

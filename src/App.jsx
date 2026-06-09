import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// css imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/switcher/switcher.css';
import 'swiper/css/effect-fade';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './assets/css/selectoptin.css';
import './assets/css/style.css';
import './assets/css/skin/skin-1.css';

// import components >>
import Header from './components/Header';
import Footer from './components/Footer';

// import pages >>>
import Home from './pages/Home';
import CarListing1 from './pages/CarListing1';
import CarDetail1 from './pages/CarDetail_1';
import ComapeCar from './pages/ComapeCar';
import About from './pages/About';
import Contect from './pages/Contect';
import Error404 from './pages/Error404';
import ScrollTop from './constent/ScrollTop';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

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
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            
                            {/* Car Listing routes */}
                            <Route path="/cars" element={<CarListing1 />} />
                            <Route path="/car-listing" element={<CarListing1 />} />
                            
                            {/* Car Details routes */}
                            <Route path="/vehicle/:id" element={<CarDetail1 />} />
                            <Route path="/car-details" element={<CarDetail1 />} />
                            <Route path="/car-details/:id" element={<CarDetail1 />} />
                            
                            {/* Compare route */}
                            <Route path="/compare-car" element={<ComapeCar />} />
                            
                            {/* Info routes */}
                            <Route path="/about" element={<About />} />
                            <Route path="/about-us" element={<About />} />
                            <Route path="/contact" element={<Contect />} />
                            <Route path="/contact-us" element={<Contect />} />
                            
                            {/* Error Route */}
                            <Route path="/error-404" element={<Error404 />} />
                            <Route path="*" element={<Error404 />} />
                        </Route>
                    </Routes>
                    <ScrollTop />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;

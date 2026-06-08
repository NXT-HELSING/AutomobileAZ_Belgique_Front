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
import Header2 from './components/Header2';
import Footer from './components/Footer';

// import pages >>>
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import CarListing1 from './pages/CarListing1';
import CarListing2 from './pages/CarListing2';
import CarListing3 from './pages/CarListing3';
import NewCarSearch from './pages/NewCarSearch';
import SearchCarResult from './pages/SearchCarResult';
import SearchCarColumn from './pages/SearchCarColumn';
import LetestCar from './pages/LetestCar';
import PopulerCar from './pages/PopulerCar';
import UpcomingCar from './pages/UpcomingCar';
import CarDealers from './pages/CarDealers';
import ServiceCenter from './pages/ServiceCenter';
import OnRoadPrice from './pages/OnRoadPrice';
import MyCity from './pages/MyCity';
import UsedSearchCar from './pages/UsedSearchCar';
import UseCarDeatail from './pages/UseCarDeatail';
import UsedCarSell from './pages/UsedCarSell';
import UsedCarValue from './pages/UsedCarValue';
import ComapeCar from './pages/ComapeCar';
import CompareResult from './pages/CompareResult';
import CarReview from './pages/CarReview';
import CarReviewDetail from './pages/CarReviewDetail';
import CarDetail_1 from './pages/CarDetail_1';
import CarDetail_2 from './pages/CarDetail_2';
import CarSpacification from './pages/CarSpacification';
import CarPrice from './pages/CarPrice';
import CarCompare from './pages/CarCompare';
import CarPicture from './pages/CarPicture';
import About from './pages/About';
import Service from './pages/Service';
import Location from './pages/Location';
import Contect from './pages/Contect';
import BlogGrid from './pages/BlogGrid';
import BlogListSidebar from './pages/BlogListSidebar';
import BlogDetail from './pages/BlogDetail';
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

const Layout1 = () => {
  return (
    <>
      <Header2 />
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
                            <Route path="/home-2" element={<Home2 />} />
                            <Route path="/home-3" element={<Home3 />} />
                            
                            {/* Car Listing routes */}
                            <Route path="/cars" element={<CarListing1 />} />
                            <Route path="/car-listing" element={<CarListing1 />} />
                            <Route path="/car-listing-2" element={<CarListing2 />} />
                            <Route path="/car-listing-3" element={<CarListing3 />} />
                            
                            {/* Car Details routes */}
                            <Route path="/vehicle/:id" element={<CarDetail_1 />} />
                            <Route path="/car-details" element={<CarDetail_1 />} />
                            <Route path="/car-details/:id" element={<CarDetail_1 />} />
                            <Route path="/car-details-2" element={<CarDetail_2 />} />
                            
                            {/* Other Template Routes */}
                            <Route path="/new-car-search" element={<NewCarSearch />} />
                            <Route path="/new-car-search-result-list" element={<SearchCarResult />} />
                            <Route path="/new-car-search-result-column" element={<SearchCarColumn />} />
                            <Route path="/latest-cars" element={<LetestCar />} />
                            <Route path="/popular-cars" element={<PopulerCar />} />
                            <Route path="/upcoming-cars" element={<UpcomingCar />} />
                            <Route path="/car-dealers" element={<CarDealers />} />
                            <Route path="/used-car-search-result" element={<MyCity />} />
                            <Route path="/car-service-center" element={<ServiceCenter />} />
                            <Route path="/on-road-price" element={<OnRoadPrice />} />
                            <Route path="/used-car-search" element={<UsedSearchCar />} />
                            <Route path="/used-car-details" element={<UseCarDeatail />} />
                            <Route path="/used-car-sell" element={<UsedCarSell />} />
                            <Route path="/used-car-valuation" element={<UsedCarValue />} />
                            <Route path="/compare-car" element={<ComapeCar />} />
                            <Route path="/compare-result" element={<CompareResult />} />
                            <Route path="/write-review" element={<CarReview />} />
                            <Route path="/car-review" element={<CarReviewDetail />} />
                            
                            <Route path="/car-detail-specifications" element={<CarSpacification />} />
                            <Route path="/car-detail-price" element={<CarPrice />} />
                            <Route path="/car-detail-compare" element={<CarCompare />} />
                            <Route path="/car-detail-pictures" element={<CarPicture />} />
                            
                            <Route path="/about" element={<About />} />
                            <Route path="/about-us" element={<About />} />
                            <Route path="/services" element={<Service />} />
                            <Route path="/location" element={<Location />} />
                            
                            <Route path="/contact" element={<Contect />} />
                            <Route path="/contact-us" element={<Contect />} />
                            
                            <Route path="/blog-grid" element={<BlogGrid />} />
                            <Route path="/blog-list-sidebar" element={<BlogListSidebar />} />
                            <Route path="/blog-details" element={<BlogDetail />} />
                            <Route path="/error-404" element={<Error404 />} />
                            <Route path="*" element={<Error404 />} />
                        </Route>
                        <Route element={<Layout1 />}>
                            <Route path="/home-4" element={<Home4 />} />
                        </Route>
                    </Routes>
                    <ScrollTop />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;

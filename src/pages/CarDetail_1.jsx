import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { vehicleApi } from '../services/api';
import CommenCarSlider from '../element/CommenCarSlider';
import ContectUs from '../components/ContectUs';

const SocialMediaLinks = () => {
    return (
        <ul className="d-flex gap-3 list-unstyled mb-0">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f text-primary" style={{ fontSize: '20px' }}></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-info" style={{ fontSize: '20px' }}></i></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in text-primary" style={{ fontSize: '20px' }}></i></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-danger" style={{ fontSize: '20px' }}></i></a></li>
        </ul>
    );
};

const VehicleFeatureGrid = ({ vehicle }) => {
    const getYear = (dateStr) => {
        if (!dateStr) return 'N/A';
        try {
            return new Date(dateStr).getFullYear();
        } catch {
            return 'N/A';
        }
    };

    const features = [
        {
            iconClass: 'fa fa-calendar-alt text-primary mb-2',
            heading: getYear(vehicle.first_registration_date || vehicle.manufacturing_date),
            text: 'Reg. Year'
        },
        {
            iconClass: 'fa fa-tachometer-alt text-primary mb-2',
            heading: vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'N/A',
            text: 'Mileage'
        },
        {
            iconClass: 'fa fa-gas-pump text-primary mb-2',
            heading: vehicle.fuel_type_name || 'N/A',
            text: 'Fuel'
        },
        {
            iconClass: 'fa fa-cog text-primary mb-2',
            heading: vehicle.transmission_name || 'N/A',
            text: 'Transmission'
        },
        {
            iconClass: 'fa fa-car text-primary mb-2',
            heading: vehicle.body_style_name || 'N/A',
            text: 'Body Style'
        },
        {
            iconClass: 'fa fa-paint-brush text-primary mb-2',
            heading: vehicle.exterior_color || 'N/A',
            text: 'Color'
        }
    ];

    return (
        <div className="used-car-features clearfix m-b30">
            {features.map((item, idx) => (
                <div className="car-features p-3" key={idx} style={{ float: 'left', width: '33.33%', textAlign: 'center', border: '1px solid #eee', marginBottom: '-1px', marginRight: '-1px' }}>
                    <i className={item.iconClass} style={{ fontSize: '24px', display: 'block' }}></i>
                    <h6 className="mt-2 mb-1" style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.heading}</h6>
                    <span className="text-muted" style={{ fontSize: '12px' }}>{item.text}</span>
                </div>
            ))}
        </div>
    );
};

const CarDetail_1 = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [addActive, setActive] = useState('nav_one');

    useEffect(() => {
        const loadVehicle = async () => {
            setLoading(true);
            try {
                const response = await vehicleApi.getById(id);
                setVehicle(response.data);
            } catch (error) {
                console.error('Error loading vehicle:', error);
            } finally {
                setLoading(false);
            }
        };
        loadVehicle();
        window.scrollTo({ top: 0 });
    }, [id]);

    const navLinks = (e) => {
        e.preventDefault();
        setActive(e.currentTarget.id);
    };

    if (loading) {
        return (
            <div className="page-content bg-white">
                <div className="container py-5 text-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-3">Loading vehicle details...</p>
                </div>
            </div>
        );
    }

    if (!vehicle) {
        return (
            <div className="page-content bg-white">
                <div className="container py-5 text-center">
                    <h3>Vehicle not found</h3>
                    <Link to="/cars" className="btn btn-primary mt-3">Back to Cars</Link>
                </div>
            </div>
        );
    }

    const slides = vehicle.images && vehicle.images.length > 0
        ? vehicle.images.map(img => ({ img: img.url, thumb: img.url }))
        : [
            { img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop', thumb: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop' }
        ];

    return (
        <div className="page-content bg-white">
            <nav aria-label="breadcrumb" className="breadcrumb-row">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/cars">Car Collections</Link></li>
                        <li className="breadcrumb-item active">{vehicle.manufacturer_name} {vehicle.model}</li>
                    </ul>
                </div>
            </nav>

            <section className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-6 m-b0 m-md-b50">
                            <div className="product-gallery on-show-slider lightgallery m-b40" id="lightgallery">
                                <Swiper 
                                    className="swiper-container sync1"
                                    spaceBetween={10}
                                    speed={1200}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                >
                                    {slides.map((slide, index) => (
                                        <SwiperSlide className="swiper-slide" key={index}>
                                            <div className="dlab-thum-bx" style={{ overflow: 'hidden', borderRadius: '8px' }}>
                                                <img src={slide.img} alt={vehicle.model} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <Swiper 
                                    className="swiper-container thumb-slider sync2"
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={15}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    style={{ marginTop: '15px' }}
                                    breakpoints={{
                                        1200: { slidesPerView: 4 },
                                        780: { slidesPerView: 4 },
                                        300: { slidesPerView: 3 },
                                    }}
                                >
                                    {slides.map((item, ind) => (
                                        <SwiperSlide id="thumbsSlides" className="swiper-slide slidethumbs" key={ind}>
                                            <div className="dlab-media" style={{ height: '80px', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}>
                                                <img className="cursorPointer" src={item.thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="m-b50">
                                <div className="dlab-post-title">
                                    <h3 className="post-title">
                                        <Link to="#">{vehicle.manufacturer_name} {vehicle.model}</Link>
                                    </h3>
                                    <h6 className="sub-title">{vehicle.submodel || 'Vehicle'}</h6>
                                    <p className="m-b10">{vehicle.description || 'No additional description available.'}</p>
                                    <div className="dlab-divider bg-gray tb15">
                                        <i className="icon-dot c-square"></i>
                                    </div>
                                </div>
                                <div className="social-list d-flex align-items-center gap-3">
                                    <span>Share:</span>
                                    <SocialMediaLinks />
                                </div>
                            </div>

                            <div className="product-description">
                                <ul className="nav nav-tabs style-1 m-b20">
                                    <li><Link to="#" id='nav_one' onClick={navLinks} className={`nav-link ${addActive === 'nav_one' ? 'active' : ''}`}>Specifications</Link></li>
                                    <li><Link to="#" id='nav_two' onClick={navLinks} className={`nav-link ${addActive === 'nav_two' ? 'active' : ''}`}>Vehicle Details</Link></li>
                                    <li><Link to="#" id='nav_three' onClick={navLinks} className={`nav-link ${addActive === 'nav_three' ? 'active' : ''}`}>Options & Features</Link></li>
                                    <li><Link to="#" id='nav_four' onClick={navLinks} className={`nav-link ${addActive === 'nav_four' ? 'active' : ''}`}>Description</Link></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="specifications" className={`tab-pane ${addActive === 'nav_one' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a15">
                                            <ul className="table-dl clearfix mb-0">
                                                <li>
                                                    <div className="leftview">Mileage</div>
                                                    <div className="rightview">{vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Fuel Type</div>
                                                    <div className="rightview">{vehicle.fuel_type_name || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Transmission</div>
                                                    <div className="rightview">{vehicle.transmission_name || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Engine Capacity</div>
                                                    <div className="rightview">{vehicle.cylinder_capacity ? `${vehicle.cylinder_capacity} cc` : 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Power</div>
                                                    <div className="rightview">{vehicle.engine_power_hp ? `${vehicle.engine_power_hp} HP` : 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Body Style</div>
                                                    <div className="rightview">{vehicle.body_style_name || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Exterior Color</div>
                                                    <div className="rightview">{vehicle.exterior_color || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Paint Type</div>
                                                    <div className="rightview">{vehicle.paint_type || 'N/A'}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="presentation" className={`tab-pane ${addActive === 'nav_two' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a15">
                                            <ul className="table-dl clearfix mb-0">
                                                <li>
                                                    <div className="leftview">VIN (Vehicle ID)</div>
                                                    <div className="rightview">{vehicle.vin || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Reference Cipher</div>
                                                    <div className="rightview">{vehicle.cipher}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Category</div>
                                                    <div className="rightview">{vehicle.category_name || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">First Registration</div>
                                                    <div className="rightview">{vehicle.first_registration_date ? new Date(vehicle.first_registration_date).toLocaleDateString() : 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Manufacturing Date</div>
                                                    <div className="rightview">{vehicle.manufacturing_date ? new Date(vehicle.manufacturing_date).toLocaleDateString() : 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Condition</div>
                                                    <div className="rightview">{vehicle.usage_category_name || 'N/A'}</div>
                                                </li>
                                                <li>
                                                    <div className="leftview">Accident History</div>
                                                    <div className="rightview">{vehicle.accident_flag === 'Y' ? 'Accidented' : 'Accident-free'}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="features" className={`tab-pane ${addActive === 'nav_three' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a15">
                                            {vehicle.options && vehicle.options.length > 0 ? (
                                                <ul className="row list-unstyled mb-0">
                                                    {vehicle.options.map((opt, index) => (
                                                        <li key={index} className="col-md-6 mb-3 d-flex align-items-center">
                                                            <i className="fa fa-check text-success me-2" style={{ fontSize: '16px' }}></i>
                                                            <span>{opt.option_name} {opt.value && opt.value !== '1' && `(${opt.value})`}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="mb-0 text-muted">No specific options list available. Standard manufacturer options apply.</p>
                                            )}
                                        </div>
                                    </div>
                                    <div id="safety" className={`tab-pane ${addActive === 'nav_four' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a15">
                                            <p className="mb-0" style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                                                {vehicle.description || 'No additional description comments available for this vehicle.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="sticky-top nav-tabs-top">
                                <div className="car-dl-info icon-bx-wraper style-1 m-b50">
                                    <div className="price m-b30">
                                        <h3 className="mb-1">€{vehicle.gross_price?.toLocaleString()}</h3>
                                        <span className="text-muted d-block">
                                            Net: €{vehicle.net_price?.toLocaleString()} (Excl. {vehicle.tax_rate ? `${vehicle.tax_rate * 100}%` : 'N/A'} VAT)
                                        </span>
                                    </div>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <p className="text-muted">Inquire about this vehicle to receive more details or book a viewing.</p>
                                        <div className="form-group mb-3">
                                            <input type="text" className="form-control sm" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="email" className="form-control sm" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="tel" className="form-control sm" placeholder="Phone Number" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <textarea className="form-control sm" placeholder="I am interested in this vehicle..." rows="3" style={{ border: '1px solid #eee' }}></textarea>
                                        </div>
                                        <div className="clearfix">
                                            <button type="submit" className="btn-primary btn btn-block w-100">Send Inquiry</button>
                                        </div>
                                    </form>
                                </div>
                                <VehicleFeatureGrid vehicle={vehicle} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CommenCarSlider title={"FOR YOUR QUICK LOOK"} />

            <section className="content-inner">
                <div className="container">
                    <ContectUs />
                </div>
            </section>
        </div>
    );
};

export default CarDetail_1;
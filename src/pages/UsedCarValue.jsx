import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'



const carValueDetail = [
    {
        img:
            <svg id="Layer_1_1_" height="60" width="60" version="1.1" viewBox="0 0 64 64" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="var(--primary)"><g><path d="M63,41V23h-5.543c-0.316-0.894-0.683-1.775-1.094-2.635l3.921-3.921L47.557,3.716l-3.922,3.921   C42.773,7.225,41.892,6.859,41,6.543V1H23v5.542c-0.891,0.316-1.772,0.682-2.635,1.095l-3.922-3.921L3.716,16.444l3.921,3.921   C7.226,21.225,6.859,22.106,6.543,23H1v18h5.543c0.316,0.894,0.683,1.775,1.094,2.635l-3.921,3.921l12.728,12.728l3.922-3.921   c0.861,0.412,1.743,0.779,2.635,1.095V63h18v-4h-0.344l0.434-0.434c0.613,0.313,1.252,0.578,1.91,0.79V63h8v-3.643   c0.658-0.212,1.297-0.477,1.91-0.79l2.575,2.575l5.656-5.657l-2.575-2.575c0.314-0.613,0.578-1.252,0.791-1.91H63v-8h-3.643   c-0.213-0.658-0.477-1.297-0.791-1.91l0.09-0.09H63z M60.656,39L61,38.656V39H60.656z M24.308,55.789   c-1.255-0.405-2.495-0.92-3.686-1.53l-0.648-0.333l-3.53,3.53l-9.899-9.9l3.529-3.529l-0.332-0.648   c-0.608-1.188-1.123-2.428-1.53-3.686L7.987,39H3V25h4.987l0.224-0.692c0.407-1.258,0.922-2.499,1.53-3.686l0.332-0.648   l-3.529-3.529l9.899-9.9l3.53,3.53l0.648-0.332c1.193-0.611,2.433-1.126,3.686-1.531L25,7.988V3h14v4.987l0.692,0.224   c1.254,0.405,2.494,0.92,3.686,1.531l0.648,0.332l3.53-3.53l9.899,9.9l-3.529,3.529l0.332,0.648   c0.608,1.188,1.123,2.428,1.53,3.686L56.013,25H61v13.373l-4.084-4.084C57.573,33.738,58,32.922,58,32c0-1.654-1.346-3-3-3   s-3,1.346-3,3c0,1.174,0.684,2.182,1.669,2.674l-0.759,0.759c-0.613-0.313-1.252-0.578-1.91-0.79V31h-1.051   C49.426,21.541,41.587,14,32,14c-9.925,0-18,8.075-18,18c0,9.588,7.541,17.426,17,17.949V51h3.643   c0.213,0.658,0.477,1.297,0.791,1.91l-0.759,0.759C34.182,52.684,33.174,52,32,52c-1.654,0-3,1.346-3,3s1.346,3,3,3   c0.922,0,1.738-0.427,2.289-1.084L38.373,61H25v-4.988L24.308,55.789z M55,33c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1   S55.552,33,55,33z M35.434,41.09c-0.314,0.613-0.578,1.252-0.791,1.91H31v0.949C24.85,43.438,20,38.279,20,32   c0-6.617,5.383-12,12-12c6.28,0,11.438,4.851,11.949,11H43v3.643c-0.658,0.212-1.297,0.477-1.91,0.79l-2.575-2.575l-5.656,5.657   L35.434,41.09z M45.949,31C45.433,23.747,39.382,18,32,18c-7.72,0-14,6.28-14,14c0,7.382,5.747,13.433,13,13.949v2   C22.644,47.429,16,40.485,16,32c0-8.822,7.178-16,16-16c8.485,0,15.429,6.644,15.949,15H45.949z M32,56c-0.552,0-1-0.449-1-1   s0.448-1,1-1s1,0.449,1,1S32.552,56,32,56z M39,61h-0.343L39,60.657V61z M61,45v4h-3.168l-0.194,0.75   c-0.257,0.997-0.65,1.948-1.17,2.828l-0.394,0.667l2.239,2.24l-2.828,2.829l-2.24-2.24l-0.668,0.395   c-0.879,0.519-1.83,0.913-2.827,1.17L49,57.832V61h-4v-3.168l-0.75-0.193c-0.997-0.257-1.948-0.651-2.827-1.17l-0.668-0.395   l-2.24,2.24l-2.828-2.829l2.239-2.24l-0.394-0.667c-0.52-0.88-0.913-1.831-1.17-2.828L36.168,49H33v-4h3.168l0.194-0.75   c0.257-0.997,0.65-1.948,1.17-2.828l0.394-0.667l-2.239-2.24l2.828-2.829l2.24,2.24l0.668-0.395c0.879-0.519,1.83-0.913,2.827-1.17   L45,36.168V33h4v3.168l0.75,0.193c0.997,0.257,1.948,0.651,2.827,1.17l0.668,0.395l2.24-2.24l2.828,2.829l-2.239,2.24l0.394,0.667   c0.52,0.88,0.913,1.831,1.17,2.828L57.832,45H61z" /><path d="M32,12c1.654,0,3-1.346,3-3s-1.346-3-3-3s-3,1.346-3,3S30.346,12,32,12z M32,8c0.552,0,1,0.449,1,1   s-0.448,1-1,1s-1-0.449-1-1S31.448,8,32,8z" /><path d="M9,29c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S10.654,29,9,29z M9,33c-0.552,0-1-0.449-1-1   s0.448-1,1-1s1,0.449,1,1S9.552,33,9,33z" /><path d="M47,38c-4.963,0-9,4.038-9,9s4.037,9,9,9s9-4.038,9-9S51.963,38,47,38z M47,54c-3.859,0-7-3.14-7-7   s3.141-7,7-7s7,3.14,7,7S50.859,54,47,54z" /></g></svg>
        , text: '5.0 Million+', text2: 'Cars analysed',
    }, {
        img:
            <svg height="60" width="60" id="svg8" version="1.1" viewBox="0 0 8.4666665 8.4666669" xmlns="http://www.w3.org/2000/svg" fill="var(--primary)" ><defs id="defs2" /><g id="layer1" transform="translate(0,-288.53332)"><path d="M 5 1 A 1.0000999 1.0000999 0 0 0 4 2 L 4 30 A 1.0000999 1.0000999 0 0 0 5 31 L 27 31 A 1.0000999 1.0000999 0 0 0 28 30 L 28 9 A 1.0000999 1.0000999 0 0 0 27.707031 8.2929688 L 20.707031 1.2929688 A 1.0000999 1.0000999 0 0 0 20 1 L 5 1 z M 6 3 L 19.001953 3 L 19.001953 8.9980469 C 18.99982 9.5505004 19.445584 9.9999878 19.998047 10.001953 L 26 10.001953 L 26 29 L 6 29 L 6 3 z M 21.001953 4.4160156 L 24.587891 8.0019531 L 21.001953 8.0019531 L 21.001953 4.4160156 z " id="rect996"
                transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)" /><path d="m 2.8847656,291.70898 a 0.26495432,0.26495432 0 0 0 0.025391,0.5293 h 2.6464844 a 0.26465,0.26465 0 1 0 0,-0.5293 H 2.9101562 a 0.26460981,0.26460981 0 0 0 -0.025391,0 z" id="path1009"
                /><path d="m 2.9101562,293.29492 a 0.26465,0.26465 0 1 0 0,0.5293 h 2.6464844 a 0.26465,0.26465 0 1 0 0,-0.5293 z" id="path1011" /><path d="m 2.9101562,294.88281 a 0.26465,0.26465 0 1 0 0,0.5293 h 2.6464844 a 0.26465,0.26465 0 1 0 0,-0.5293 z" id="path1013"
                /></g></svg>
        , text: '500+', text2: 'Dealers data analysed',
    }, {
        img:
            <svg enableBackground="new 0 0 32 32" height="60" width="60" id="Layer_1" version="1.1" viewBox="0 0 32 32" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="calendar_1_"><path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z" fill="var(--primary)" /><rect fill="var(--primary)" height="3" width="4" x="7" y="12" /><rect fill="var(--primary)" height="3" width="4" x="7" y="17" /><rect fill="var(--primary)" height="3" width="4" x="7" y="22" /><rect fill="var(--primary)" height="3" width="4" x="14" y="22" /><rect fill="var(--primary)" height="3" width="4" x="14" y="17" /><rect fill="var(--primary)" height="3" width="4" x="14" y="12" /><rect fill="var(--primary)" height="3" width="4" x="21" y="22" /><rect fill="var(--primary)" height="3" width="4" x="21" y="17" /><rect fill="var(--primary)" height="3" width="4" x="21" y="12" /></g></svg>
        , text: '20 Million+', text2: 'Valuations in a year',
    }
]
const UsedCarValue = () => {
    return (
        <>
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr dlab-bnr-inr-xl style-1 overlay-black-middle" style={{ backgroundImage: `url(${IMAGE.bnr2})` }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Car Valuation</h1>
                            <div className="dlab-separator"></div>
                            <div className="car-search-box item6 row sp15">
                                <div className="col-lg-4 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select className="form-control customSelect sm">
                                            <option>Model Year</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2019</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select className="form-control customSelect sm">
                                            <option>Search Brand / Model</option>
                                            <option>No Matches</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select className="form-control customSelect sm">
                                            <option>Select Variant</option>
                                            <option>No Matches</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select className="form-control customSelect sm">
                                            <option>Registration City</option>
                                            <option>US</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="selected-box">
                                        <input className="form-control" type="text" placeholder="Kilometers Driven" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="selected-box">
                                        <Form.Select className="form-control customSelect sm">
                                            <option>Ownership</option>
                                            <option>First</option>
                                            <option>Second</option>
                                            <option>No Matches</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mx-auto">
                                    <Link to={'#'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between fm-btn">
                                        <span className="d-flex justify-content-between w-100">CONTINUE<i className="las la-long-arrow-alt-right"></i></span>
                                    </Link>
                                </div>
                                <img className="img2 move-2" src={IMAGE.patternImg5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content-inner">
                    <div className="container">
                        <div className="section-head text-center space-lg">
                            <h6 className="sub-title style-1">Why trust our valuation?</h6>
                            <h2 className="title">CAR VALUATION</h2>
                            <p>Mobhil uses its extensive data insights to provide accurate market price</p>
                        </div>
                        <div className="row">
                            {carValueDetail.map((item, index) => {
                                return (
                                    <div className="col-md-4 m-b30" key={index}>
                                        <div className="icon-bx-wraper left">
                                            <div className="icon-lg text-primary radius me-3">
                                                <Link to="#" className="icon-cell text-primary">{item.img}</Link>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="dlab-tilte m-a0">{item.text}</h3>
                                                <p>{item.text2}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default UsedCarValue
import React from 'react'

const CarlistingBanner = (props) => {
    return (
        <>
            <div className="dlab-bnr-inr style-1 overlay-black-middle" style={{ backgroundImage: `url(${props.img})` }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">{props.title}</h1>
                        <div className="dlab-separator"></div>
                        {props.option}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarlistingBanner
import React from 'react'
import { Link } from 'react-router-dom'


const cards = [
    {
        title: 'London,', title2: 'UNITED KINGDOM', text: '59 Victoria Street', text2: 'London',
        text3: 'EC435BI',
    },
    {
        title: 'Sydney,', title2: 'AUSTRALIA', text: '3 Doris St,', text2: 'No.Kav 47-48,',
        text3: 'NSW 2060',
    },
    {
        title: 'Dhaka,', title2: 'BANGLADESH', text: 'SPhoenix Tower,', text2: '2nd & 3rd Floor407',
        text3: 'Tejgoan Industrial Area', text4: 'Dhaka 1208'
    },
    {
        title: 'Jakarta,', title2: 'INDONESIA', text: 'Jl. Jend. Sudirman', text2: 'North Sydney',
        text3: 'Karet Semanggi,', text4: 'Jakarta', text5: 'Selatan'
    },
]
const LocationCards = () => {
    return (
        <>
            <div className="row content-row-wrapper">
                {cards.map((item, index) => (
                    <div className="col-xl-3 col-sm-6 m-b30" key={index}>
                        <div className="content-box style-1">
                            <h3 className="title">{item.title},<span>{item.title2}</span></h3>
                            <p className="m-b30">{item.text}<br />{item.text2}<br />{item.text3}<br />{item.text4}
                                <br />{item.text5}</p>
                            <Link to="tel:224000221133" className="btn shadow-none effect-1"><span><i
                                className="fas fa-phone-volume me-3"></i>224 000 22 11 33</span></Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default LocationCards


























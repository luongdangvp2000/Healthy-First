import React from 'react'
import data from '../data.js'

export default function HomeScreen(props) {
    return (
        <>
            <div>
                <div className="small-container">
                    <h2 className="title">Places</h2>
                    <table className="places">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>ADDRESS</th>
                                <th>NUMBER</th>
                                <th>BUSINESS TYPE</th>
                                <th>ID CERTIFICATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.places.map((place) => (
                                <tr className='place'>
                                    <th>{place.name}</th>
                                    <th>{place.address}</th>
                                    <th>{place.number}</th>
                                    <th>{place.businessType}</th>
                                    <th>{place.idCertificate}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
//import data from '../data.js'

export default function HomeScreen(props) {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await axios.get('/api/places');
                setLoading(false);
                setPlaces(result.data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox>{error}</MessageBox>)
                    : (
                        <div>
                            <div className="small-container">
                                <h2 className="title">Places</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>ADDRESS</th>
                                            <th>NUMBER</th>
                                            <th>BUSINESS TYPE</th>
                                            <th>ID CERTIFICATE</th>
                                            <th>OPTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {places.map((place) => (
                                            <tr key={place.slug} className='place'>
                                                <th><Link to={`/place/${place.slug}`}>{place.name}</Link></th>
                                                <th>{place.address}</th>
                                                <th>{place.number}</th>
                                                <th>{place.businessType}</th>
                                                <th>{place.idCertificate}</th>
                                                <th>
                                                    <p>Edit</p>
                                                    <p>Delete</p>
                                                </th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

        </div>
    )
}
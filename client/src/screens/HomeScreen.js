import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPlaces } from '../actions/placeActions';
//import data from '../data.js'

export default function HomeScreen(props) {
    // const [places, setPlaces] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const place = props;
    const dispatch = useDispatch();
    const placeList = useSelector(state => state.placeList);
    const {loading, error, places} = placeList;
    useEffect(() => {
        dispatch(listPlaces());
    }, [dispatch])

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <div>
                            <div className="small-container">
                                <h2 className="title">Places</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                        
                                            <th>NAME</th>
                                            <th>ADDRESS</th>
                                            <th>DISTRICT</th>
                                            <th>NUMBER</th>
                                            <th>BUSINESS TYPE</th>
                                            <th>STATUS</th>
                                            <th>OPTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {places.map((place) => (
                                            <tr key={place._id} className='place'>
                                                <th><Link to={`/place/${place._id}`}>{place.name}</Link></th>
                                                <th>{place.address}</th>
                                                <th>{place.district}</th>
                                                <th>{place.number}</th>
                                                <th>{place.businessType}</th>
                                                <th>{place.status}</th>
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
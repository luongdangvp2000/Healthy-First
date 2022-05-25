import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPlaces } from "../actions/placeActions";
import { Link, useNavigate } from "react-router-dom";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function PlaceListScreen() {
    const navigate = useNavigate();

    const placeList = useSelector(state => state.placeList);
    const { loading, error, places } = placeList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPlaces())
    }, [dispatch])

    const deleteHandler = (product) => {
        // if (window.confirm('Are you sure to delete?')) {
        //     dispatch(deleteProduct(product._id));
        // }
    };
    return (
        <div>
            <h1>Places</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>DISTRICT</th>
                        <th>NUMBER</th>
                        <th>BUSINESS TYPE</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </thead>
                    <tbody>
                        {places.map((place) => (
                            <tr key={place._id} className='place'>
                                {/* <th><Link to={`/place/${place._id}`}>{place.name}</Link></th> */}
                                <td>{place.name}</td>
                                <td>{place.address}</td>
                                <td>{place.district}</td>
                                <td>{place.number}</td>
                                <td>{place.businessType}</td>
                                <td>{place.status}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => navigate(`/place/${place._id}/edit`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => deleteHandler(place)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPlace, listPlaces, deletePlace } from "../actions/placeActions";
import { Link, useNavigate } from "react-router-dom";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PLACE_CREATE_RESET, PLACE_DELETE_RESET } from "../constants/placeConstants";


export default function PlaceListScreen() {
    const navigate = useNavigate();

    const placeList = useSelector(state => state.placeList);
    const { loading, error, places } = placeList;

    const placeCreate = useSelector(state => state.placeCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        place: createdPlace,
    } = placeCreate;

    const placeDelete = useSelector((state) => state.placeDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = placeDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: PLACE_CREATE_RESET });
            navigate(`/place/${createdPlace._id}/edit`);
        }
        if (successDelete) {
            dispatch({ type: PLACE_DELETE_RESET });
        }
        dispatch(listPlaces())
    }, [createdPlace, dispatch, navigate, successCreate, successDelete]);

 

    const deleteHandler = (place) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deletePlace(place._id));
        }
    };

    const createHandler = () => {
        dispatch(createPlace());
    };
    return (
        <div>
            <div className="row">
                <h1>Places</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create Place
                </button>
            </div>

            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}

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
            <br />
            <br />
        </div>
    );
}
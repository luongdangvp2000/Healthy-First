import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsPlace } from "../actions/placeActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { updatePlace } from "../actions/placeActions";
import { PLACE_UPDATE_RESET } from "../constants/placeConstants";

export default function PlaceEditScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const { id: placeId } = params;

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');
    const [businessType, setBusinesstype] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');

    const placeDetails = useSelector(state => state.placeDetails);
    const { loading, error, place } = placeDetails;

    const placeUpdate = useSelector((state) => state.placeUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = placeUpdate;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            navigate('/placelist');
        }

        if (!place || place._id !== placeId || successUpdate) {
            dispatch({ type: PLACE_UPDATE_RESET });
            dispatch(detailsPlace(placeId));
        } else {
            setName(place.name);
            setAddress(place.address);
            setDistrict(place.district);
            setNumber(place.number);
            setBusinesstype(place.businessType);
            setImage(place.image);
            setStatus(place.status);
        }

    }, [place, dispatch, placeId]);

    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: dispatch update product
        dispatch(updatePlace({
            _id: placeId,
            name,
            address,
            district,
            number,
            businessType,
            image,
            status,
        }));

    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edit Place {placeId}</h1>
                </div>


                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        {loadingUpdate && <LoadingBox></LoadingBox>}
                        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                        {successUpdate && (
                            <MessageBox variant="success">
                                Edit Successfully
                            </MessageBox>
                        )}
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="district">District</label>
                            <input
                                id="district"
                                type="text"
                                placeholder="Enter district"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="number">Number</label>
                            <input
                                id="number"
                                type="text"
                                placeholder="Enter number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="businessType">Business Type</label>
                            <input
                                id="businessType"
                                type="text"
                                placeholder="Enter businessType"
                                value={businessType}
                                onChange={(e) => setBusinesstype(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="image">Image</label>
                            <input
                                id="image"
                                type="text"
                                placeholder="Enter image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="status">Status</label>
                            <input
                                id="status"
                                type="text"
                                placeholder="Enter status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label></label>
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
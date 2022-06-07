import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { detailsPlace } from "../actions/placeActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { updatePlace } from "../actions/placeActions";
import { PLACE_UPDATE_RESET } from "../constants/placeConstants";

import Axios from "axios";


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

    }, [place, dispatch, placeId, successUpdate, navigate]);

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
    };

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const { data } = await Axios.post('/api/uploads', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };
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
                            <label htmlFor="imageFile">Image File</label>
                            <input
                                type="file"
                                id="imageFile"
                                label="Choose Image"
                                onChange={uploadFileHandler}
                            ></input>
                            {loadingUpload && <LoadingBox></LoadingBox>}
                            {errorUpload && (<MessageBox variant="danger">{errorUpload}</MessageBox>)}
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

                        {/* <div>
                            <h2 id="Certificate">
                                Certificate
                            </h2>

                            {place.certficate.length === 0 && (<MessageBox>This place is not OK</MessageBox>)}

                            <ul>
                                {place.certficate.map((cert) => (
                                    <li key={cert._id}>
                                        <strong>{cert.beginDate}</strong>
                                        <strong>{cert.endDate}</strong>
                                        <p>
                                            {place.createdAt.substring(0, 10)}
                                        </p>

                                    </li>
                                ))}
                                <li>
                                    {userInfo ? (
                                        <form className="form" onSubmit={submitHandler}>
                                            <div>
                                                <h2>Certificate for this place</h2>
                                            </div>
                                            <div>
                                                <label htmlFor="beginDate">Begin Date</label>
                                                <select
                                                    id="beginDate"
                                                    value={beginDate}
                                                    onChange={(e) => setBeginDate(e.target.value)}
                                                >
                                                    <option value="">Select...</option>
                                                    <option value="1">1- Poor</option>
                                                    <option value="2">2- Fair</option>
                                                    <option value="3">3- Good</option>
                                                    <option value="4">4- Very good</option>
                                                    <option value="5">5- Excelent</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="endDate">End Date</label>
                                                <select
                                                    id="endDate"
                                                    value={endDate}
                                                    onChange={(e) => setEndDate(e.target.value)}
                                                >
                                                    <option value="">Select...</option>
                                                    <option value="1">1- Poor</option>
                                                    <option value="2">2- Fair</option>
                                                    <option value="3">3- Good</option>
                                                    <option value="4">4- Very good</option>
                                                    <option value="5">5- Excelent</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label />
                                                <button className="primary" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                            <div>
                                                {loadingReviewCreate && <LoadingBox></LoadingBox>}
                                                {errorReviewCreate && (
                                                    <MessageBox variant="danger">
                                                        {errorReviewCreate}
                                                    </MessageBox>
                                                )}
                                            </div>
                                        </form>
                                    ) : (
                                        <MessageBox>
                                            Please <Link to="/signin">Sign In</Link> to write a review
                                        </MessageBox>
                                    )}
                                </li>
                            </ul>
                        </div> */}


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
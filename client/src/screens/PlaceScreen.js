import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createCertificate, detailsPlace } from "../actions/placeActions";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PLACE_CERTIFICATE_CREATE_RESET } from "../constants/placeConstants";

export default function PlaceScreen() {
    const { id } = useParams();


    const placeId = id;
    const dispatch = useDispatch();

    const placeDetails = useSelector((state) => state.placeDetails);
    const { loading, error, place } = placeDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const placeCertificateCreate = useSelector((state) => state.placeCertificateCreate);
    const {
        loading: loadingCertificateCreate,
        error: errorCertificateCreate,
        success: successCertificateCreate,
    } = placeCertificateCreate;


    //const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    // const place = data.place.find(x => )

    useEffect(() => {
        if (successCertificateCreate) {
            window.alert('Certificate Submitted Successfully');
            setComment('');
            dispatch({ type: PLACE_CERTIFICATE_CREATE_RESET });
        }
        dispatch(detailsPlace(placeId));
    }, [dispatch, placeId, successCertificateCreate]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (comment) {
            dispatch(createCertificate(placeId, { comment, name: userInfo.name }))
        } else {
            alert('Please enter information')
        }
    }
    return (
        <div>
            {/* <h1>{slug}</h1> */}

            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <div>
                            <Link to="/">Back</Link>
                            <div className="small-container single-product">
                                <div key={place._id} className="row">
                                    <div className="col-2">
                                        <img src={`/${place.image}`} alt={place.name}></img>

                                    </div>

                                    <div className="col-2">
                                        <h1>{place.name}</h1>
                                        <h3>{place.address}</h3>
                                        <h3>{place.address}</h3>
                                        <h3>{place.number}</h3>
                                        <h3>{place.businessType}</h3>
                                        {/* <h3>{place.des}</h3> */}
                                        <h3>{place.status}</h3>
                                    </div>
                                    <div>
                                        {place.status === 'OK' || place.status === 'ok' || place.status === 'Ok' || place.status === 'oK' ? (
                                            <div>

                                                <h2 id="certificates">
                                                    Certificates
                                                </h2>

                                                {place.certificates.length === 0 && (
                                                    <MessageBox>There is no certificate</MessageBox>
                                                )}

                                                <ul>
                                                    {place.certificates.map((certificate) => (
                                                        <li key={certificate._id}>
                                                            <strong>{certificate.name}</strong>
                                                            {/* <p>{certificate.beginDate}</p>
                                                            <p>{certificate.endDate}</p> */}

                                                            <div>
                                                                <p>Begin Date: {certificate.createdAt.substring(0, 10)}</p>
                                                            </div>

                                                            <div>
                                                                <p>End Date: </p>
                                                            </div>

                                                            {/* <p>{certificate.comment}</p> */}
                                                        </li>
                                                    ))}

                                                    <li>
                                                        {userInfo ? (
                                                            <form className="form" onSubmit={submitHandler}>
                                                                <div>
                                                                    <h2>Write a comment of supervisor</h2>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="comment">Comment</label>
                                                                    <textarea
                                                                        id="comment"
                                                                        value={comment}
                                                                        onChange={(e) => setComment(e.target.value)}
                                                                    ></textarea>
                                                                </div>
                                                                <div>
                                                                    <label />
                                                                    <button className="primary" type="submit">
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    {loadingCertificateCreate && <LoadingBox></LoadingBox>}
                                                                    {errorCertificateCreate && (
                                                                        <MessageBox variant="danger">
                                                                            {errorCertificateCreate}
                                                                        </MessageBox>
                                                                    )}
                                                                </div>
                                                            </form>
                                                        ) : (
                                                            <MessageBox>
                                                                Please <Link to="/signin">Sign In</Link>
                                                            </MessageBox>
                                                        )}
                                                    </li>


                                                </ul>
                                            </div>
                                        ) : (
                                            <span className="danger">Not Ok</span>
                                        )}


                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
        </div>
    );
}
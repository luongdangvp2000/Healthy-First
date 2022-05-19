import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams } from "react-router-dom";
import { detailsPlace } from "../actions/placeActions";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function PlaceScreen() {
    const { id } = useParams();


    const placeId = id;
    const dispatch = useDispatch();

    const placeDetails = useSelector((state) => state.placeDetails);
    const { loading, error, place } = placeDetails;

    // const place = data.place.find(x => )

    useEffect(() => {
        dispatch(detailsPlace(placeId));
    }, [dispatch, placeId]);

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
                                        <p></p>
                                        <h1>{place.name}</h1>
                                        <h3>{place.address}</h3>
                                        <h3>{place.address}</h3>
                                        <h3>{place.number}</h3>
                                        <h3>{place.businessType}</h3>
                                        {/* <h3>{place.des}</h3> */}
                                    </div>

                          
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    );
}
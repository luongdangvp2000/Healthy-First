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
    const { loading, error, places } = placeList;
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
                            <div className="small-container ">
                                <h2 className='title'>Paper</h2>
                                <div className="w3-container">
                                    <div className="w3-content">
                                        {/* <h1 className="w3-center w3-text-grey"><b>Jane & John</b></h1> */}
                                        {/* <img className="w3-round w3-grayscale-min" src="/w3images/wedding_couple2.jpg" style="width:100%;margin:32px 0" /> */}
                                        <div className='w3-center'>
                                            <img className='' src="images/elon-musk.jpg" />
                                        </div>
                                        <br />

                                        <p><i>How do you regulate a man worth more than $200 billion who thinks he knows better than everyone else? The simple answer is: You don't.

                                            Elon Musk has once again proven he'll do things his own way, announcing Friday that his $44 billion deal to buy Twitter is on hold. He shared this news in a tweet rather than in a formal filing with the Securities and Exchange Commission. The drama over the deal has continued to play out in a series of tweets between Musk and the company.
                                            Because the SEC ruled back in 2013 that using Twitter and other social media platforms are an acceptable way for public companies to disclose material information, this might be one of the legal ways he's flouted convention.</i>
                                        </p><br />
                                        {/* <p className="w3-center"><className="w3-button w3-black w3-round w3-padding-large w3-large">Wedding Details</a></p> */}
                                    </div>
                                </div>

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
                                                {/* <th>
                                                    <p>Edit</p>
                                                    <p>Delete</p>
                                                </th> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    <br />
                    <br />
        </div>
    )
}
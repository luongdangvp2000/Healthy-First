import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

export default function Navbar() {
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signoutHandler = () => {
        dispatch(signout());
    };

    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        {/* <img src="/images/logo-team.jpeg" alt="logo-team" /> */}

                    </Link>
                </div>


                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            {
                                userInfo ? (
                                    <div className="dropdown">
                                        <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i>{' '}</Link>
                                        <ul className="dropdown-content">
                                            <li>
                                                <Link to="/profile">User Profile</Link>
                                            </li>


                                            <li>
                                                <Link to="#signout" onClick={signoutHandler}>
                                                    Sign Out
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                ) : (
                                    <Link to="/signin">
                                        Sign In
                                    </Link>
                                )
                            }

                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}
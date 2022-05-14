import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        {/* <img src="/images/logo-team.jpeg" alt="logo-team" /> */}
                        Healthy First
                    </Link>
                </div>

                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/signin">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
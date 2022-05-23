import React from "react"
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h1>
                        The Website Management<br />
        
                    </h1>
                    {/* <p>
                        Books are the quietest and most constant of friends.<br />
                        They are the most accessible and wisest of counselors, and the most patient of teachers.
                    </p> */}
                    <Link to="/" className="btn">Explore Now &#x27F6;</Link>
                </div>
                <div className="col-2">
                    <img src="images/header-pic.png" alt="Header Pic" />
                </div>
            </div>
        </>
    );
}
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const submitHandler = (e) => {
        e.preventDefault();
        // Sigin action
        //dispatch(signin(email, password));
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>

                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label />
                    <button className="primary" type="submit">
                        Sign In
                    </button>
                </div>

                <div>
                    <label />
                    <div>
                        New customer?{' '}
                        {/* <Link to={`/register?redirect=${redirect}`}>Create your account</Link> */}
                        <Link to='/register'>Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
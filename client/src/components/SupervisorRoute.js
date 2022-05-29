import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SupervisorRoute = ({ children }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return userInfo && userInfo.isSupervisor ? children : <Navigate to="/signin" />;
};

export default SupervisorRoute;
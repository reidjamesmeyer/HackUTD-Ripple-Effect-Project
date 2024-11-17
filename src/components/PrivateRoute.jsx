import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function PrivateRoute({ children }) {
    const { user } = useAuth(); // Create the user object with the useAuth function.
    // note that if the user does not exist, the object is UNDEFINED
    // Redirect to LandingPage if not logged in
    if (!user) {
        return <Navigate to="/" />; // Correct redirect for non-logged-in users
    }

    // Otherwise, render the child components
    return children;
}

export default PrivateRoute;

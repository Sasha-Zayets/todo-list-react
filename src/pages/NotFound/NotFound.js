import React from 'react'
import './not-found.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <h2 className="not-found__title">Page not found</h2>
        <Link to="/" className="not-found__link">Home page</Link>
        <Link to="/sign-in" className="not-found__link">Sign In</Link>
        <Link to="/rigistration" className="not-found__link">Sing out</Link>
    </div>
);

export default NotFound;
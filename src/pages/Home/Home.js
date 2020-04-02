import React from 'react'
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-page">
        <h2 className="home-page__title">
            Welcome
        </h2>
        <div className="home-page__description">
            <Link to="/login" className="home-page__link">Sign in</Link>
            <Link to="/registration" className="home-page__link">Registration</Link>
        </div>
    </div>
)

export default Home;
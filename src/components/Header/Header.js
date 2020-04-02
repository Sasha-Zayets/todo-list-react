import React from 'react';
import classes from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className={classes.header}>
        <Link to="/" className={classes.header__title}>ToDo List</Link>
    </header>
);

export default Header;
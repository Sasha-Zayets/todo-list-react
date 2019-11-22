import React from 'react';
import classes from './header.module.scss';

export default class Header extends React.Component {
    constructor (props) {
        super();
    }

    render () {
        return (
            <header className={classes.header}>
                <span className={classes.header__title}>ToDo List</span>
            </header>
        )
    }
}
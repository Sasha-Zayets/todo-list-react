import React from 'react';
import propTypes from 'prop-types';
import buttonClass from './Button.module.scss';

const Button = ({ marginLeft, onClick, children, ...attr }) => {
    const styles = {
        marginLeft: marginLeft + 'px' || 0
    }

    return (
        <button 
            className={buttonClass.button} 
            style={styles}
            onClick={() => onClick()}
            {...attr}
        >{ children }</button>
    )
}

Button.propTypes = {
    marginLeft: propTypes.number,
    onClick: propTypes.func,
}

export default Button;
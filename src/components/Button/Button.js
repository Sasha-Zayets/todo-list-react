import React, {Component} from 'react';
import buttonClass from './Button.module.scss';

export default class Button extends Component {
    constructor (props) {
        super();
    }

    render () {
        const styles = {
            marginLeft: this.props.marginLeft + 'px'
        }

        return (
            <button 
                className={buttonClass.button} 
                style={styles}
                onClick={this.props.addEventClick}
            >Add post</button>
        )
    }
}
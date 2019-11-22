import React from 'react';
import textField from './TextField.module.scss';

class TextField extends React.Component {
    constructor (props) {
        super();
    }

    render () {
        return (
            <div className={textField.textField}>
                <input 
                    onChange={this.props.onChangeField} 
                    placeholder={this.props.placeholder}
                    value={this.props.value}/>
            </div>
        )
    }
} 

export default TextField;
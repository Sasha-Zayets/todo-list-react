import React from 'react';
import item from './taskItem.module.scss';

import TextField from '../TextField/TextField';
export default class TaskItem extends React.Component {
    constructor (props) {
        super();

        this.state = {
            editFieldValue: ''
        }
    }

    editValue = (event) => {
        const value = event.target.value;
        console.log(value)
    }

    editItem = () => {
        console.log('click')
    }

    render () {
        const checkedClass = this.props.task.done ? item.taskItem__done : '';

        return (
            <React.Fragment>
                <div className={item.taskItem}>
                    <div className={item.taskItem__checkbox}>
                        <input 
                            type="checkbox" 
                            checked={this.props.task.done} 
                            onChange={this.props.onDone.bind(this, this.props.task.id)}/>
                    </div>
                    <div className={[item.taskItem__name, checkedClass].join(' ')}>
                        { this.props.task.name }
                    </div>
                    <div className={item.taskItem__events}>
                        <span
                            className={item.taskItem__edit}
                            onClick={this.editItem}>
                                <i className="fa fa-edit"></i>
                            </span>
                        <span 
                            className={item.taskItem__delete}
                            onClick={() => this.props.onDeleteElement(this.props.task.id)}
                        ><i className="fa  fa-trash-o"></i></span>
                    </div>
                </div>

                <div className={item.edit}>
                    <div className={item.edit__field}>
                        <TextField 
                            onChangeField={this.editValue} 
                            placeholder="New Task"
                            value={this.state.editFieldValue}/>
                    </div>
                    <div className={item.edit__events}>
                        <span className={item.edit__close}>
                            <i className="fa fa-close" />
                        </span>
                        <span className={item.edit__confirm}>
                            <i className="fa fa-check-circle" />
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
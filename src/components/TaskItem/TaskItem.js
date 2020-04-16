import React from 'react';
import item from './taskItem.module.scss';

import TextField from '../TextField/TextField';
export default class TaskItem extends React.Component {
    constructor (props) {
        super();
        
        this.state = {
            editFieldValue: '',
            showTaskItem: true,
            error: false,
            task: {}
        }
    }

    componentDidMount() {
        const task = this.props.task;
        this.setState({
            task
        });
    }

    editValue = (event) => {
        const value = event.target.value;
        
        this.setState({
            editFieldValue: value
        });
    }

    fadeEditBlock = () => {
        this.setState({
            showTaskItem: true
        });
    }

    confirmEditBlock = () => {
        const newValue = this.state.editFieldValue;
        const id = this.props.task.id;

        if (newValue.length > 1) {
            this.props.onEditElement(id, newValue);

            this.setState({
                showTaskItem: true
            });
        } else {
            this.setState({
                error: true
            });

            setTimeout(() => {
                this.setState({
                    error: false
                });
            }, 5000);
        }
    }

    editItem = () => {
        const valueEdit = this.props.task.name;

        this.setState({
            editFieldValue: valueEdit,
            showTaskItem: false
        });
    }

    updateDone = () => {
        const task = this.state.task;
        task.done = !task.done;

        this.setState({
            task
        }, () => {
            this.props.onUpdate(this.state.task);
        });
    }

    render () {
        const { task } = this.props;
        const checkedClass = task.done ? item.taskItem__done : '';
        const { onDelete } = this.props;
        return (
            <React.Fragment>
                {   this.state.showTaskItem
                    ? <div className={item.taskItem}>
                        <div className={item.taskItem__checkbox}>
                            <input 
                                type="checkbox" 
                                checked={this.props.task.done}
                                onChange={this.updateDone}/>
                        </div>
                        <div className={[item.taskItem__name, checkedClass].join(' ')}>
                            { this.props.task.title }
                        </div>
                        <div className={item.taskItem__events}>
                            <span
                                className={item.taskItem__edit}>
                                    <i className="fa fa-edit"></i>
                                </span>
                            <span 
                                className={item.taskItem__delete}
                                onClick={() => onDelete(task)}
                            ><i className="fa  fa-trash-o"></i></span>
                        </div>
                    </div>

                    :   <div className={item.edit}>
                            {/* <div className={item.edit__field}>
                                <TextField 
                                    onChangeField={this.editValue} 
                                    placeholder="New Task"
                                    value={this.state.editFieldValue}/>
                                <span className={[item.edit__error, this.state.error ? item.edit__errorShow : ''].join(' ')}>Name must contain more than one character</span>
                            </div>
                            <div className={item.edit__events}>
                                <span 
                                    className={item.edit__close}
                                    onClick={this.fadeEditBlock}
                                >
                                    <i className="fa fa-close" />
                                </span>
                                <span 
                                    className={item.edit__confirm}

                                    onClick={this.confirmEditBlock}
                                >
                                    <i className="fa fa-check-circle" />
                                </span>
                            </div> */}
                        </div>
                }
            </React.Fragment>
        )
    }
}
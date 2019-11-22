import React from 'react';
import item from './taskItem.module.scss';

export default class TaskItem extends React.Component {
    constructor (props) {
        super();
    }

    render () {
        const checkedClass = this.props.task.done ? item.taskItem__done : '';

        return (
            <div className={item.taskItem}>
                <div className={item.taskItem__checkbox}>
                    <input type="checkbox" checked={this.props.task.done} onChange={this.props.onDone.bind(this, this.props.task.id)}/>
                </div>
                <div className={[item.taskItem__name, checkedClass].join(' ')}>
                    { this.props.task.name }
                </div>
                <div className={item.taskItem__events}>
                    <span 
                        className={item.taskItem__delete}
                        onClick={() => this.props.onDeleteElement(this.props.task.id)}
                    ><i className="fa  fa-trash-o"></i></span>
                </div>
            </div>
        )
    }
}
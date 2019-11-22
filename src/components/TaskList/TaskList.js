import React from 'react';
import list from './taskList.module.scss';

import TaskItem from '../TaskItem/TaskItem';

export default class TaskList extends React.Component {
    constructor (props) {
        super();
    }

    render () {
        return (
            <div className={list.taskList}>
                { this.props.listTask.map((task, index) => {
                    return (
                        <TaskItem 
                            key={index} 
                            task={task} 
                            onDeleteElement={this.props.onDeleteElement} 
                            onDone={this.props.onDone}/>
                    )
                })}
            </div>
        )
    }
}
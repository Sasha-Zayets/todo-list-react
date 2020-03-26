import React from 'react';
import propTypes from 'prop-types';
import list from './taskList.module.scss';

import TaskItem from '../TaskItem/TaskItem';

class TaskList extends React.Component {
    constructor (props) {
        super();
    }

    render () {
        const { listTask, onDeleteElement, onEditElement, onDone } = this.props;

        return (
            <div className={list.taskList}>
                { listTask.map((task, index) => {
                    return (
                        <TaskItem 
                            key={index} 
                            task={task} 
                            onDeleteElement={onDeleteElement}
                            onEditElement={onEditElement}
                            onDone={onDone}/>
                    )
                })}
            </div>
        )
    }
}

TaskList.propTypes = {
    listTask: propTypes.array,
    onDeleteElement: propTypes.func,
    onEditElement: propTypes.func,
    onDone: propTypes.func
}

export default TaskList;
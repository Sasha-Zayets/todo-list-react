import React from 'react';
import { connect } from 'react-redux';
import list from './taskList.module.scss';
import TaskItem from '../TaskItem/TaskItem';
import { editTask } from '../../redux/actions/task';

const TaskList = ({listTask, updateTask}) => {
    const update = (newTask) => {
        const data = {
            id: newTask._id,
            task: newTask
        }
        updateTask(data);
    }

    const deleteTask = (task) => {
        console.log(task);
    }

    return (
        <div className={list.taskList}>
            { listTask.map((task, index) => {
                return (
                    <TaskItem 
                        key={index} 
                        task={task}
                        onUpdate={update}
                        onDelete={deleteTask} />
                )
            })}
        </div>
    )
}

const mapDispathToProps = dispatch => ({
    updateTask: data => dispatch(editTask(data)),
});

export default connect(null, mapDispathToProps)(TaskList);
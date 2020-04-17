import React from 'react';
import { connect } from 'react-redux';
import list from './taskList.module.scss';
import TaskItem from '../TaskItem/TaskItem';
import { editTask, removeTask } from '../../redux/actions/task';

const TaskList = ({listTask, updateTask, deleteTask}) => {
    const update = (newTask) => {
        const data = {
            id: newTask._id,
            task: newTask
        }
        updateTask(data);
    }

    const onDeleteTask = ({_id}) => {
        deleteTask(_id);
    }

    return (
        <div className={list.taskList}>
            { listTask.map((task, index) => {
                return (
                    <TaskItem 
                        key={index} 
                        task={task}
                        onUpdate={update}
                        onDelete={onDeleteTask} />
                )
            })}
        </div>
    )
}

const mapDispathToProps = dispatch => ({
    updateTask: data => dispatch(editTask(data)),
    deleteTask: id => dispatch(removeTask(id)),
});

export default connect(null, mapDispathToProps)(TaskList);
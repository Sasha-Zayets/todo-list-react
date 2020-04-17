import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import item from '../TaskItem/taskItem.module.scss';
import TextField from '../TextField/TextField';

const EditTask = ({ onClose, onEdit, value }) => {
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        setNewTask(value);
    }, []);
    
    const confirmEdit = () => {
        if(newTask.length < 1) {
            setError(true);
        } else {
            setError(false);
            onEdit(newTask);
        }
    }

    return (
        <div className={item.edit}>
            <div className={item.edit__field}>
                <TextField 
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New Task"
                    value={newTask}/>
                <span className={
                    [item.edit__error, 
                        error ? item.edit__errorShow 
                        : ''].join(' ')
                    }>Name must contain more than one character</span>
            </div>
            <div className={item.edit__events}>
                <span 
                    onClick={onClose}
                    className={item.edit__close}
                >
                    <i className="fa fa-close" />
                </span>
                <span 
                    className={item.edit__confirm}
                    onClick={confirmEdit}
                >
                    <i className="fa fa-check-circle" />
                </span>
            </div>
        </div>
    )
}

EditTask.propTypes = {
    onClose: propTypes.func,
}

export default EditTask;
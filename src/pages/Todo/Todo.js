import React from 'react';
import './todo.scss';
import Title from '../../components/Title/Title';
import TaskForm from '../../components/TaskForm/TaskForm';

const Todo = () => {
    return (
        <div className="todo-container">
            <Title />
            <TaskForm />
        </div>
    )
}

export default Todo;
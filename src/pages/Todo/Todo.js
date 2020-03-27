import React from 'react';
import './todo.scss';
import { connect } from 'react-redux';
import Title from '../../components/Title/Title';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';

const Todo = ({ taskList }) => {
    console.log(taskList);
    
    return (
        <div className="todo-container">
            <Title />
            <TaskForm />
            <TaskList />
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskList: state.task.taskList
});

export default connect(mapStateToProps)(Todo);
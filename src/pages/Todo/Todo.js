import React from 'react';
import './todo.scss';
import { connect } from 'react-redux';
import Title from '../../components/Title/Title';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import { Redirect } from 'react-router-dom';
import { compose } from 'recompose';
import authUser from '../../components/HOC/AuthUser/AuthUser';

const Todo = ({ auth }) => {
    console.log(auth);
    return (
        <div className="todo-container">
            {   auth ? 
                    (
                        <>
                            <Title />
                            <TaskForm />
                            {/* <TaskList /> */}
                        </>
                    )
                : <Redirect to="/login" /> 
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskList: state.task.taskList
});

export default compose(
    connect(mapStateToProps),
    authUser,
)(Todo);
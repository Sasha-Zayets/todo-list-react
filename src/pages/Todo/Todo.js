import React, { useEffect } from 'react';
import './todo.scss';
import { connect } from 'react-redux';
import Title from '../../components/Title/Title';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import { Redirect } from 'react-router-dom';
import { compose } from 'recompose';
import authUser from '../../components/HOC/AuthUser/AuthUser';
import { getTask, addTask } from '../../redux/actions/task';

const Todo = ({ auth, id, getTask, addTask, taskList }) => {
    useEffect(() => {
        getTask(id);
    }, []);

    const add = (payload) => {
        addTask({
            ...payload,
            id
        });
    }

    return (
        <div className="todo-container">
            {   auth ? 
                    (
                        <>
                            <Title />
                            <TaskForm addTask={add}/>
                            <TaskList listTask={taskList}/>
                        </>
                    )
                : <Redirect to="/login" /> 
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskList: state.task.taskList,
    id: state.auth.id
});

const mapDispatchToProps = dispatch => ({
    getTask: (id) => dispatch(getTask(id)),
    addTask: data => dispatch(addTask(data)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authUser,
)(Todo);
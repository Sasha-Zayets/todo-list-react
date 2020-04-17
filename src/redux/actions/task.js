import axios from 'axios';
import { GET_TASK, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../types/task';

export const setTask = payload => ({
    type: GET_TASK,
    payload
});

export const addNewTask = payload => ({
    type: ADD_TASK,
    payload
});

export const setEditTask = payload => ({
    type: UPDATE_TASK,
    payload
});

export const deleteTask = payload => ({
    type: DELETE_TASK,
    payload
});

export const getTask = (id) => async (dispatch) => {
    try {
        const result = await axios.post('http://localhost:3002/api/task', { id });
        
        if(result.status === 200) {
            console.log(result);
            dispatch(setTask(result.data));
        }
    } catch(error) {
        console.log(error);
    }
}

export const addTask = (payload) => async (dispatch) => {
    try {
        const result = await axios.post('http://localhost:3002/api/add-task', {
            ...payload
        });

        if(result.status === 200) {
            dispatch(addNewTask(payload));
            return result;
        }
        throw Error;
    } catch(error) {
        console.log(error);
    }
}

export const removeTask = (id) => async (dispatch) => {
    try {
        const result = await axios.delete(`http://localhost:3002/api/delete-task/${id}`);

        if(result.status === 200) {
            dispatch(deleteTask(id));
            return result;
        }
    } catch(error) {
        console.log(error);
    }
}

export const editTask = ({id, task}) => async (dispatch) => {
    try {
        const result = await axios.put('http://localhost:3002/api/edit-task', {
            id, 
            task
        });
        if(result.status === 200) {
            dispatch(setEditTask({id, task}));
            return result;
        }
        throw Error;
    } catch(error) {
        console.log(error);
    }
}
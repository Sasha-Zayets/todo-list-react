import axios from 'axios';
import { SET_AUTH } from '../types/auth';

export const setAuth = (payload) => ({
    type: SET_AUTH,
    payload
});

export const singUp = (payload) => async (dispatch) => {
    try {
        const data = await axios.post('https://node-api-todo-list.herokuapp.com/api/registration', {
            ...payload
        });
        return data;
    } catch(error) {
        console.log(error);
    }
}

export const signIn = (payload) => async (dispatch) => {
    try {
        const result = await axios.post('https://node-api-todo-list.herokuapp.com/api/login', {
            ...payload
        });

        if(result.status === 200) {
            dispatch(setAuth({ auth: true, id: result.data._id }));
            localStorage.setItem('auth', true);
            return result;
        } 
        throw Error;
    } catch(error) {
        console.log(error);
    }
}

export const getAuthStorage = () => {
    const auth = localStorage.get('auth');
    if (auth === undefined) {
        return false;
    }
    return true;
}

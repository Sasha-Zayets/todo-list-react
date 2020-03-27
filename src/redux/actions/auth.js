import axios from 'axios';
import { REGISTRATION } from '../types/auth';

export const singUp = (payload) => async (dispatch) => {
    try {
        const data = await axios.post('http://localhost:3002/api/registration', {
            ...payload
        });
        return data;
    } catch(error) {
        console.log(error);
    }
}

export const signIn = (payload) => async (dispatch) => {
    try {
        const data = await axios.post('http://localhost:3002/api/login', {
            ...payload
        });
        console.log(data);
        return data;
    } catch(error) {
        console.log(error);
    }
}

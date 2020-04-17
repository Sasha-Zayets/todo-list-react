import { SET_AUTH } from '../types/auth';

const initialState = {
    auth: false,
    id: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH:
            const { auth, id } = action.payload;
            return { 
                ...state, 
                auth,
                id
            };
    }
    return state;
}

export default authReducer;
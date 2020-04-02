import { SET_AUTH } from '../types/auth';

const initialState = {
    authUser: false
}

const authReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case SET_AUTH:
            return { ...state, authUser: actions.payload.auth};
    }
    return state;
}

export default authReducer;
import { SET_AUTH } from '../types/auth';

const initialState = {
    auth: true,
    id: '5e7e6b76e2eafa3927e41aa2'
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
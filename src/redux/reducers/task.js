import { GET_TASK, ADD_TASK } from '../types/task';

const initialState = {
    taskList: []
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASK:
            const taskList = action.payload;
            return { 
                ...state,
                taskList
            }
        case ADD_TASK:
            let task = [...state.taskList];
            task.push(action.payload);
            return {
                ...state,
                taskList: task
            }
    }
    return state;
}

export default taskReducer;
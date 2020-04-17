import { GET_TASK, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../types/task';

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
            let newTask = [...state.taskList];
            newTask.push(action.payload);
            return {
                ...state,
                taskList: newTask
            }
        case UPDATE_TASK: {
            const {id, task} = action.payload;
            const updateTask = state.taskList.map(item => {
                if(item._id === id) {
                    return task;
                }
                return item;
            });
            return {
                ...state,
                taskList: updateTask
            }
        }
        case DELETE_TASK:
            const id = action.payload;
            const deleteTask = state.taskList.filter(item => {
                if(item._id !== id) return item;
            });
            return {
                ...state,
                taskList: deleteTask
            }
    }
    return state;
}

export default taskReducer;
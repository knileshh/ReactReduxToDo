
import { createStore } from 'redux';

// Define initial state
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  };

// Define action types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Define action creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index
});

// Define reducer
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        const updatedTasks = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return {
          ...state,
          tasks: updatedTasks
        };
      case DELETE_TASK:
        const filteredTasks = state.tasks.filter((_, i) => i !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return {
          ...state,
          tasks: filteredTasks
        };
      default:
        return state;
    }
  };

// Create the store
const store = createStore(tasksReducer);

export default store;
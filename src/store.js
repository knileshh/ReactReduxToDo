// store.js
import { createStore } from 'redux';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK_COMPLETE = 'TOGGLE_TASK_COMPLETE';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: { text: task, completed: false }
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index
});

export const toggleTaskComplete = (index) => ({
  type: TOGGLE_TASK_COMPLETE,
  payload: index
});

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
    case TOGGLE_TASK_COMPLETE:
      const updatedTasksWithCompletion = state.tasks.map((task, i) =>
        i === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksWithCompletion));
      return {
        ...state,
        tasks: updatedTasksWithCompletion
      };
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

export default store;
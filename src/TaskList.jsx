import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskComplete } from './store';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleToggleTaskComplete = (index) => {
    dispatch(toggleTaskComplete(index));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-2 border border-gray-300 rounded mb-2 ${
              task.completed ? 'bg-green-200' : 'bg-white'
            }`}
          >
            <span
              onClick={() => handleToggleTaskComplete(index)}
              className={`cursor-pointer ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
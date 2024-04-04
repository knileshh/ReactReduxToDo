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
    <div className="mt-8 max-w-3/4 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Task List
      </h2>
      <ul className="space-y-2 sm:space-y-0 sm:divide-y divide-gray-200">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2 border border-gray-300 rounded mb-2 sm:mb-0 ${
              task.completed ? 'bg-green-200' : 'bg-white'
            }`}
          >
            <div className="flex items-center sm:flex-grow">
              <span
                onClick={() => handleToggleTaskComplete(index)}
                className={`cursor-pointer mr-2 sm:mr-4 ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTask(index)}
              className="mt-2 sm:mt-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

};

export default TaskList
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './store';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded"
          >
            <span className="text-gray-800">{task}</span>
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
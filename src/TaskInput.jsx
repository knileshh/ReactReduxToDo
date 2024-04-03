
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        className="border border-gray-300 rounded-l px-4 py-2 mr-2 w-3/4"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
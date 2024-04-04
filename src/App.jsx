// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
// import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">To-Do App</h1>
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};
export default App;
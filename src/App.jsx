// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};
export default App;
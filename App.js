// App.js
import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'white' }}>TO DO LIST</h1>
      <TaskList />
    </div>
  );
}

export default App;

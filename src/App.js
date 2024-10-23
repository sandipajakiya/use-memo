import React, { useState, useMemo } from 'react';
import Child from './child';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['Learn React', 'Practice JavaScript', 'Build Projects']);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos([...todos, `New Task ${todos.length + 1}`]);
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: 'white',
  };

  const counterStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1>Parent Component</h1>
      <button style={buttonStyle} onClick={increment}>Increment Counter</button>
      <p style={counterStyle}>Counter: {count}</p>
      <button style={buttonStyle} onClick={addTodo}>Add Todo</button>
      <Child todos={memoizedTodos} />
    </div>
  );
};

export default App;

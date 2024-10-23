import React from 'react';

const Child = React.memo(({ todos }) => {
  const childContainerStyle = {
    marginTop: '20px',
    backgroundColor: '#e6f7ff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const todoItemStyle = {
    fontSize: '18px',
    margin: '10px 0',
    color: '#007acc',
  };

  return (
    <div style={childContainerStyle}>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={todoItemStyle}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default Child;

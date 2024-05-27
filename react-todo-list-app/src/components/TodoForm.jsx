import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center bg-white shadow-md rounded-lg p-4">
      <input
        type="text"
        placeholder="Add a new todo"
        className="border rounded-lg p-2 flex-grow outline-none focus:border-green-500"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="bg-green-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-600 transition duration-150">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;

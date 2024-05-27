import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []); 
  const [filter, setFilter] = useState('All');

  const handleAddTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };

  const handleCompleteTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
      <TodoList todos={filteredTodos} onCompleteTodo={handleCompleteTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;

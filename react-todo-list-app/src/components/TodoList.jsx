import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onCompleteTodo, onDeleteTodo }) {
  return (
    <ul className="list-none p-0 bg-white shadow-lg rounded-lg">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onComplete={onCompleteTodo} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;

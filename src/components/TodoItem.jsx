import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.title}
      </span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;

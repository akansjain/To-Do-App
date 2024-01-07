import React, { useState } from "react";

export default function ToDoItem({ id, text, completed, toggleCompleted }) {
  
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => toggleCompleted(id)}
    >
      {text}
    </li>
  );
}

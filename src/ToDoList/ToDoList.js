import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

export default function ToDoList() {
  
    const [todoItems, setTodoItems] = useState([
      { id: 1, text: "Read SpringBoot", completed: false },
      { id: 2, text: "Complete assignments", completed: false },
      { id: 3, text: "Prepare breakfast", completed: false },
      { id: 4, text: "Sleep for 2 hours", completed: false },
      { id: 5, text: "Take a shower", completed: false }
    ]);

    const handleToggle = (id) => {
      setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    };

    const handleRemoveCompleted = () => {
      setTodoItems((prevItems) => prevItems.filter((item) => !item.completed));
    };
    return (
    <div className="to-do-list">
      {todoItems.length === 0 ? (
        <p style={{ fontStyle: "italic" }}>Nothing to do buddy. Sleep!</p>
      ) : (
        todoItems.map((item, index) => (
          <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              toggleCompleted={handleToggle}
            />
        ))
      )}
      <div className="remove-btn">
      {todoItems.some((item) => item.completed) && (
        <button onClick={handleRemoveCompleted}>Remove Completed</button>
      )}
      </div>
    </div>
  );
}

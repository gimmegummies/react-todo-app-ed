import React from "react";
import "./todo.scss";

export default function Todo({ text, todos, todo, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo_item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="todo-btns check-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="todo-btns trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

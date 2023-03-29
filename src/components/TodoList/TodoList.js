import React from "react";
import "./todoList.scss";
import Todo from "../Todo/Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo_container">
      <ul className="todo_list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

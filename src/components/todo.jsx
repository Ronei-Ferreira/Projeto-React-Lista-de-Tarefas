import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <span style={{
          textDecoration: todo.isCompleted ? "line-through" : "none", fontSize: "20px",
        }}>
        {todo.text} ({todo.category})
      </span>
      

      <div>
  <button className="complete" onClick={() => completeTodo(todo.id)}> Completar
  </button>

  <button
    className="remove" onClick={() => removeTodo(todo.id)}>x</button>
</div>
</div>
  );
};

export default Todo;
import React from "react";

// Import Components
import Todo from "./Todo"

const TodoList = (props) => {
  
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map(todo => <Todo todo={todo} setTodos={props.setTodos} todos={props.todos} text={todo.text} key={todo.id}/>)}
      </ul>
    </div>
  )
}

export default TodoList;
import React from "react";

const Todo = (props) => {
  const deleteHandler = () => {
    console.log(props.todo)
    props.setTodos(props.todos.filter(el => el.id !== props.todo.id) )
  }
  return (
    <div className="todo">
      <li className="todo-item">{props.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo;
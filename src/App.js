import React, { useState, useEffect } from 'react';
import './App.css';

// Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status])


  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(el => el.completed === true))
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(el => el.completed === false))
      break;
      default: 
      setFilteredTodos(todos);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gabriel's TODO List!</h1>
      </header>
      <Form 
        inputText={inputText}
        todos={filteredTodos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={filteredTodos}/>
    </div>
  );
}

export default App;

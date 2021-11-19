import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import useTodoState from './components/useTodoState';

function App() {
  const {todos, addTodo, deleteTodo } = useTodoState([])
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={(todoText) => {
        const trimmedText = todoText.trim()

        if (trimmedText.length > 0){
          addTodo(trimmedText)
        }
      }}/>
      <TodoList 
      todos={todos}
      deleteTodo = {deleteTodo}
      
       />
    </div>
  );
}

export default App;

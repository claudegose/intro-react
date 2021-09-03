import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoList2 from "./components/Todolist2";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
        <TodoList2 />
    </div>
  );
}

export default App;

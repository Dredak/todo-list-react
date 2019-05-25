import React from "react";
import TodoList from "./components/todoList/TodoList";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const todos = ["en", "to", "tre"];

const Todo = () => {
  return (
    <>
      <h1>Todo</h1>
      <input type="text" />
      {todos.map(todo => (
        <p>{todo}</p>
      ))}
    </>
  );
};

export default Todo;

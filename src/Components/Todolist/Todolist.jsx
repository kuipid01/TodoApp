/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./todolist.scss";
import Task from "../Task/Task";
const Todolist = ({ todos, tobedisplayed,normalTodos, setTodos, todo,completedTodos }) => {
  // console.log(todos)

  if (tobedisplayed==='all') {
    return (
      <div className="tasks-container">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Task todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />
          ))
        ) : (
          <h1>No Task available here, add task !!</h1>
        )}
  
        {/* <Task task={task} setTask={setTask} /> */}
      </div>
    );
  }
  if (tobedisplayed==='complete') {
    return (
      <div className="tasks-container">
        {completedTodos.length > 0 ? (
          completedTodos.map((todo) => (
            <Task todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />
          ))
        ) : (
          <h1>No Task available here, add task !!</h1>
        )}
  
        {/* <Task task={task} setTask={setTask} /> */}
      </div>
    );
  }
  if (tobedisplayed==='active') {
    return (
      <div className="tasks-container">
        {normalTodos.length > 0 ? (
          normalTodos.map((todo) => (
            <Task todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />
          ))
        ) : (
          <h1>No Task available here, add task !!</h1>
        )}
  
        {/* <Task task={task} setTask={setTask} /> */}
      </div>
    );
  }
};

export default Todolist;

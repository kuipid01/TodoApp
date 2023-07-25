/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./home.scss";
import { FaCheck, FaHeart, FaTrash } from "react-icons/fa";
import {
  AiOutlineAlert,
  AiOutlineCheck,
  AiOutlineFire,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import Task from "../../Components/Task/Task";
import Todolist from "../../Components/Todolist/Todolist";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [tobedisplayed, setTobedisplayed] = useState("all");
  const [normalTodos, setNormalTodos] = useState();
  const [textInput, setTextInput] = useState("");
  const [task, setTask] = useState({
    text: "",
    privacy: true,
    completed: false,
    favourite: false,
  });

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleOption = (e) => {
    console.log("clicked");
    setTask({ ...task, privacy: e.target.value === "priv" ? true : false });
  };
  const handleAddTodo = () => {
    const newTask = { ...task, text: textInput };
 
    setTodos([newTask, ...todos]);
   
    setTextInput("");
  };

  useEffect(() => {
    const activeTodos = todos.filter((todo) => {
      if (todo.completed === true) {
        return todo;
      }
    });
    setCompletedTodos(activeTodos);
    const normaltodos = todos.filter((todo) => {
      if (todo.completed === false) {
        return todo;
      }
    });
    setNormalTodos(normaltodos);
  }, [todos]);

  const handleChangeDisplay = (value) => {
    console.log("clicked");
    if (value === "complete") {
    
      setTobedisplayed("complete");
    }
    if (value === "active") {
    
      setTobedisplayed("active");
    }
    if (value === "all") {
  
      setTobedisplayed("all");
    }
  };
  console.log(tobedisplayed);
  return (
    <div className="main-home">
      <div className="container">
        <div className="left">
          <div className="logo">
            <h1>
              K<span>.</span>do
            </h1>
          </div>
          <ul>
            <li
              onClick={() => handleChangeDisplay("all")}
              className={` ${tobedisplayed === "all" ? 'active' : ''} `}
            >
              <AiOutlineAlert />
              <h1> All</h1>
              <span>{todos.length}</span>
            </li>
            <li
              className={` ${tobedisplayed === "active" ? 'active' : ''} `}
              onClick={() => handleChangeDisplay("active")}
            >
              <AiOutlineFire />

              <h1>Active </h1>
              <span>{todos.length - completedTodos.length}</span>
            </li>
            <li
              className={` ${tobedisplayed === "complete" ? 'active' : ''} `}
              onClick={() => handleChangeDisplay("complete")}
            >
              <AiOutlineCheck />

              <h1>Completed </h1>
              <span>{completedTodos.length}</span>
            </li>
          </ul>
          <div className="adon">
            <span>Chill apps</span>
            Kuipid Designs
          </div>
        </div>
      </div>

      <div className="main">
        <small>Hello ,Human.</small>
        <h1>You've got {todos.length} task(s) ! </h1>

        <div className="add-box">
          <input
            value={textInput}
            onChange={(e) => handleTextChange(e)}
            type="text"
            placeholder="Add A task.."
          />
          <div>
            <select
              onChange={(e) => handleOption(e)}
              name="choices"
              id="choices"
            >
              <option value="private">Choose Privacy Level</option>
              <option value="priv">Private</option>
              <option value="pub">Public</option>
            </select>
            <span onClick={handleAddTodo}>
              <AiOutlinePlus />
            </span>
          </div>
        </div>
        <Todolist
          todos={todos}
          tobedisplayed= {tobedisplayed}
          setTobedisplayed= {setTobedisplayed}
          setTodos={setTodos}
          completedTodos={completedTodos}
          normalTodos={normalTodos}
          setNormalTodos={setNormalTodos}
        />
      </div>
    </div>
  );
};
export default Home;

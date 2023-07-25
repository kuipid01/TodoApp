/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCheck, FaHeart, FaTrash } from "react-icons/fa";
import './task.scss'
const Task = ({todo,setTodos,todos}) => {
 const {text,privacy,completed,favourite} = todo
    // console.log(todos)
    const handleDel = () =>{


      const filtTodo = todos.filter((todo) => todo.text !==text)
      setTodos(filtTodo)
    }
    const handleLike = (textIn,todo) =>{
const updatedTodo = todos.map((todo) => {
 
  if (todo.text===textIn) {
 return   {
      ...todo, favourite:!todo.favourite
    }
  }
  else{
    return todo
  }

}

)

setTodos(updatedTodo)

      //  setTodos([...todos, {...todo, completed:todo.text===text ?!completed :completed}])
     }
  const    handleComplete = ( text) => {
    // console.log(todo)
    const updatedTodos =  todos.map((todo) => {
if (text===todo.text) {
  return {...todo, completed:!todo.completed}
} else {
  return todo
}
    })
  setTodos(updatedTodos)
  }
  return (
    <div className="tasks">
            <div className="task-text">
              <p className={`${completed ? 'complete' : ''}`}>
               {text}
              </p>
            </div>
            <div className="handles">
                <div className={`${completed ? 'complete' : ''}`} onClick={() => handleComplete(todo.text)}>
                  {

                  }
<small>complete</small>
                
              <FaCheck />
              </div>
              <div onClick={handleDel}>
              <small>delete</small>
              <FaTrash />
              </div>
              <div className={`${favourite ? 'fav' : ''}`} onClick={() => handleLike(todo.text,todo)}>
              <small>Favourite</small>
              <FaHeart />
              </div>
            </div>
          </div>
  )
}

export default Task
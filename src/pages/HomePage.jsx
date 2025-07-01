import React, { useState } from 'react'
import NewTask from '../components/NewTask'
import TodoItem from '../components/TodoItem'
const HomePage = () => {

  const [todos, setTodos] = useState([])

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task])
    console.log(todos)
  }
  const deleteTask = (id) => {
    setTodos((prevTodos)=> prevTodos.filter((_,i)=>i !== id))
  }
  const updateTask = (task, id) => {
    setTodos((prevTodos)=> prevTodos.map((t, i)=> i === id ? task : t))
  }
  return (
    <>
      <NewTask addTask={addTask}/>
      <ul className='bg-gray-200 rounded-md shadow-sm p-4'>
        {
          todos.map((todo,i)=>(
            <TodoItem key={i} id={i} todo={todo} deleteTask={deleteTask} updateTask={updateTask}/>
          ))
        }
      </ul>
    </>
  )
}

export default HomePage
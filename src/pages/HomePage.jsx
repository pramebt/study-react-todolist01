import React, { useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { DiVim } from "react-icons/di";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  };

  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    toast.success("Task added successfully!");
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    toast.success("Task deleted successfully!");
  };

  const updateTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    toast.success("Task updated successfully!");
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setUsers(data.slice(0, 10)); // Fetching only the first 10 users
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch tasks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [todos]);

  return (
    <>
      {/* { loading ? <Spinner/> : users.map((user, index) => (
        <div key={index}>
          {user.id}
          {user.title}
        </div>
      ))} */}
      <NewTask addTask={addTask} />
      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((todo, i) => (
              <TodoItem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default HomePage;

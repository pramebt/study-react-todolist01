import React, { useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import TodoItem from "../components/TodoItem";
import TaskFilter from "../components/TaskFilter";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { DiVim } from "react-icons/di";

const HomePage = () => {
  // Load todos from localStorage on component mount
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Calculate counts for each filter
  const counts = {
    all: todos.length,
    pending: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  // Filter todos based on active filter
  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'completed') return todo.completed;
    if (activeFilter === 'pending') return !todo.completed;
    return true; // 'all' filter
  });

  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const addTask = async (task) => {
    setLoading(true);
    const newTask = {
      ...task,
      completed: false // Ensure new tasks are marked as pending
    };
    setTodos((prevTodos) => [...prevTodos, newTask]);
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

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
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
      
      {/* Task Filter */}
      {todos.length > 0 && (
        <TaskFilter 
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          counts={counts}
        />
      )}
      
      {loading ? (
        <Spinner />
      ) : (
        filteredTodos.length > 0 && (
          <ul className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-md shadow-sm p-4">
            {filteredTodos.map((todo, i) => {
              // Find the actual index in the original todos array
              const originalIndex = todos.findIndex(t => t === todo);
              return (
                <TodoItem
                  key={originalIndex}
                  id={originalIndex}
                  todo={todo}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              );
            })}
          </ul>
        )
      )}

      {/* Empty state for filtered results */}
      {!loading && todos.length > 0 && filteredTodos.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-500 text-lg">
            {activeFilter === 'completed' && "No completed tasks yet"}
            {activeFilter === 'pending' && "No pending tasks"}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;

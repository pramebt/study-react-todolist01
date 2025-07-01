import React, { useRef, useState } from "react";
import { MdDelete, MdEdit, MdAccessTime, MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

const TodoItem = (props) => {
  const dialog = useRef();
  const [title, setTitle] = useState(props.todo.title);
  const [editing, setEditing] = useState(false);

  const openModal = (isEditing) => {
    isEditing ? setEditing(true) : setEditing(false);
    dialog.current.showModal();
  };

  const closeModal = () => {
    dialog.current.close();
  };

  const clickOutsideModal = (e) => {
    if (e.target === dialog.current) {
      closeModal();
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (editing) {
      const task = {
        title: title,
        date: props.todo.date,
        completed: props.todo.completed || false,
      };
      props.updateTask(task, props.id);
    } else {
      props.deleteTask(props.id);
    }
    closeModal();
  };

  const toggleComplete = () => {
    const updatedTask = {
      ...props.todo,
      completed: !props.todo.completed
    };
    props.updateTask(updatedTask, props.id);
  };

  const isCompleted = props.todo.completed || false;

  return (
    <>
      <li className={`group relative bg-white rounded-xl border shadow-sm p-6 mt-4 first:mt-0 hover:shadow-lg transition-all duration-300 ${
        isCompleted 
          ? 'border-green-200 bg-green-50' 
          : 'border-amber-100 hover:border-amber-200'
      }`}>
        {/* Left side with number and content */}
        <div className="flex items-start gap-4">
          {/* Number badge */}
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
            isCompleted 
              ? 'bg-gradient-to-br from-green-400 to-green-600' 
              : 'bg-gradient-to-br from-amber-400 to-orange-500'
          }`}>
            <span className="text-white font-bold text-sm">{props.id + 1}</span>
          </div>
          
          {/* Content area */}
          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-lg mb-2 leading-tight break-words ${
              isCompleted 
                ? 'text-green-700 line-through' 
                : 'text-gray-800'
            }`}>
              {props.todo.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-amber-600">
              <MdAccessTime className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{props.todo.date}</span>
            </div>
          </div>
        </div>

        {/* Action buttons - positioned absolutely */}
        <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Complete/Incomplete toggle */}
          <button
            onClick={toggleComplete}
            type="button"
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
              isCompleted 
                ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
          >
            {isCompleted ? (
              <MdCheckCircle className="w-5 h-5" />
            ) : (
              <MdRadioButtonUnchecked className="w-5 h-5" />
            )}
          </button>
          
          <button
            onClick={() => openModal(true)}
            type="button"
            className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 hover:text-amber-700 transition-all duration-200 hover:scale-105"
            title="Edit task"
          >
            <MdEdit className="w-5 h-5" />
          </button>
          <button
            onClick={() => openModal(false)}
            type="button"
            className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all duration-200 hover:scale-105"
            title="Delete task"
          >
            <MdDelete className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isCompleted 
            ? 'bg-gradient-to-r from-green-400 to-green-600' 
            : 'bg-gradient-to-r from-amber-400 to-orange-500'
        }`}></div>
      </li>

      {/* Modal Dialog */}
      <dialog
        onClick={clickOutsideModal}
        ref={dialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-[480px] bg-white border border-amber-200 shadow-2xl backdrop-blur-sm"
      >
        <form onSubmit={submitForm} className="p-8">
          {/* Modal Header */}
          <div className="mb-6">
            <h3 className="font-bold text-2xl text-gray-800 mb-2">
              {editing ? "Edit Task" : "Delete Task"}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
          </div>

          {/* Modal Content */}
          <div className="mb-8">
            {editing ? (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Description
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl py-4 px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-lg"
                  maxLength={50}
                  placeholder="Enter your task..."
                  autoFocus
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="text-sm text-gray-500 text-right">
                  {title.length}/50 characters
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-700 font-medium">
                  Are you sure you want to delete this task? This action cannot be undone.
                </p>
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="flex justify-end gap-3">
            <button
              onClick={closeModal}
              type="button"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={
                editing
                  ? "px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  : "px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              }
            >
              {editing ? "Save Changes" : "Delete Task"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TodoItem;

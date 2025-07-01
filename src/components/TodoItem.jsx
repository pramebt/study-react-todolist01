import React, { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const TodoItem = (props) => {
  const dialog = useRef();
  const [title,setTitle] = useState(props.todo.title)
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
        date:props.todo.date,
      };
      props.updateTask(task, props.id);
    }else{
      props.deleteTask(props.id);
    }
    closeModal();
  };
  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 text-center content-center">
            {props.id + 1}
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => openModal(false)}
            type="button"
            className="todo-btn"
          >
            <MdDelete />
          </button>
          <button
            onClick={() => openModal(true)}
            type="button"
            className="todo-btn"
          >
            <MdEdit />
          </button>
        </div>
      </li>

      <dialog
        onClick={clickOutsideModal}
        ref={dialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md w-[480px]"
      >
        <form onSubmit={submitForm} className="p-6">
          <h3 className="font-semibold text-xl">
            {editing ? "Edit Task" : "Do you want to Delete"}
          </h3>
          <div className="mt-2">
            {editing ? (
              <input
                type="text"
                className="focus:outline-none w-full border rounded py-2 px-3"
                maxLength={30}
                placeholder="Type something here..."
                auto
                focus
                required
                
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              "This will permanently delete this task."
            )}
          </div>
          <div className="mt-12 text-end space-x-2">
            <button
              onClick={closeModal}
              type="button"
              className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              type="submit"
              className={
                editing
                  ? "rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
                  : "rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              }
            >
              {editing ? "Confirm" : "Delete"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TodoItem;

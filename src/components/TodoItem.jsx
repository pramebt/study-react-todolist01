import React,{useRef} from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const TodoItem = (props) => {
    const dialog = useRef()
    const openModal = () => {
        dialog.current.showModal();
    }
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
          <button onClick={openModal} type="button" className="todo-btn">
            <MdDelete />
          </button>
          <button onClick={openModal} type="button" className="todo-btn">
            <MdEdit />
          </button>
        </div>
      </li>
      <dialog ref={dialog}>
        <form className="">
          <h3>Modal</h3>
        </form>
      </dialog>
    </>
  );
};

export default TodoItem;

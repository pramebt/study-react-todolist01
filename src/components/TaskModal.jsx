import React, { useRef, useState } from "react";

const TaskModal = ({ isOpen, onClose, onConfirm, task, isEditing = false }) => {
  const dialog = useRef();
  const [title, setTitle] = useState(task?.title || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTask = {
        title: title,
        date: task.date,
      };
      onConfirm(updatedTask);
    } else {
      onConfirm();
    }
    onClose();
  };

  const handleClickOutside = (e) => {
    if (e.target === dialog.current) {
      onClose();
    }
  };

  // Update title when task changes
  React.useEffect(() => {
    if (task?.title) {
      setTitle(task.title);
    }
  }, [task?.title]);

  return (
    <dialog
      ref={dialog}
      open={isOpen}
      onClick={handleClickOutside}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-[480px] bg-white border border-amber-200 shadow-2xl backdrop-blur-sm"
    >
      <form onSubmit={handleSubmit} className="p-8">
        {/* Modal Header */}
        <div className="mb-6">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">
            {isEditing ? "Edit Task" : "Delete Task"}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
        </div>

        {/* Modal Content */}
        <div className="mb-8">
          {isEditing ? (
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
            onClick={onClose}
            type="button"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={
              isEditing
                ? "px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                : "px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            }
          >
            {isEditing ? "Save Changes" : "Delete Task"}
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default TaskModal; 
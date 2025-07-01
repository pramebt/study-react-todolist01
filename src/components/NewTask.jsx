import React, { useState } from "react";

const NewTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    setIsSubmitting(true);
    
    const task = {
      title: title.trim(),
      date: new Date().toLocaleString(),
      id: Date.now()
    };
    
    addTask(task);
    setTitle("");
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={submitForm} className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-1">
            New Task
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 p-4 shadow-lg">
          <div className="flex gap-3">
            <input
              id="title"
              type="text"
              className="flex-1 px-4 py-3 text-gray-800 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200"
              maxLength={50}
              placeholder="Enter task description..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              autoFocus
              disabled={isSubmitting}
            />
            
            <button
              type="submit"
              disabled={isSubmitting || !title.trim()}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 shadow-md hover:shadow-lg'
              }`}
            >
               
                <span className="flex items-center gap-2">
                  Add Task
                </span>

            </button>
          </div>
        </div>
        
        {title.length > 0 && (
          <div className="flex justify-between items-center px-2">
            <div className="text-sm font-medium text-amber-700">
              {title.length < 30 ? "Good length" : title.length < 45 ? "Getting long" : "Almost at limit"}
            </div>
            <div className="text-sm font-mono text-amber-600 bg-amber-100 px-2 py-1 rounded">
              {title.length}/50
            </div>
          </div>
        )}
        
        {title.length === 0 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-amber-600 text-sm bg-amber-100 px-3 py-2 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Type your task above
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewTask;

import React from "react";

const AboutPage = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="font-bold text-2xl mb-3">About</h1>
      <p>
        This application is a simple Todo List designed to help you manage your
        daily tasks. You can easily add, remove, and keep track of your todos.
        All todo data is stored temporarily in your browser's memory (local
        state), which means your tasks are not sent anywhere and will be lost if
        you refresh or close the page. For permanent storage, you can further
        develop the app to connect with a database or use localStorage in the
        future.
      </p>
    </div>
  );
};

export default AboutPage;

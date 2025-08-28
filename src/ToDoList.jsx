import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Write Code",
    "Fix Errors",
    "Test the Program",
  ]);
  const [newTask, setNewTask] = useState("");

  const inputChange = (e) => setNewTask(e.target.value);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updated = [...tasks];
      [updated[index], updated[index - 1]] = [
        updated[index - 1],
        updated[index],
      ];
      setTasks(updated);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updated = [...tasks];
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index],
      ];
      setTasks(updated);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 p-4">
      {/* Card takes most of the screen width on mobile, but max width on desktop */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          TO - DO - LIST
        </h1>

        {/* Input Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <input
            type="text"
            value={newTask}
            placeholder="Enter the Task"
            onChange={inputChange}
            className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition w-full sm:w-auto"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ol className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 shadow"
            >
              <span className="text-gray-700 font-medium break-words flex-1">
                {task}
              </span>
              <div className="flex gap-2 ml-3">
                <button
                  onClick={() => removeTask(index)}
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => moveUp(index)}
                  className="bg-green-500 text-white px-2 py-1 text-sm rounded-md hover:bg-green-600 transition"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveDown(index)}
                  className="bg-orange-500 text-white px-2 py-1 text-sm rounded-md hover:bg-orange-600 transition"
                >
                  ↓
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;


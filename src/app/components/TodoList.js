// // components/TodoList.js

// import { useState } from "react";

// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const handleToggleComplete = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-start justify-center p-4">
//       <div className="w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
//         <div className="flex mb-4">
//           <input
//             type="text"
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//             placeholder="Add a new task"
//             className="flex-1 p-2 rounded-l bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleAddTask}
//             className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
//           >
//             Add Task
//           </button>
//         </div>
//         <ul className="space-y-2">
//           {tasks.map((task, index) => (
//             <li
//               key={index}
//               className={`flex justify-between items-center p-2 rounded bg-gray-800 ${
//                 task.completed ? "line-through" : ""
//               }`}
//             >
//               <span>{task.text}</span>
//               <div>
//                 <button
//                   onClick={() => handleToggleComplete(index)}
//                   className=" px-1 py-1 rounded hover:bg-gray-300"
//                 >
//                   {task.completed ? "Undo" : "✅"}
//                 </button>
//                 <button
//                   onClick={() => handleDeleteTask(index)}
//                   className=" px-1 py-1 rounded hover:bg-gray-300"
//                 >
//                   ❌
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
// components/TodoList.js

import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 p-2 rounded-l bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 rounded bg-gray-800 ${
                task.completed ? "line-through" : ""
              }`}
            >
              <span>{task.text}</span>
              <div>
                <button
                  onClick={() => handleToggleComplete(index)}
                  className=" px-1 py-1 rounded hover:bg-gray-300"
                >
                  {task.completed ? "Undo" : "✅"}
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className=" px-1 py-1 rounded hover:bg-gray-300"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
          <div className="flex-col items-center justify-center">
            <div className="flex justify-center items-center  pt-8">
              <button
                onClick={togglePanel}
                className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600 z-10 mr-2"
              >
                {isPanelOpen ? "Close" : "See Example"}
              </button>

              <button
                onClick={() => alert("add call to api")}
                disabled={tasks.length === 0}
                className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 z-10 ml-2 ${
                  tasks.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Make Song
              </button>
            </div>
            <p className="text-gray-500 mt-4 text-center">
              {tasks.length === 0
                ? "Add items to the todo list to get started"
                : "Generate a song from you todo list"}
            </p>
          </div>
        </ul>
      </div>
      <div
        className={`fixed z-10 top-0 right-0 w-full md:w-1/2 h-full bg-gray-900 text-white transform transition-transform duration-300 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Sliding Panel</h2>
          <p>Content of the sliding panel goes here.</p>
          <button
            onClick={togglePanel}
            className="absolute top-4 right-4 text-white p-2 rounded hover:bg-gray-300 z-10"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

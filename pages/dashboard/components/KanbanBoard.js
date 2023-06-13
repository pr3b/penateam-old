import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import axios from 'axios';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task - 1', category: 'todo' },
    { id: 2, title: 'Task - 2', category: 'todo' },
    { id: 3, title: 'Task - 3', category: 'inProgress' },
    { id: 4, title: 'Task - 4', category: 'inProgress' },
    { id: 5, title: 'Task - 5', category: 'inProgress' },
    { id: 6, title: 'Task - 6', category: 'done' },
  ]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  //Send email to admin when user created request
  //Send email to user when category changed by admin

  const sendEmailNotification = async (taskTitle, category) => {
    const emailData = {
      to: 'arista@penateam.com', // Replace with the recipient email address
      from: 'hello@penateam.com', // Replace with your sender email address
      subject: 'Penateam Task Update',
      text: `Task "${taskTitle}" moved to "${category}" category.`,
    };

    try {
      const response = await axios.post("/api/mail/email-notification", emailData);
      if(response.status){
        console.log("Email Notification sent Successfully")
      } else {
        console.error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
    }
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, category) => {
    const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, category };
      }
      return task;
    });
    setTasks(updatedTasks);
    const updatedTask = updatedTasks.find((task) => task.id === taskId);
    sendEmailNotification(updatedTask.title, category);
  };

  return (
    <div className="flex w-screen h-screen p-10 space-x-4 overflow-auto text-gray-700">
      <div className="flex flex-col flex-shrink-0 w-64 bg-gray-200 border border-gray-300">
        <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white">
          <span className="block text-sm font-medium">Requests</span>
          <button className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="flex flex-col px-2 pb-2 overflow-auto"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, 'todo')}
        >
          {tasks
            .filter((task) => task.category === 'todo')
            .map((task) => (
              <div
                key={task.id}
                className="p-6 mt-2 border border-gray-300 bg-white cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                {task.title}
              </div>
            ))}
            <AddTaskForm onAddTask={handleAddTask}/>
        </div>
      </div>

      <div className="flex flex-col flex-shrink-0 w-64 bg-gray-200 border border-gray-300">
        <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white">
          <span className="block text-sm font-medium">In Progress</span>
          <button className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="flex flex-col px-2 pb-2 overflow-auto"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, 'inProgress')}
        >
          {tasks
            .filter((task) => task.category === 'inProgress')
            .map((task) => (
              <div
                key={task.id}
                className="p-6 mt-2 border border-gray-300 bg-white cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                {task.title}
              </div>
            ))}
            <AddTaskForm onAddTask={handleAddTask}/>
        </div>
      </div>

      <div className="flex flex-col flex-shrink-0 w-64 bg-gray-200 border border-gray-300">
        <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white">
          <span className="block text-sm font-medium">Done</span>
          <button className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="flex flex-col px-2 pb-2 overflow-auto"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, 'done')}
        >
          {tasks
            .filter((task) => task.category === 'done')
            .map((task) => (
              <div
                key={task.id}
                className="p-6 mt-2 border border-gray-300 bg-white cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                {task.title}
              </div>
            ))}
            <AddTaskForm onAddTask={handleAddTask}/>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;

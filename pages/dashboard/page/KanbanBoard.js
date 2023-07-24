import React, { useEffect, useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { categoryDone, categoryInProgress, categoryRequest } from '@/utils/category';

const CardSkeleton = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-md animate-pulse">
      <div className="h-6 bg-gray-300 mb-4"></div>
      <div className="h-4 bg-gray-300 mb-4"></div>
      <div className="h-4 bg-gray-300 w-1/3"></div>
    </div>
  );
};

const KanbanBoard = () => {
  const {data: session, status} = useSession()
  const userSessionEmail = session?.user?.email
  const [tasks, setTasks] = useState([]);
  const [isLoadDataDone, setIsLoadDataDone] = useState(true)
  const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);

  const openAddTaskFormModal = () => {
    setIsAddTaskFormOpen(true);
  };

  const closeAddTaskFormModal = () => {
    setIsAddTaskFormOpen(false);
  };

  const mapTaskOrTasks = (taskOrTasks) => {
    if(Array.isArray(taskOrTasks)){
      return taskOrTasks.map((originalObject) => {
        const mappedObject = {
          id: originalObject.id,
          title: originalObject.Title,
          category: originalObject.category,
        };

        return mappedObject;
      });
    } else {
      return {
        id: taskOrTasks.id,
        title: taskOrTasks.Title,
        category: taskOrTasks.category,
      }
    }
  }

  useEffect(() => {
    const loadTask = async () => {
      try{
        setIsLoadDataDone(false)
        const res = await fetch("/api/task");
        const data = await res.json();
        const mappedArray = mapTaskOrTasks(data.tasks);
        setTasks(mappedArray);
        setIsLoadDataDone(true)
      } catch(error){
        console.error("Error while loading data:", error);
      }
    };
    loadTask();
  }, [])

  const handleAddTask = (newTask) => {
    const mappedTask = mapTaskOrTasks(newTask)
    setTasks((prevTasks) => [...prevTasks, mappedTask]);
  };

  const sendEmailNotification = async (taskTitle, category) => {
    const emailData = {
      to: userSessionEmail, 
      from: 'hello@penateam.com',
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
    const taskId = e.dataTransfer.getData('text/plain');
    const updateTask = async () => {
      return axios.put("/api/task", {id: taskId, category})
        .then((res) => {
          if(res.status >= 200 && res.status < 300){
            const updatedTask = tasks.map((task) => {
              if(task.id === taskId){
                return {...task, category};
              }
              return task;
            });
            setTasks(updatedTask);
            if(category == categoryInProgress){
              sendEmailNotification(updatedTask.title, category);
            }
          } else {
            console.error("Error while updating data:", res)
          }
        }).catch((error) => {
          console.error("Error while updating data:", error);
        })
    };
    updateTask();
  };

  return (
    <>
      <div className="ml-3 mt-2 mb-6 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <div
            className="text-sm leading-2 text-gray-900 sm:text-3xl sm:leading-10 break-normal sm:truncate"
          >
            Request
          </div>
        </div>
      </div>
      <div className="flex w-100vw h-screen p-3 space-x-4 overflow-auto text-gray-700 bg-none">
        <div className="flex flex-col flex-shrink-0 w-72 bg-white p-4 rounded-xl">
          <div className="flex items-center justify-between flex-shrink-0 h-10 p-4 bg-gray-100 rounded-md">
            <span className="block text-sm text-gray-400 font-medium">Requests</span>
            <button className="flex items-center justify-center w-6 h-6">
              <svg
                className="w-5 h-5 text-gray-400"
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
            className="flex mt-4 flex-col w-full pb-2 overflow-auto h-screen"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, categoryRequest)}
          >
            {isLoadDataDone ? (
              tasks.filter((task) => task.category === categoryRequest)
              .map((task) => (
                  <div
                    key={task.id}
                    className="mt-2 rounded-md p-4 bg-gray-100 cursor-pointer text-sm text-gray-400"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    {task.title}
                  </div>
                
                ))): (
                  <CardSkeleton />
                )}
              <button 
                className="mt-5 bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
                onClick={openAddTaskFormModal}
                >
                Add new Request
              </button>
              {isAddTaskFormOpen && (
                <AddTaskForm onAddTask={handleAddTask} closeModal={closeAddTaskFormModal} />
              )}
          </div>
        </div>

        <div className="flex flex-col flex-shrink-0 w-72 bg-white p-4 rounded-xl">
          <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 bg-gray-100 rounded-md">
            <span className="block text-sm text-gray-400 font-medium">In Progress</span>
            <button className="flex items-center justify-center w-6 h-6">
              <svg
                className="w-5 h-5 text-gray-400"
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
            className="flex mt-4 flex-col w-full pb-2 overflow-auto h-screen"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, categoryInProgress)}
          >
            {isLoadDataDone ? (
              tasks
              .filter((task) => task.category === categoryInProgress)
              .map((task) => (
                <div
                  key={task.id}
                  className="mt-2 rounded-md p-4 bg-gray-100 cursor-pointer text-sm text-gray-400"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  {task.title}
                </div>
              ))) : (
                <CardSkeleton />
              )}
          </div>
        </div>

        <div className="flex flex-col flex-shrink-0 w-72 bg-white p-4 rounded-xl">
          <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 bg-gray-100 rounded-md">
            <span className="block text-sm text-gray-400 font-medium">Done</span>
            <button className="flex items-center justify-center w-6 h-6">
              <svg
                className="w-5 h-5 text-gray-400"
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
            className="flex flex-col mt-4 w-full pb-2 overflow-auto h-screen"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, categoryDone)}
          >
            {isLoadDataDone ? (
              tasks
              .filter((task) => task.category === categoryDone)
              .map((task) => (
                <div
                  key={task.id}
                  className="p-4 mt-2 rounded-md bg-gray-100 cursor-pointer text-sm text-gray-400"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  {task.title}
                </div>
              ))):(
                <CardSkeleton />
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;

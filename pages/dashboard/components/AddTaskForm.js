import React, { useState } from 'react';
import { categoryDone, categoryInProgress, categoryRequest } from '@/utils/category';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const LoadingPlaceholder = () => {
  return (
    <div className="flex justify-center items-center h-6">
      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600"></span>
    </div>
  );
};

const AddTaskForm = ({ onAddTask, closeModal }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const {data: session, status} = useSession();
  const userEmailNow = session?.user?.email;
  const [addTaskClicked, setaddTaskClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  //Send email notification
  const sendEmailNotificationUserCreateRequest = async(taskTitle, toEmail) => {
    const emailData = {
      to: toEmail,
      from: "hello@penateam.com",
      subject: "Request Information",
      text: `New Task ${taskTitle} from ${userEmailNow}`,
    };

    try {
      const res = await axios.post("/api/mail/email-notification", emailData);
      if(res.status){
        console.log("Email notification create Request sent successfully")
      } else {
        console.error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setaddTaskClicked(true);

    if (taskTitle.trim() === '') {
      setErrorMessage('Please enter a task title');
      setaddTaskClicked(false);
      return;
    }

    try {
      const newTask = {
        title: taskTitle,
        category: categoryRequest,
      };
      const res = await axios.post("/api/task", newTask);
      if(res.status >= 200 && res.status < 300){
        const createdTask = res.data.task;
        onAddTask(createdTask);
        sendEmailNotificationUserCreateRequest(taskTitle, userEmailNow);
        sendEmailNotificationUserCreateRequest(taskTitle, "hello@penateam.com");
        setTaskTitle("");
        setaddTaskClicked(false);
      } else {
        console.error("Error while creating data:", res);
      }
    } catch (error) {
      console.error("Error while creating data:", error);
    }
    closeModal(true)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-40 z-50">
      <div className="fixed py-3 sm:max-w-xl sm:mx-auto items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl mb-5 font-semibold">Add new Request Form</h1>
            </div>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className="peer h-8 min-h-[40px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yellow-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    id="title" 
                    type="text"
                    value={taskTitle}
                    onChange={handleInputChange}
                  ></textarea>
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Request Title
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-96">
                  <div className="relative w-full min-w-[200px]">
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      id="request" 
                      type="text"
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Request Description
                    </label>
                  </div>
                </div>
              </div>
             
              <div className="relative">
                {errorMessage && <p className="text-red-500 text-xs italic mb-2">{errorMessage}</p>}
                <button 
                  className="bg-yellow-500 text-white rounded-md px-2 py-1"
                  type="submit"
                >
                  {addTaskClicked ? <LoadingPlaceholder />: "Add Task"}
                </button>
                <button 
                  className="bg-yellow-500 text-white rounded-md px-2 py-1 m-5"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;

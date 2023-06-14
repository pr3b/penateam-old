import React, { useState } from 'react';
import { categoryDone, categoryInProgress, categoryRequest } from '@/utils/category';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const AddTaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const {data: session, status} = useSession();
  const userEmailNow = session?.user?.email

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  //Send email notification
  const sendEmailNotificationUserCreateRequest = async(taskTitle, userEmail) => {
    const emailData = {
      to: userEmailNow,
      from: "hello@penateam.com",
      subject: "Penateam Task Update",
      text: `New Task ${taskTitle} from ${userEmail}`,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.trim() === '') {
      return;
    }

    // Generate a unique ID for the new task
    const taskId = Date.now();

    // Create a new task object
    const newTask = {
      id: taskId,
      title: taskTitle,
      category: categoryRequest,
    };

    // Pass the new task to the parent component
    onAddTask(newTask);
    sendEmailNotificationUserCreateRequest(taskTitle, userEmailNow)

    // Reset the form input
    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

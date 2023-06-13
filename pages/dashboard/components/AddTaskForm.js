import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

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
      category: 'todo',
    };

    // Pass the new task to the parent component
    onAddTask(newTask);

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

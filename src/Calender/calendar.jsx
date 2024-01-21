import React, { useState } from 'react';
import './App.css';

function Calendar() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({
    date: '',
    title: '',
    startTime: '',
    endTime: '',
    category: 'personal', // default category
    description: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput({ ...taskInput, [name]: value });
  };

  const addTask = () => {
    // Check for overlapping events
    const overlap = tasks.some(task => task.date === taskInput.date &&
      ((taskInput.startTime >= task.startTime && taskInput.startTime < task.endTime) ||
      (taskInput.endTime > task.startTime && taskInput.endTime <= task.endTime)));

    if (overlap) {
      setError('Cannot add overlapping events.');
      return;
    }

    if (taskInput.date && taskInput.title) {
      setTasks([...tasks, taskInput]);
      setTaskInput({
        date: '',
        title: '',
        startTime: '',
        endTime: '',
        category: 'personal',
        description: ''
      });
      setShowForm(false);
      setError('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const renderTasks = (date) => {
    return tasks
      .filter(task => task.date === date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime))
      .map((task, index) => (
        <div key={index} className={`task-summary ${task.category}`} onClick={() => setSelectedTask(task)}>
          <span>{task.title}</span>
          <span>{task.startTime} - {task.endTime}</span>
        </div>
      ));
  };

  const renderCalendar = () => {
    const today = new Date();
    const startDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push(
        <div key={i} className="calendar-day">
          <div className="date">{i}</div>
          <div className="tasks">{renderTasks(date)}</div>
        </div>
      );
    }

    return days;
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1>Task Calendar</h1>
      {error && <div className="error">{error}</div>}
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Close' : 'Add Task'}</button>
      {showForm && (
        <div className="task-form">
          <input
            type="date"
            name="date"
            value={taskInput.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={taskInput.title}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="startTime"
            value={taskInput.startTime}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="endTime"
            value={taskInput.endTime}
            onChange={handleInputChange}
          />
          <select
            name="category"
            value={taskInput.category}
            onChange={handleInputChange}
          >
            <option value="personal">Personal</option>
            <option value="professional">Professional</option>
          </select>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={taskInput.description}
            onChange={handleInputChange}
          />
          <button onClick={addTask}>Save Task</button>
        </div>
      )}
      <div className="calendar">{renderCalendar()}</div>
      <div className="agenda">
        <h2>Agenda</h2>
        {tasks.map((task, index) => (
          <div key={index} className={`agenda-item ${task.category}`}>
            <span>{task.date}: {task.title}</span>
            <span>{task.startTime} - {task.endTime}</span>
            <span>{task.category}</span>
            <span>{task.description}</span>
            <button onClick={() => deleteTask(index)}>Completed</button>
          </div>
        ))}
      </div>
      {selectedTask && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedTask.title}</h3>
            <p><strong>Date:</strong> {selectedTask.date}</p>
            <p><strong>Time:</strong> {selectedTask.startTime} - {selectedTask.endTime}</p>
            <p><strong>Category:</strong> {selectedTask.category}</p>
            <p><strong>Description:</strong> {selectedTask.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
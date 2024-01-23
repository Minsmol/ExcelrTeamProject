import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function Calendar() {
  //UserState to hold our inputs
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

    const invalidTime = taskInput.startTime >= taskInput.endTime;
    if (overlap) {
      setError('In this time another Event is assigned. Please change the time');
      return;
    }else if(invalidTime){
       setError('Invalid time');
       return;
    }

    if (taskInput.date && taskInput.title && taskInput.title.length <= 5) {
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
    } else {
      setError('Title cannot exceed 5 characters');
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
      <nav>
      <h1>Task Calendar</h1>
      </nav>
      {error && <div className="error">{error}</div>}
      <button class="btn btn-success bt-lg" onClick={() => setShowForm(!showForm)}>{showForm ? 'Close' : 'Add Task'}</button>
      {showForm && (
        <div className="task-form">

          <div class="form-group row">
            <label for="date" class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-3">
              <input type='date' name='date' class="form-control" 
              value={taskInput.date} onChange={handleInputChange} />
            </div>
          </div>


          <div class="form-group row">
            <label for="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" name='title' placeholder="title" 
              value={taskInput.title} onChange={handleInputChange} />
            </div>
          </div>


          <div class="form-group row">
            <label for="starttime" class="col-sm-2 col-form-label">Start Time</label>
            <div class="col-sm-3">
              <input type="time" class="form-control" name="startTime" placeholder="start time" 
              value={taskInput.startTime} onChange={handleInputChange} />
            </div>
          </div>


          <div class="form-group row">
            <label for="endtime" class="col-sm-2 col-form-label">End Time</label>
            <div class="col-sm-3">
              <input type="time" class="form-control" name="endTime" placeholder="end time" 
              value={taskInput.endTime} onChange={handleInputChange} />
            </div>
          </div>


          <div class="form-group row">
            <label for="category" class="col-sm-2 col-form-label"> category</label>
            <div class="col-sm-3">
              <select class="form-select" aria-label="Default select example" name="category"
              value={taskInput.category} onChange={handleInputChange}>
                
                <option value="personal">Personal</option>
                <option value="professional">Professional</option>
              </select>
            </div>
          </div>


          <div class="form-group row">
            <label for="description" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" name="description" placeholder="Enter description of the task" 
              value={taskInput.description} onChange={handleInputChange} />
            </div>
          </div>
          

          <div class="form-group row">
          <div class="col-sm-5">
          <button onClick={addTask} class="btn btn-success bt-lg">Save Task</button>
          </div>
          </div>
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
            <button onClick={() => deleteTask(index)} class="btn btn-warning">Completed</button>
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
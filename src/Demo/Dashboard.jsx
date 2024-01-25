import React, { useState } from 'react';
import './dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Addtask from './Pages/Addtask.jsx';
import Logout from './pages/Logout.jsx';



const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("this are tasks" ,tasks)
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

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard tasks={tasks} />} />
          <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
          <Route path="/addtask" element={<Addtask tasks={tasks} setTasks={setTasks} taskInput={taskInput} setTaskInput={setTaskInput} showForm={showForm} setShowForm={setShowForm} error={error} setError={setError} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

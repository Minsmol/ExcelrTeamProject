import "./Dashboard.css";
import React, { useEffect } from "react";

const Dashboard = (props) => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards ">
        <div
          className="card"
          style={{ width: "100%", height: "50vh", backgroundColor: "fuchsia" }}
        >
          <div className="card-body">
            <h3>PENDING TASKS</h3>
            <div className="d-flex gap-2 flex-wrap">
              {/* all cards are here  */}
              {
                props.tasks && 
                    props.tasks.map(task => (
               <div className="card bg-info px-4 " style={{ width: "280px" }}>
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between">
                    <h5 className="fw-bolder">{task.title}</h5>
                    <p>Date:{task.date}</p>
                  </div>
                  <p className="card-text">{task.description}</p>
                </div>
                <ul className="d-flex  ">
                  <li className="list-group-item px-1">{task.category}</li>
                  <li className="list-group-item px-1">ST:{task.startTime}</li>
                  <li className="list-group-item px-1">ET:{task.endTime}</li>
                </ul>
              </div>
                    ))
                
              }

              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

// eslint-disable-next-line no-unused-vars
import React from "react"
import './Dashboard.css'

function Home(){

    return(
            <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL TASKS</h3>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPLETED TASKS</h3>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PENDING TASKS</h3>
                </div>
                <h1>33</h1>
            </div>
        </div>
    </main>

        
        
    )

}
export default Home
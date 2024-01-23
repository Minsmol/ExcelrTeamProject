import React from 'react'
import './Home.scss'
import Login from './Login/Login'
import Register from './Register/Register'
import  Calendar from './Calender/calendar'
import Dashboard from './Dashboard/Dashboard'
import Addtask from './Dashboard/Addtask'


//Import React react router dom
import {createBrowserRouter,
RouterProvider  } from 'react-router-dom'

//Lets create a router
const router=createBrowserRouter([
    {
        path:'/',element:<div><Login/></div>

    },
    {
        path:'/register',element:<div><Register/></div>

    },
    {
        path:'/calender',element:<div>< Calendar/></div>

    },
    {
        path:'/dashboard',element:<div><Dashboard/></div>
    },
    {
        path:'/addtask', element:<div><Addtask/></div>
    }
   
    

])

function Home(){
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )

}
export default Home
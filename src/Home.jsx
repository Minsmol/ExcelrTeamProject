import React from 'react'
import './Home.scss'
import Login from './Login/Login'
import Register from './Register/Register'
import Calendar from './Calender/calendar'

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
        path:'/calendar',element:<div><Calendar/></div>

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
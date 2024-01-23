import React,{useEffect, useState} from "react";
import './Login.css'

import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'

//import our assests
import video from '../LoginAssests/video.mp4'
import logo from '../LoginAssests/logo.jpg'

//Imported icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
    //UseState Hook to store 
    const [loginUserName,setLoginUserName]=useState('')
    const [loginPassword,setLoginPassword]=useState('')
    const navigateTo=useNavigate()

    //Let us now show the message to the user
    const [loginStatus,setLoginStatus]=useState('')
    const [statusHolder,setstatusHolder]=useState('message')


    //OnClick Let us get what the user has entered
    const loginUser=(e)=>{
        //Lets prevent submitting
        e.preventDefault();
        //We shall require Axios to create an API that connects to the server
        Axios.post('http://localhost:3002/login',{
            //create variable to send to the server through the route
         
            LoginUserName:loginUserName,
            LoginPassword:loginPassword
        }).then((response)=>{
           console.log()
           //I want to catch the response first-We have data successfully from the database and we can catch an error if 
           //credentials are wrong.
           if(response.data.message || loginUserName == '' || loginPassword == ''){
            //if credentials dont match
            navigateTo('/') //so we shall navigate to the same login page
            setLoginStatus('Credentials Dont Exist!')
           }
           else{
            navigateTo('/dashboard') //if the credentials match we shall navigate to dashboard
           }
        })
    }

    useEffect(()=>{
        if(loginStatus !== ''){
            setstatusHolder('showMessage') //show message
            setTimeout(()=>{
            setstatusHolder('message')  //hide it after 4s

            },4000)
        }
        

    },[loginStatus])
    
    //lets clear the form on submit
    const onSubmit =()=>{
        setLoginUserName('')
        setLoginPassword('')

    }




    return (
        <div className="loginPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">CREATE YOUR TO DO TASK </h2>
                        <p>For Better time Management and success!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}>
                            <button className="btn">Sign Up</button>
                        </Link>
                    </div>

                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>
                        <div className="inputDev">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' placeholder="Enter Username"
                                 onChange={(event)=>{
                                    setLoginUserName(event.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className="inputDev">
                        <label htmlFor="Password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' placeholder="Enter Password"
                                 onChange={(event)=>{
                                    setLoginPassword(event.target.value)
                                }}/>
                            </div>

                        </div>
                        <button type="submit" className="btn flex" onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <span className="forgotPassword">
                            Forgot Your Password?<a href="Click Here">Click Here</a>

                        </span>



                    </form>
                </div>

            </div>
        </div>
    )

}
export default Login;
import React, {useState}from "react";
import './Register.css'

import { Link, useNavigate} from "react-router-dom";
import Axios from 'axios'

//import our assests
import video from '../LoginAssests/video.mp4'
import logo from '../LoginAssests/logo.jpg'

//Imported icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
    //UseState to hold our inputs
    const [email,setEmail]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const navigateTo=useNavigate()

    //OnClick Let us get what the user has entered
    const createUser=(e)=>{
        e.preventDefault()
        //We shall require Axios to create an API that connects to the server
        Axios.post('http://localhost:3002/register',{
            //create variable to send to the server through the route
            Email:email,
            UserName:userName,
            Password:password
        }).then(()=>{
            //On register Let us redirect the user to the login Page
            navigateTo('/')

            //Let us clear the fields too
            setEmail('')
            setUserName('')
           
            
        })
    }



    return (
        <div className="registerPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop/>

                    <div className="textDiv">
                        <h2 className="title"> CREATE YOUR TO DO TASK </h2>
                        <p>For Better time Management and success!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Have an account?</span>
                        <Link to={'/'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>

                </div>



                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Let Us Know You</h3>
                    </div>

                    <form action="" className="form grid">
                        
                        <div className="inputDev">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon'/>
                                <input type="email" id='email' placeholder="Enter Email"
                                onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className="inputDev">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' placeholder="Enter Username"
                                 onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className="inputDev">
                        <label htmlFor="Password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' placeholder="Enter Password"
                                 onChange={(event)=>{
                                    setPassword(event.target.value)
                                }}/>
                            </div>

                        </div>
                        <button type="submit" className="btn flex" onClick={createUser}>
                            <span>Register</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        



                    </form>
                </div>

            </div>
        </div>
    )

}
export default Register;
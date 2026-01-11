import React, {useContext, useState} from 'react';
import axiosClient from "../service/axios_client";
import {useStateContext} from "../contexts/ContextProvider";
import {replace, useNavigate} from 'react-router-dom'
//import routes from "../routes.jsx";

function Login(props) {
    const navigate = useNavigate();

    const [username, setUsername]= useState()
    const [password, setPassword]= useState()

    const {setUser,setToken} = useStateContext()

    const handleSubmit = (e)=>{
        console.log('help')
        e.preventDefault()
        const payload = {
            'username':username,
            'password':password
        }
        console.log(payload)
       axiosClient.post('v1/login',payload)
           .then(({data})=>{
               setUser(data.user)
               setToken(data.token)
               console.log(data)
               if (data.user.user_type == 'student'){
                   console.log('redirect')
                   navigate(`/student/${data.user.reg_no}`,{replace:true})
               }else if (data.user.user_type == 'staff'){
                   console.log('redirect')
                   navigate(`/staff/${data.user.reg_no}`,{replace:true})
               }

           })
    }
    return (
        <div>
            <p>
                Login Page
            </p>
            <form >
                <input value={username} onChange={(usernametxt)=>{setUsername(usernametxt.target.value)}} name={'username'} type="text"/>
                <input value={password} onChange={(passwordtxt)=>{setPassword(passwordtxt.target.value)}} name={'password'} type="text"/>
                <button style={{backgroundColor:'red'}} onClick={handleSubmit}>login</button>
            </form>
        </div>
    );
}

export default Login
import React, {useState, useEffect} from "react";
import { registerUser } from "../api";



const Register = ({setToken, navigate}) => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if (results.success) {
            setToken(results.data.token)
            window.localStorage.setItem('token', results.data.token)
            navigate('/profile')
        } else {
            console.log(results.error.message)
        }
    }

    return (
        <form id="registerform" onSubmit={(event) => {
        event.preventDefault()
        handleSubmit()
        }}>
            <input type='text' placeholder="username"
            onChange={(event) => setUsername(event.target.value)}/>
            <input type='password' placeholder="password"
            onChange={(event) => setPassword(event.target.value)}/>
            <button type='submit'>Register</button>

            
        </form>
    )
}


export default Register
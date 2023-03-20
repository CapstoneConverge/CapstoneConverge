import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/authContext';
import "./login.scss"

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = ()=> {
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Converge</h1>
                    <p>Welcome to Converge! A music social media app! Changing interactions one song at a time!</p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" /> 
                        <Link to="/">
                        <button>Login</button> 
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login 
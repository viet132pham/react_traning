import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';
import useUserAuth from "../context/useUseAuth";
import CategoryServices from '../service/CategoryServices';
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/action.js";

function Login(props) {
    const navigate = useNavigate();
    const { state, setState } = useUserAuth();

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function Login(username, password) {
        setState({
            isLoggedIn: false,
            isLoginPending: true,
            loginError: null
        });
        await CategoryServices.signIn({ username, password });
        if (typeof (sessionStorage.getItem('token')) === 'string') {
            dispatch(loginUser(true));
            setState({
                isLoggedIn: true,
                isLoginPending: false,
                loginError: null
            });
            console.log(state);
            console.log(`trong if` + state);
        } else {
            setState({
                isLoggedIn: true,
                isLoginPending: false,
                loginError: Error('Invalid email and password')
            });
        }

    }

    async function handleLogin() {
        await Login(username, password);
        if (typeof (sessionStorage.getItem('token')) === 'string' ) {
            navigate('/Dashboard', { state: { userName: username } })
        }
    }

    return (
        <div className="container__wrap-1">
            <div className="container__wrap-2">
                <div className="container">
                    <p className="heading">Login</p>
                    <div className="box">
                        <p>Email</p>
                        <div> <input
                            type="text"
                            autoComplete="off"
                            placeholder="Enter your email"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="box">
                        <p>Password</p>
                        <div> <input
                            type="text"
                            autoComplete="off"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                    </div>
                    <button className="loginBtn" onClick={handleLogin}>Login</button>
                    {/* <p className="text">Don't have an account? <a href="#">Signup</a></p> */}
                </div>
            </div>
        </div>
    );
}

export default Login;
import React from "react";
import "../styles/Dashboard.css";
import { useLocation , useNavigate  } from "react-router-dom";
import  useUserAuth  from "../context/useUseAuth";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/action.js";
function Dashboard(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {setState} = useUserAuth();

    const dispatch = useDispatch();

    const handleDashboard = () => {
        navigate("/Home" );
    }

    const handleLogout = () => {
        setState({
            isLoggedIn: false,
            isLoginPending: false,
            loginError: null
        });
        dispatch(loginUser(false));
        sessionStorage.clear();
        navigate("/" );
    }

    return (
        <div className="container__wrap-1">
            <span className="dashboard"> Chao {location.state.userName} !</span>
            <button className="loginBtn" onClick={() => handleDashboard()}>Home</button>
            <button className="loginBtn" onClick={() => handleLogout()}>Logout</button>
        </div>
    );
}

export default Dashboard;
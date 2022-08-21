import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/useUseAuth";
import { useSelector } from "react-redux";


const RequireAuth = ({ allowedRoles }) => {
    const isLoggedIn = useSelector((state) => state.reducer);
    const {state} = useAuth();
    const location = useLocation();
    return (
        state.isLoggedIn?<Outlet/>
        : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;
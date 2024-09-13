import {  Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoutes = ({ children }) => {
    const location = useLocation ();
    const {user, loading} = UseAuth ();
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
     if (user) {
    return children;
     }
    return <Navigate to='/login' state={ {from: location} } replace></Navigate>
};

export default PrivateRoutes;
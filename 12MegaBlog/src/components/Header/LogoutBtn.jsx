import React from "react";
import { useDispatch } from "react-redux";
// import { logout } from "../../store/authSlice";
import { logout } from "../../store/authSlice"


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {}
    return (
        <div>LogoutBtn</div>
    )
}

export default LogoutBtn
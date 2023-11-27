import React , {useContext} from "react";
// import { useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    // const [username , setUsername] = useState('')
    // const [password , setPassword] = useState('')

    const {user} = useContext(UserContext)
    
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username} </div>
}

export default Profile
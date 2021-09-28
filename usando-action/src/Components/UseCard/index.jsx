import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import changeName from "./../../store/modules/user/actions";
import "./style.css"

const UserCard = () => {

    const [name,setName]=useState("")

    const dispatch = useDispatch();

    const nameuser = useSelector((state)=> state.user)

    const handleClick = () => {
        dispatch(changeName(name))
    }

    return (
        <div className="card">
            <p>User name:<span>{nameuser.name}</span></p>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default UserCard
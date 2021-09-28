import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import changeName from "./../../store/modules/user/actions";

const UserCard = () => {

    const [name,setName]=useState("")

    const dispatch = useDispatch();

    const nameuser = useSelector((state)=> state.user)

    const handleClick = () => {
        dispatch(changeName(name))
    }

    return (
        <div>
            <p>Nome: {nameuser}</p>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default UserCard
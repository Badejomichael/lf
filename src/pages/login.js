import {useState} from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";


export const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserProfession, setNewUserProfession] = useState("")
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  const userprofession = useSelector((state) => state.user.value.profession);


  return (
    <div>
      <h1>{username}</h1>
      <h2>{userprofession}</h2>
      <input placeholder="username" onChange={(e) => {
        setNewUserName(e.target.value);
      }}/>
      <input placeholder="profession" onChange={(e) => {
        setNewUserProfession(e.target.value);
      }}/>
      <button onClick={() => dispatch(login({username: newUserName, profession: newUserProfession}))}>Submit Login</button>
      <button>Logout</button> 
    </div>
  );
} 
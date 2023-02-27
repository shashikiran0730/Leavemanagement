import axios from "axios";
import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router";

export const Register = () => {
  const [Details, setDetails] = useState([]);
  const navigate=useNavigate()
  var uname = useRef();
  var mypass = useRef();
  var email = useRef();
  const registerDetails = () => {
    var d = {
      name: uname.current.value,
      pass: mypass.current.value,
      email: email.current.value,
    };
    axios.post("http://localhost:3000/registerdetails",d)
    console.log(d)
    navigate("/login")
    
  };

  return (
    <div>
      <input type="text" placeholder="username" ref={uname}></input>
      <br></br>
      <input type="password" placeholder="Enterpassword" ref={mypass}></input>
      <br></br>
      <input type="email" placeholder="EnterEmail" ref={email}></input>
      <br />
      <button onClick={() => registerDetails()}>Register</button>
    </div>
  );
};

import axios from "axios";
import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import "./Register.css"

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
      
     <div>hi</div>
  );
};

import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { mycontext } from "../App";

export const Login = () => {
  const uname = useRef();
  const mypass = useRef();
  const [loginDetails, setLoginDetails] = useState([]);
  const [loginid, setloginid] = useContext(mycontext);
  const [ErrorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/registerdetails")
      .then((res) => {
        setLoginDetails([...res.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const Login = () => {
    if (
      uname.current.value == "admin" &&
      mypass.current.value == "admin@1234"
    ) {
      console.log("hiadmin");
      navigate("/admin");
    } else {
      loginDetails.map((i) => {
        if (i.name == uname.current.value && i.pass == mypass.current.value) {
          const a = {
            name: i.name,
            id: i.id,
          };
          setloginid({ ...a });
          navigate("/welcome");
          setErrorMessage(false);
        } else {
          setErrorMessage(true);
        }
      });
    }
  };
  return (
    <div>
      <input type="text" placeholder="username" ref={uname}></input>
      <br></br>
      <input type="password" placeholder="Enterpassword" ref={mypass}></input>
      <br></br>
      <button onClick={() => Login()}>LOGIN</button>
      <br></br>
      {ErrorMessage && "INDVALID DETAILS"}
    </div>
  );
};

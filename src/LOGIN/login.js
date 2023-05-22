import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { mycontext } from "../App";
import "./login.css";
import { Register } from "../REGISTER/Register";



export const Login = () => {
  const uname = useRef();
  const mypass = useRef();
  const email = useRef();
  const [loginDetails, setLoginDetails] = useState([]);
  const [loginid, setloginid] = useContext(mycontext);
  const [isErrorMessage, setisErrorMessage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [modalClassName, setmodalClassName] = useState('modal-display')

  const navigate = useNavigate();

  const getLoginDetails = () => {
    axios
      .get("http://localhost:3000/registerdetails")
      .then((res) => {
        console.log(res.data)
        setLoginDetails([...res.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getLoginDetails()
  }, []);
  const renderRegisterPage = () => {
    setIsLogin(false);
  };
  const renderLoginPage = () => {
    setIsLogin(true);
  };

  const register = () => {
    var d = {
      name: uname.current.value,
      pass: mypass.current.value,
      email: email.current.value,
    };
try{
  axios.post("http://localhost:3000/registerdetails", d);
}
catch{
  console.log("axios failed")
}
   
    getLoginDetails()
    setIsLogin(true);
  };

  const Login = () => {
    if (
      uname.current.value == "admin" &&
      mypass.current.value == "admin@1234"
    ) {
      console.log("hiadmin");
      navigate("/admin");
    } else {
      loginDetails.map((i) => {
        console.log(uname.mypass?.current.value);
        if (i.name == uname.current.value || i.pass == mypass.current.value) {
          const a = {
            name: i.name,
            id: i.id,
          };
          sessionStorage.setItem("logindata", JSON.stringify({ ...a }));
          setloginid({ ...a });
          navigate("/welcome");
          setisErrorMessage(false);
        } else {
          setisErrorMessage(true);
        }
      });
    }
  };

  const renderInvalidModal = () => {
    return (
      <div className={isErrorMessage?'modal-display':'modal'}>
        <div className="modal-content">
          <div className="modal-items">
            <div>INVALIDDETAILS....please enter correct DETAILS</div>
            <button onClick={() => setisErrorMessage(false)}>X</button>
          </div>


        </div>

      </div>
    )
  }
  return (
    <div>
      <div className="feilds">
        <div className="signpage">
          <div
            onClick={() => renderLoginPage()}
            className={isLogin ? "helo" : ""}
          >
            Login
          </div>
          <div className={!isLogin ? "helo" : ""}
            onClick={() => {
              renderRegisterPage();
            }}
          >
            Register
          </div>
        </div>

        {isLogin && (
          <>
            <div>
              <div className="container-1">
                <div className="feild">
                  <input
                    className="innerfeild"
                    type="text"
                    placeholder="username"
                    ref={uname}
                  ></input>
                </div>

                <div className="feild">
                  <input
                    className="innerfeild"
                    type="password"
                    placeholder="Enterpassword"
                    ref={mypass}
                  ></input>
                </div>
              </div>
            </div>
            <div className="btn-1">
              <button className="innerfeildbutton" onClick={() => Login()}>
                LOGIN
              </button>
            </div>
          </>
        )}

        {!isLogin && (
          <>
            <div>
              <div className="container-1">
                <div className="feild">
                  <input
                    className="innerfeild"
                    type="text"
                    placeholder="username"
                    ref={uname}
                  ></input>
                </div>

                <div className="feild">
                  <input
                    className="innerfeild"
                    type="password"
                    placeholder="Enterpassword"
                    ref={mypass}
                  ></input>
                </div>
              </div>
            </div>
            <div className="feild">
              <input
                className="innerfeild"
                type="email"
                placeholder="EnterEmail"
                ref={email}
              ></input>
            </div>
            <div className="btn-1">
              <button className="innerfeildbutton" onClick={() => register()}>
                REGISTER
              </button>
            </div>
          </>
        )}
      </div>

      {isErrorMessage && renderInvalidModal()}


      {true && "INDVALID DETAILS"}
    </div>
  );
};

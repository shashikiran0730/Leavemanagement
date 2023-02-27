import axios from "axios";
import { useContext, useReducer, useRef } from "react";
import { mycontext } from "../App";
import { DashBoard } from "../DASHBOARD/Dashboard";

export const Welcome = () => {
  const [loginDetails, setLoginDetails] = useContext(mycontext);
  const fromdate = useRef();
  const todate = useRef();
  const leavetype = useRef();
  const reason = useRef();
  const LeaveDetails = () => {
    var a = {
      fromdate: fromdate.current.value,
      todate: todate.current.value,
      leavetype: leavetype.current.value,
      reason: reason.current.value,
      "status":"pending",
      registerid:loginDetails.id
    };
    console.log(a)
    axios.post("http://localhost:3000/leavedetails",a)
   
  };

  return (
    <div>
      <DashBoard></DashBoard>
      <h1>WELCOME {loginDetails.name}</h1>
      <div>
        <h1>LEAVE APPLICATION</h1>
        <div>
          FROMDATE:
          <input type="date" placeholder="FROMDATE" ref={fromdate}></input>
        </div>{" "}
        <br></br>
        <div>
          {" "}
          TODATE:<input type="date" placeholder="TODATE" ref={todate}></input>
        </div>
        LEAVETYPE:
        <select ref={leavetype}>
          <option value="SickLeave">SickLeave</option>
          <option value="CasualLeave">CasualLeave</option>
          <option value="PaidLeave"> PaidLeave</option>
          <option value="MaternityLeave">MaternityLeave</option>
        </select>
        <div style={{ display: "flex" }}>
          {" "}
          <span>Reason</span>{" "}
          <span>
            {" "}
            <textarea maxLength="200" ref={reason}></textarea>
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          LeaveDetails();
        }}
      >
        APPLY
      </button>
    </div>
  );
};

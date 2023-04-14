import axios from "axios";
import { useContext, useReducer, useRef } from "react";
import { mycontext } from "../App";
import { DashBoard } from "../DASHBOARD/Dashboard";
import "./welcome.css";

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
      status: "pending",
      registerid: loginDetails.id,
    };
    console.log(a);
    axios.post("http://localhost:3000/leavedetails", a);
  };

  return (
    <div className="page">
      <DashBoard></DashBoard>
      <h2>WELCOME {loginDetails.name}</h2>
      <div className="w-content">
        <div>
          <h2>LEAVE APPLICATION</h2>
          <div className="field-con">
            <div className="field">
              <label>FROMDATE</label>
              <input type="date" placeholder="FROMDATE" ref={fromdate}></input>
            </div>
            <div className="field">
              <label>TODATE</label>
              <input type="date" placeholder="TODATE" ref={todate}></input>
            </div>
          </div>
          <div className="field">
            <label> LEAVETYPE</label>
            <select ref={leavetype}>
              <option value="SickLeave">SickLeave</option>
              <option value="CasualLeave">CasualLeave</option>
              <option value="PaidLeave"> PaidLeave</option>
              <option value="MaternityLeave">MaternityLeave</option>
            </select>
          </div>
          <div className="field">
            <label>Reason</label>
            <textarea maxLength="200" ref={reason}></textarea>
          </div>
        </div>
        <div className="field">
          <button
            onClick={() => {
              LeaveDetails();
            }}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

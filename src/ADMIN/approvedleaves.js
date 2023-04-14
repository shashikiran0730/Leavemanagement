import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const ApprovedorRejectedLeaves = () => {
  const [LeaveDetails, setLeaveDetails] = useState([]);
  const [sampleLeaves, setsampleLeaves] = useState([]);
  const app = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:3000/leavedetails")
      .then((res) => {
        let a = [];
        res.data.map((i) => {
          if (i.status == "rejected" || i.status == "approved") {
            a.push(i);
          }
        });
        setLeaveDetails([...a]);
        setsampleLeaves([...a]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fiterLeaves = () => {
    if (app.current.value != "0") {
      let a = [];
      LeaveDetails.map((i) => {
        if (app.current.value == i.status) {
          a.push(i);
        }
      });
      setsampleLeaves([...a]);
    }
  };
  return (
    <div>
      {sampleLeaves.map((i, index) => (
        <div>
          <div key={index}>{i.fromdate}</div>
          <div key={index}>{i.todate}</div>
          <div key={index}>{i.leavetype}</div>
          <div key={index}>{i.reason}</div>
          <div key={index}>{i.status}</div>
        </div>
      ))}
      <select onChange={() => fiterLeaves()} ref={app}>
        <option value={"0"}>select</option>
        <option value="approved">Approved</option>
        <option value="rejected">rejected</option>
      </select>
    </div>
  );
};

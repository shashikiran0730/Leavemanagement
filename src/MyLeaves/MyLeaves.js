import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { mycontext } from "../App";

export const MyLeaves = () => {
  const [loginid, setLoginid] = useContext(mycontext);
  const [myleavedetails, setmyleavedetails] = useState([]);
  const [isLeaves, setisLeaves] = useState(false);
  useEffect(() => {
    var a = [];
    axios.get("http://localhost:3000/leavedetails").then((res) =>
      res.data.map((i) => {
        if (i.registerid == loginid.id) {
          console.log("hi", i.status, i.id);
          a.push(i);
          setmyleavedetails([...a]);
        }
      })
    );
  }, []);

  return (
    <div>
      {myleavedetails.map((i, index) => (
        <div>
          <div key={index}>{i.fromdate}</div>
          <div key={index}>{i.todate}</div>
          <div key={index}>{i.leavetype}</div>
          <div key={index}>{i.reason}</div>
          <div key={index}>{i.status}</div>
        </div>
      ))}

      {true && myleavedetails.length == 0 && "NO LEAVES PRESENT"}
    </div>
  );
};

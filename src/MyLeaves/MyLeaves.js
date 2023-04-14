import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { mycontext } from "../App";
import "./Myleaves.css"

export const MyLeaves = () => {
  const [loginid, setLoginid] = useContext(mycontext);
  const [myleavedetails, setmyleavedetails] = useState([]);
  const [isLeaves, setisLeaves] = useState(false);
  useEffect(() => {
    var a = [];
    axios.get("http://localhost:3000/leavedetails").then((res) =>
      res.data.map((i) => {
        if (i.registerid == loginid.id) {
          a.push(i);
          setmyleavedetails([...a]);
        }
      })
    );
  }, []);

  return (
    <div>
      <table border="1" className="table">
        <tr>
          <th>fromdate</th>
          <th>todate</th>
          <th>SickType</th>
          <th>reason</th>
          <th>status</th>
          <th>registerid</th>
        </tr>
        {myleavedetails.map((i, index) => (
          <tr key={index}>
            <td>
              <div>{i.fromdate}</div>
            </td>
            <td>
              <div>{i.todate}</div>
            </td>
            <td>
              <div>{i.leavetype}</div>
            </td>
            <td>
              <div>{i.reason}</div>
            </td>
            <td>
              <div>{i.status}</div>
            </td>
            <td>
              <div>{i.registerid}</div>
            </td>
          </tr>
        ))}
      </table>
      {true && myleavedetails.length == 0 && "NO LEAVES PRESENT"}
    </div>
  );
};

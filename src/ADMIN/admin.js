import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  const [leavedetails, setLeavesdetails] = useState([]);
  const approveLeaves = (data) => {
    const response = axios.put(
      `http://localhost:3000/leavedetails/${data.id}`,
      {
        ...data,
        status: "approved",
      }
    );
  
      fetchDetails();
    
  };
  const rejectLeaves = (data) => {
    const response = axios.put(
      `http://localhost:3000/leavedetails/${data.id}`,
      {
        ...data,
        status: "rejected",
      }
    );
    fetchDetails()
  };
  const fetchDetails = () => {
    axios.get("http://localhost:3000/leavedetails").then((res) => {
      let a=[]
     res.data.map((i)=>{
      if(i.status=='pending'){
      a.push(i)
      console.log(a)
      }
    })
      setLeavesdetails([...a]);
    });
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      {leavedetails.map((i) => (
        <div>
          <div>{i.fromdate}</div>
          <div>{i.todate}</div>
          <div>{i.leavetype}</div>
          <div>{i.reason}</div>
          <div>{i.status}</div>
          <div>{i.registerid}</div>
          <button onClick={() => approveLeaves(i)}>APPROVE</button>
          <br></br>
          <button onClick={() => rejectLeaves(i)}>REJECT</button>
        </div>
      ))}
      <Link to={"/approvedorrejected"}>ALLLEAVES</Link>
    </div>
  );
};

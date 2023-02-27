import axios from "axios";
import { useEffect, useState } from "react";

export const Admin = () => {
  const [leavedetails, setLeavesdetails] = useState([]);
  const [x, setx] = useState(false);

  const approveLeaves = async (data) => {
    const response = await axios.put(
      `http://localhost:3000/leavedetails/${data.id}`,
      {
        ...data,
        status: "approved",
      }
    );
    if (response.data) {
      fetchDetails();
    }
  };
  const fetchDetails = () => {
    axios.get("http://localhost:3000/leavedetails").then((res) => {
      console.log(res.data);
      setLeavesdetails([...res.data]);
    });
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  // axios.post("http://localhost:3000/leavedetails", res.data)

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
        </div>
      ))}
    </div>
  );
};

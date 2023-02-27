import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mycontext } from "../App";
import "./Dashboard.css";
export const DashBoard = () => {
  const [loginid, setloginid] = useContext(mycontext);
  const navigate = useNavigate();
  const Logout = () => {
    setloginid("");
    navigate("/login");
  };
  return (
    <div className="c-1">
      <Link to="/myleaves">
        <button>MYLEAVES</button>
      </Link>

      <button onClick={() => Logout()}>LOGOUT</button>
    </div>
  );
};

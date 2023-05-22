import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mycontext } from "../App";
import "./Dashboard.css";
export const DashBoard = () => {
  const [loginid, setloginid] = useContext(mycontext);
  const navigate = useNavigate();
  const Logout = () => {
    setloginid("");
    navigate("/");
  };
  return (
    <div className="c-1">
      <div className="c-title">Leaves</div>
      <div className="c-menu">
        <Link to="/myleaves" >
          <button className="c-button">MYLEAVES</button>
        </Link>
        <button onClick={() => Logout()} className="c-button">LOGOUT</button>
      </div>
    </div>
  );
};

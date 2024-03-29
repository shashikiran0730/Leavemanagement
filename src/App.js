import "./App.css";
import { Register } from "./REGISTER/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./LOGIN/login";
import { Welcome } from "./WELCOME/Welcome";
import { createContext, useEffect, useState } from "react";
import { MyLeaves } from "./MyLeaves/MyLeaves";
import { Admin } from "./ADMIN/admin";
import { ApprovedorRejectedLeaves } from "./ADMIN/approvedleaves";
export const mycontext = createContext();
function App() {
  const [Loginid, setLoginId] = useState({});
  const loadData = () => {
    const logindata = sessionStorage.getItem("logindata");
    if (logindata) {
      setLoginId(JSON.parse(logindata));
    }
  };
  useEffect(() => loadData(), []);
  return (
    <div>
      <mycontext.Provider value={[Loginid, setLoginId]}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Login></Login>}></Route>
              <Route path="/welcome" element={<Welcome></Welcome>}>
                {" "}
              </Route>
              <Route path="/myleaves" element={<MyLeaves></MyLeaves>}>
                {" "}
              </Route>
              <Route path="/admin" element={<Admin></Admin>}></Route>
              <Route
                path="/approvedorrejected"
                element={<ApprovedorRejectedLeaves></ApprovedorRejectedLeaves>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </mycontext.Provider>
    </div>
  );
}

export default App;

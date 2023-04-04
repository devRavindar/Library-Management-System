import { BrowserRouter, Routes, Route } from "react-router-dom";

import Adminlogin from "../src/components/Adminlogin"
import Userlogin from "../src/components/Userlogin"
import Landingpage from "../src/components/Landingpage";
import Adminportal from "../src/components/adminPortal"

function App() {
  return (
    <div className="d1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/Adminlogin" element={<Adminlogin/>}/>
          <Route path="/Userlogin" element={<Userlogin/>}/>
          <Route path="/Adminportal/*" element={<Adminportal />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Adminlogin from "./components/Adminlogin"
import Userlogin from "./components/Userlogin"
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <div className="d1">
      <BrowserRouter>
        <Routes>
          
          
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/Adminlogin" element={<Adminlogin/>}/>
          <Route path="/Userlogin" element={<Userlogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

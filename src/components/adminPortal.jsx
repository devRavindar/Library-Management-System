import { Routes, Route } from "react-router-dom";
import Adminhome from "../components/adminHome";
import Booklist from "../components/bookList";
import Adminnavbar from "./adminnavbar";
import Addbooks from "./addbooks";
import Userlist from "./userlist";
import Addusers from "./addusers";
import Readbook from "./readbook";

const Adminportal = () => {
  return (
    <div className="adminportal">
      <Adminnavbar />

      <Routes>
        <Route path="/" element={<Adminhome />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/addbooks" element={<Addbooks />} />
        <Route path="/addusers" element={<Addusers />} />
        <Route path="/booklist/:id" element={<Readbook />} />
      </Routes>
    </div>
  );
};

export default Adminportal;

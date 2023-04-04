import { Routes,Route } from "react-router-dom";
import Adminhome from"../components/adminHome"
import Booklist from"../components/bookList"
import Adminnavbar from "./adminnavbar";



const Adminportal = () => {
    return ( 
        <div className="adminportal">
           
            <Adminnavbar/>
          
            <Routes>
                <Route path="/" element={<Adminhome/>}  />
                <Route path="/booklist" element={<Booklist/>}  />

            </Routes>
        </div>
     );
}
 
export default Adminportal;
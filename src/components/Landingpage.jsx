import { Link } from "react-router-dom";
import "../styles/Landingpage.css";
import Pro from "../images/adminprofile.png"
const Landingpage = () => {
  return (
    <div className="landingpage">
     
      <div className="formdiv">
        
        <form action="">
          <div className="heading">
            <h1>Signin As .. </h1> <img src={Pro} alt="" />
          </div>
          <div className="button1">
            <button>
              <Link to="/Adminlogin">Admin Login</Link>
            </button>
            <button>
              <Link to="/Userlogin">User Login</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Landingpage;

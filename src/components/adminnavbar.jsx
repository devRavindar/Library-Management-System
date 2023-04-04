import "../styles/adminnavbar.css";
import Home from "../images/adminhomenavbar.png";
import Logout from "../images/adminlogout.png";
import Books from "../images/adminbooks.png"
import User from "../images/adminusers.png"

const Adminnavbar = () => {
  return (
    <div className="navbar">
      <div className="navbarlinks">
        <div className="adminhomepage">
          <img src={Home} alt="" />
          <a href="">Home</a>
        </div>
        
        <div className="adminbooks">
            <img src={Books} alt="" />
            <a href="">BookList</a>
        </div>
        <div className="adminusers">
            <img src={User} alt="" />
            <a href="">Users</a>
        </div>
        <div className="adminlogout">
          <img src={Logout} alt="" />
          <a href="">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Adminnavbar;

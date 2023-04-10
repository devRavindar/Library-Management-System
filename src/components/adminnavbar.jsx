import "../styles/adminnavbar.css";
import { Link } from "react-router-dom";

const Adminnavbar = () => {
  return (
    <div className="navbar">
      <div className="welcomeadmin">
        <h2>Admin is Here !</h2>
      </div>
      <div className="navbarlinks">
       <ul>
      <li> <div className="adminhome">
          <Link to="/Adminportal">Home</Link> </div></li>
       <li><div className="adminbooklist">
          <Link to="/adminportal/booklist">BookList</Link></div></li>
       <li> <div className="adminuserList">
          <Link to="/adminportal/userlist">UserList</Link></div></li>
        <li><div className="adminAddbook">
          <Link to="/adminportal/addbooks">AddBooks</Link> </div></li>
        <li><div className="adminuser">
          <Link to="/adminportal/addusers">AddUsers</Link></div></li>
        <li><div className="adminlogout">
          <Link to="/adminportal/logout">Logout</Link> </div></li>
       </ul>
      </div>
    </div>
  );
};

export default Adminnavbar;

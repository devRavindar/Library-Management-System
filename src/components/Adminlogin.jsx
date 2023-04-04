import { useRef, } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Adminlogin.css"
import "../images/adminbackimg.jpg"
import "../images/adminprofile.png"
const Admin = () => {
  let email = useRef(null);
  let password = useRef(null);
  let navigate=useNavigate()

  let Adminlogin = () => {
    if (email.current.value == "admin@gmail.com" && password.current.value == 12345) {
      navigate("/Adminportal");
      
    } else {
      alert("invail user");
    }
  };

  return (
    <div className="main">
    
      <div className="adminform">
      <h1>Welcome Back</h1>
       <form action="" onSubmit={Adminlogin}>
       <div className="inp">
       <div className="mail">
        <label htmlFor="">Email : </label>
          <input type="text" ref={email} placeholder="Enter your Email" />
          <br />
        </div>
        <div className="password">
          <label htmlFor="">Password  : </label>
        
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
          />
          <br />
          <div className="button">
              <button block >Submit</button>
            </div>
        </div>
       </div>
       </form>
      </div>
    </div>
  );
};
export default Admin;

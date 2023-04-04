import { useRef, } from "react";
import { useNavigate } from "react-router-dom";
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
      <h1>Admin Portal</h1>
      <div className="adminform">
       <form action="" onSubmit={Adminlogin}>
       <div className="mail">
          <input type="text" ref={email} placeholder="Enter your Email" />
          <br />
        </div>
        <div className="password">
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
          />
          <br />
          <div className="button">
              <button>Submit</button>
            </div>
        </div>
       </form>
      </div>
    </div>
  );
};
export default Admin;

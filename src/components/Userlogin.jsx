import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
const User = () => {
  let email = useRef(null);
  let password = useRef(null);
  // let navigate=useNavigate()

  

  return (
    <div className="main">
      <h1>User Portal</h1>
      <div className="adminform">
        <form action="">
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
export default User;

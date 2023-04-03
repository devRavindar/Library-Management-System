import { Link } from "react-router-dom"

const Landingpage=()=>{
    return(
<div className="landingpage">
    <h1>Signin As .. </h1>
    <Link to="/Adminlogin">Admin Login</Link>
    <Link to="/Userlogin">User Login</Link>
</div>
    )
}
export default Landingpage
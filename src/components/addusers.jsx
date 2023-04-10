import "../styles/addusers.css";

const Addusers = () => {
  return (
    <div className="adduser">
      <div className="adduserform">
        <h1>Add New User</h1>
        <form action="">
          <div className="userinp">
            <div className="addusername">
              <label htmlFor=""> UserName</label>
              <input type="text" placeholder="Enter User Name" /><br /></div>

            <div className="addemail">
              <label htmlFor="">Email </label>
              <input type="email" placeholder="Enter User Email" />
              <br />
              <div className="addcontact">
                <label htmlFor=""> Contact</label>
                <input type="text" placeholder="Contact" />
                <br />
              </div>
              <div className="addid">
                <label htmlFor=""> Id :</label>
                <input type="text" placeholder="id" />
                <br/>
              </div>
              <div className="addbutton">
                <button>Add New User</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addusers;

import "../styles/addbooks.css"
import Img from "../images/addbooks.jpg"

const Addbooks = () => {
  return (
    <div className="full">
       <div className="firstl">
        
        
        <div className="form">
        <h1>Add books to Library</h1>
          <input type="text" placeholder="Title  :" />
          <input type="text" placeholder="Author  :" />
          <input type="text" placeholder="Gener  :" />
          <input type="text" placeholder="Thumbnail URL  :" />
          
        </div><br />
        <div className="button1">
          <button> Click Here to Add Book</button>
        </div>
      </div>
      <div>
        <img className="img" src= {Img}alt="" />
      </div>
    </div>
  );
};

export default Addbooks;

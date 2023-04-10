import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/booklist.css"
const Booklist = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let respose = await fetch("http://localhost:4000/books");
      let data = await respose.json();
      setBooks(data);
    };
    fetchData();
  },[books]);
let deleteBook=(id)=>{
  fetch(`http://localhost:4000/books/${id}`,{
    method:"DELETE"
  })
}
  return (
    <div className="booklist">
      {books.map((data) => (
        <div className="map">
          
            <ul className="List">
             <Link className="link1" to={`/adminportal/booklist/${data.id}`}> <img  className="booklistimage" src={data.imageLink}  height="190px" width="150px" alt=""/></Link>
              <h5> Book Title :{data.title}</h5>
              <h5>Author :{data.author}</h5>
              <h5>Pages :{data.pages}</h5>
              <h5>Year :{data.year}</h5>

              <button  className="booklistbutton"><Link className="link2" to={`/adminportal/booklist/${data.id}`}>Read More...</Link></button>
              <button onClick={()=>deleteBook(data.id)}>Delete</button>
            </ul>
         
        </div>
      ))}
    </div>
  );
};

export default Booklist;

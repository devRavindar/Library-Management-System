import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Readbook = () => {
  let params = useParams();
  let [books,setBooks]=useState(" ")
  useEffect(() => {
    let fetchdata = async () => {
      let respose = await fetch(`http://localhost:4000/books/${params.id}`);
      let data = await respose.json();
      setBooks(data)
    };
    fetchdata();
  });
  return (
    <div className="Readbook">
      <h3>Title :{books.title}</h3>
      <h3> Author:{books.author}</h3>
      <p>{books.description}</p>
    </div>
  );
};

export default Readbook;

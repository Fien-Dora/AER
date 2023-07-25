import React, { useEffect, useState } from "react";
import MaintainCard from "./testCategory";

const CatFetch = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/categories')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return ( 
    <>
      <div>
        {categories ? <MaintainCard categories={categories} /> : <p>Loading...</p>}
      </div>
    </> 
  );
}
 
export default CatFetch;

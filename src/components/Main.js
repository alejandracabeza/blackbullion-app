import React, { useState, useEffect } from 'react';
import Card from "./Card";

function Main() {
    let [data, setData] = useState();

    useEffect(() => {
        // Update the document title using the browser API
        fetchData();
      });

    function fetchData(){
        fetch('http://www.blackbullion.com/_dev/api/lessons')
      .then(response => response.json())
      .then(data => setData({data}));
    }
  return (
    <div className="main">
 
   {  data && data.data.data.map((i, index) => {
       return <Card data={i} key={index}/>
   })}
   {!data && <p>Loading...</p>}
    </div>
  );
}

export default Main;

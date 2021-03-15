import React, { useState } from 'react';

function Card(data) {
 
  return (
    <div className="eachCard">
        <div className="imageContainer">
            <img src={data.data.image}/>
            <div className="duration">
                <p>{data.data.duration} min</p>
            </div>
        </div>
        <div className="details">
            <h3>{data.data.title}</h3>
            <p>{data.data.description}</p>
          
        </div>
        <div className="startPathway">
            <a href={data.data.url}/>Start Pathway <i className="fa fa-arrow-right"></i>
        </div>
    </div>
  );
}

export default Card;

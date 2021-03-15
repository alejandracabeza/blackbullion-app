import React, { useState } from 'react';

function Card(data) {
 
  return (
    <div className="eachCard">
        <img src={data.data.image} />
        <p>{data.data.duration} min</p>
        <h3>{data.data.title}</h3>
        <p>{data.data.description}</p>
        <a href={data.data.url}>Start Pathway</a>
    </div>
  );
}

export default Card;

import React from "react";

function Card(eachCard) {
  return (
            <div className="eachCard">
              <div className="imageContainer">
                <img src={eachCard.data.image} />
                <div className="duration">
                  <p>{eachCard.data.duration} min</p>
                </div>
              </div>
              <div className="details">
                <h2>{eachCard.data.title}</h2>
                <p>{eachCard.data.description}</p>
              </div>
              <div className="startPathway">
                <a href={eachCard.data.url}>
                  Start Pathway <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
  );
}

export default Card;

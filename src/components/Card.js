import React from "react";

function Card({ data: dataCard }) {
  return (
            <div className="eachCard">
              <div className="imageContainer">
                <img src={dataCard.image} />
                <div className="duration">
                  <p>{dataCard.duration} min</p>
                </div>
              </div>
              <div className="details">
                <h2>{dataCard.title}</h2>
                <p>{dataCard.description}</p>
              </div>
              <div className="startPathway">
                <a href={dataCard.url}>
                  Start Pathway <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
  );
}

export default Card;

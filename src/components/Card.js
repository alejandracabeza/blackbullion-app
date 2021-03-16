import React from "react";

function Card(data) {
  return (
    <div>
      {data &&
        data.data.map((eachCard) => {
          return (
            <div className="eachCard">
              <div className="imageContainer">
                <img src={eachCard.image} />
                <div className="duration">
                  <p>{eachCard.duration} min</p>
                </div>
              </div>
              <div className="details">
                <h2>{eachCard.title}</h2>
                <p>{eachCard.description}</p>
              </div>
              <div className="startPathway">
                <a href={eachCard.url}>
                  Start Pathway <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;

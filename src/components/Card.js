import React, { useState } from "react";
import Modal from "./Modal";

function Card({ data: dataCards }) {
  let [cardModal, setCardModal] = useState({});
  let [isShowModal, setIsShowModal] = useState(false);

  function handleClick(val) {
    console.log("s");
    setCardModal(val);
    setIsShowModal(!isShowModal);
  }
  return (
    <div>
      {dataCards &&
        dataCards.map((eachCard, index) => {
          return (
            <div className="eachCard" key={index}>
              <div className="imageContainer">
                <img src={eachCard.image} alt="information course" />
                <div className="duration">
                  <p>{eachCard.duration} min</p>
                </div>
              </div>
              <div className="cardInfo">
                <h2>{eachCard.title}</h2>
                <p>{eachCard.description}</p>
              </div>
              <div className="seeMore" onClick={() => handleClick(eachCard)}>
                See more...
              </div>
              <div className="startPathway">
                <a href={eachCard.url} target="_blank" rel="noreferrer">
                  Start Pathway <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}
      {isShowModal && <Modal data={cardModal} onClick={handleClick} />}
    </div>
  );
}

export default Card;

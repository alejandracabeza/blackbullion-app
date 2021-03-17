import React from "react";

function SortButton({ onClick: setSortButton }) {
  return (
    <div className="sortButton">
        <button onClick={()=> setSortButton()}>Sort by Duration</button>
    </div>
  );
}

export default SortButton;

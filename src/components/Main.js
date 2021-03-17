import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { getData } from "../api/index";
import SortButton from "./SortButton";

function Main() {
  let [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);
  const [isSorted, setSortButton] = useState(false);

  useEffect(() => {
    getData().then((data) => {
      return setDataFiltered(data), setData(data);
    });
  }, []);

  async function updateInput(input) {
    if (data) {
      const filtered = data.filter((i) => {
        return (
          i.title.toLowerCase().includes(input) ||
          i.description.toLowerCase().includes(input)
        );
      });
      setInput(input);
      setDataFiltered(filtered);
    }
  }

  async function handleSortButton() {
    setSortButton(!isSorted);
    let sortedData = dataFiltered.sort(function (a, b) {
      return isSorted ? b.duration - a.duration : a.duration - b.duration;
    });
    setDataFiltered([...sortedData]);
  }

  return (
    <div className="main">
      {data.length ? (
        <div>
          <SearchBar input={input} onChange={updateInput} />
          <SortButton onClick={handleSortButton} />
          {dataFiltered.length &&
            dataFiltered.map((card, index) => {
              return <Card data={card}  key={index}/>;
            })}
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}

export default Main;

import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { getData } from "../api/index";

function Main() {
  let [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      return setDataFiltered(data), setData(data);
    });
  }, []);

  async function updateInput(input) {
    if (data) {
      const filtered = data.filter((i) => {
        console.log(input);
        return (
          i.title.toLowerCase().includes(input) ||
          i.description.toLowerCase().includes(input)
        );
      });
      setInput(input);
      setDataFiltered(filtered);
    }
  }

  return (
    <div className="main">
      {data.length ? (
        <div>
          <SearchBar input={input} onChange={updateInput} />
          <Card data={dataFiltered} />
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}

export default Main;

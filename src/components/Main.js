import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

function Main() {
  let [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://www.blackbullion.com/_dev/api/lessons")
      .then((response) => response.json())
      .then((data) => {
        return setDataFiltered(data.data), setData(data.data);
      });
  }

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
      <SearchBar input={input} onChange={updateInput} />
      {data && <Card data={dataFiltered} />}
      {!data.length && <p>Loading...</p>}
    </div>
  );
}

export default Main;

import React, { useState } from "react";
import { Input } from "./Input.jsx";
import { List } from "./List.jsx";
import { ItemLeft } from "./ItemLeft.jsx";

//create your first component
const Home = () => {
  const [list, setList] = useState([]);
  var itemsLeftNumber = list.length;

  return (
    <div className="center">
      <h1>TODO-s</h1>
      <div className="container">
        <Input className="input" list={list} setList={setList} />
        <List list={list} setList={setList} />
        <ItemLeft quantity={itemsLeftNumber} />
      </div>
    </div>
  );
};

export default Home;

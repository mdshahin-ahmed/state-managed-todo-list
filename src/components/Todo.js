import React, { useEffect, useState } from "react";
import List from "./List";

const fetchLocalStorageData = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(localStorage.getItem("items") || "");
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(fetchLocalStorageData());

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);

  const handleAdd = () => {
    if (!inputValue) {
      return;
    }
    setData([...data, inputValue]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const newData = data.filter((item, index) => index !== id);
    setData(newData);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue || ""}
          type="text"
        />
        <button onClick={handleAdd}>Add to list</button>
        {data.map((list, index) => (
          <List
            key={index}
            index={index}
            handleDelete={handleDelete}
            list={list}
          ></List>
        ))}
      </div>
    </div>
  );
};

export default Todo;

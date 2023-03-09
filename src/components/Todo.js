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

    // setData([...data, { name: inputValue, id: data.index }]);

    // setData({...data,{value:inputValue,id:1}});

    setInputValue("");
  };

  const handleDelete = (id) => {
    const newData = data.filter((item, index) => index !== id);
    setData(newData);
  };

  const handleEdit = (id, newData) => {
    const oldData = data.filter((item, index) => index !== id);
    setData([...oldData, newData]);
  };

  return (
    <div className="todoWrap">
      <div className="todoTextWrap">
        <h1>Todo List</h1>
        <div>
          <div className="inputField">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue || ""}
              type="text"
            />
            <button onClick={handleAdd}>Add to list</button>
          </div>
          <div>
            {data.map((list, index) => (
              <List
                key={index}
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                list={list}
              ></List>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

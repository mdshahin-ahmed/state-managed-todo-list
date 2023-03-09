import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const List = ({ list, index, handleDelete }) => {
  console.log(index);
  return (
    <div>
      <div>{list}</div>
      <div>
        <AiOutlineEdit />
        <AiOutlineDelete onClick={() => handleDelete(index)} />
      </div>
    </div>
  );
};

export default List;

import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import EditList from "./EditList";

const List = ({ list, index, handleDelete, handleEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <div>{list}</div>;
  if (showEdit) {
    content = (
      <EditList
        handleEditClick={handleEditClick}
        index={index}
        list={list}
        handleEdit={handleEdit}
      />
    );
  }

  return (
    <div className="listWrap">
      {content}
      <div>
        <AiOutlineEdit onClick={handleEditClick} className="edit" />
        <AiOutlineDelete
          className="delete"
          onClick={() => handleDelete(index)}
        />
      </div>
    </div>
  );
};

export default List;

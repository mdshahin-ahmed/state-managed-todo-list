import React, { useState } from "react";

const EditList = ({ list, handleEdit, index, handleEditClick }) => {
  const [newData, setNewData] = useState(list);
  const handleChange = (e) => {
    setNewData(e);
  };
  //   console.log(newData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newData) {
      return;
    } else {
      handleEdit(index, newData);
    }
    handleEditClick();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={newData}
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditList;

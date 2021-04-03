import React from "react";

const DataListInput = () => {
  return (
    <div>
      <input
        className="bg-yellow-100 hover:bg-yellow-200 rounded-md m-1 mt-5"
        list="name-list"
      />
      <datalist id="name-list">
        <option value="Name 1" />
        <option value="Name 2" />
        <option value="Name 3" />
      </datalist>
    </div>
  );
};

export default DataListInput;

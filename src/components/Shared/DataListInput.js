import React from "react";

const DataListInput = ({ setUserId }) => {
  return (
    <div>
      <label for="name-list">User ID</label>
      <input
        className="bg-yellow-300 hover:bg-yellow-200 rounded-md m-2 mt-5"
        list="name-list"
        onChange={(event) =>{
          setUserId(event.target.value)
        } 
      }
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

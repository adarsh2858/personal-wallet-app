import React, { useState } from "react";
import DataListInput from "./DataListInput";

const ManipulateFunds = ({ onButtonClick, setUserId, setAmount }) => {

  return (
    <div>
      <form onSubmit={onButtonClick}>
        <DataListInput {...{ setUserId }} />
        <label for="amount">Amount (Rs)</label>
        <input
          name="amount"
          className="p-2 m-2 rounded-md bg-yellow-300 hover:bg-yellow-200"
          type="text"
          // value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <input type="submit" className="p-2" />
      </form>
    </div>
  );
};

export default ManipulateFunds;

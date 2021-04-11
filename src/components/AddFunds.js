import React, { useState } from "react";
import DataListInput from "./Shared/DataListInput";

const AddFunds = () => {
  const [amount, setAmount] = useState(0.0);
  const [userId, setUserId] = useState(0);

  const onAddFundsButtonClick = (event) => {
    fetch("http://localhost:3001/addFunds", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userId, amount }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
      });
  };

  return (
    <>
      <div>Add Funds</div>
      <form onSubmit={onAddFundsButtonClick}>
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
    </>
  );
};

export default AddFunds;

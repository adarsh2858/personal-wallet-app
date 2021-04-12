import React, { useState } from "react";
import ManipulateFunds from "./Shared/ManipulateFunds";

const AddFunds = () => {
  const [userId, setUserId] = useState(0);
  const [amount, setAmount] = useState(0.0);

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
      <ManipulateFunds
        onButtonClick={onAddFundsButtonClick}
        setUserId={setUserId}
        {...{ setAmount }}
      />
    </>
  );
};

export default AddFunds;

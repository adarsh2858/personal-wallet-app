import React from "react";
import ManipulateFunds from "./Shared/ManipulateFunds";

const SpendFunds = () => {
  const onSpendFundsButtonClick = () => {
    console.log(
      "Make an API call to the backend to deduct funds from the respective user's balance"
    );
  };

  return (
    <>
      <div>Spend Funds</div>
      <ManipulateFunds onButtonClick={onSpendFundsButtonClick} />
    </>
  );
};

export default SpendFunds;

import React from "react";
import DataListInput from "./Shared/DataListInput";

const CheckBalance = () => (
  <>
    <div className="flex flex-row lg:w-1/3 md:w-1/2">
      <p className="mr-10 mt-5">User</p>

      <DataListInput />
    </div>
    <button className="m-2 p-2 bg-blue-400 rounded-md hover:bg-blue-500">
      Get Balance
    </button>
  </>
);

export default CheckBalance;

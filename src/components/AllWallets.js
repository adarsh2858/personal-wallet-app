import { useEffect, useState } from "react";

const AllWallets = () => {
  const [merchants, setMerchants] = useState(false);

  useEffect(() => {
    getMerchant();
  }, []);

  function getMerchant() {
    fetch("http://localhost:3001/")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setMerchants(data);
      });
  }

  function createMerchant() {
    let name = prompt("Enter the merchant's name");
    let phone = prompt("Enter the merchant's phone");

    fetch("http://localhost:3001/merchants", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getMerchant();
      });
  }

  function deleteMerchant() {
    let id = prompt("Enter the merchant's ID:");

    fetch(`http://localhost:3001/merchant/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getMerchant();
      });
  }
  return (
    <>
      <div className="mt-4">
        {merchants.length > 0
          ? merchants
          : "There is no merchant data available"}
      </div>
      <br />
      <button
        className="bg-green-400 p-4 m-4 rounded-sm"
        onClick={createMerchant}
      >
        Add Merchant
      </button>

      <button
        className="bg-red-400 p-4 m-4 rounded-sm"
        onClick={deleteMerchant}
      >
        Delete Merchant
      </button>
      <div className="mx-4">
        <header className="bg-blue-400 p-2 w-2/3">Personal Wallet UI</header>

        <div className="grid grid-row float-left">
          <a
            className="bg-yellow-400 p-1 hover:bg-yellow-500"
            href="/all-wallets"
          >
            All Wallets
          </a>
          <a className=" bg-blue-400 p-1  hover:bg-blue-500" href="/new-wallet">
            New Wallet
          </a>
          <a
            className=" bg-blue-400 p-1  hover:bg-blue-500"
            href="/check-balance"
          >
            Check Balance
          </a>
          <a className=" bg-blue-400 p-1  hover:bg-blue-500" href="/add-fund">
            Add Funds
          </a>
          <a className=" bg-blue-400 p-1  hover:bg-blue-500" href="/spend-fund">
            Spend Funds
          </a>
          <a
            className=" bg-blue-400 p-1  hover:bg-blue-500"
            href="/all-transactions"
          >
            All Transactions
          </a>
        </div>
      </div>

      <table className="w-1/2" style={{ background: "#fff" }}>
        <thead>
          <tr className=" bg-blue-200">
            <th className="py-1 px-2">User Id</th>
            <th className="px-2">Name</th>
            <th className="px-2">Phone</th>
            <th className="px-2">Balance (Rs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AllWallets;

import { useState, useEffect } from "react";
import "./App.css";
import AllWallets from "./components/AllWallets";
import NewWallet from "./components/NewWallet";

const data = [
  {
    userId: "Usr1",
    name: "Name 1",
    phone: "9988999877",
    balance: 765.43,
  },
  {
    userId: "Usr2",
    name: "Name 2",
    phone: "7763423688",
    balance: 443.24,
  },
  {
    userId: "Usr3",
    name: "Name 3",
    phone: "3434545666",
    balance: 20.05,
  },
];

const columns = [
  {
    Header: "User ID",
    accessor: "userId",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Balance",
    accessor: "balance",
  },
];

const App = () => {
  const [merchants, setMerchants] = useState(false);
  const [allWallets, setAllWallets] = useState(true);
  const [newWallet, setNewWallet] = useState(false);

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
    <div className="App">
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
          <button
            className="bg-yellow-400 p-1 hover:bg-yellow-500"
            onClick={() => {
              setNewWallet(false);
              setAllWallets(true);
            }}
          >
            All Wallets
          </button>
          <button
            className=" bg-blue-400 p-1  hover:bg-blue-500"
            onClick={() => {
              setAllWallets(false);
              setNewWallet(true);
            }}
          >
            New Wallet
          </button>
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
      <AllWallets {...{ allWallets, setAllWallets, newWallet, setNewWallet }} />
      {newWallet ? <NewWallet /> : null}
      {/* <Table
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[2, 4, 6]}
      /> */}
    </div>
  );
};

export default App;

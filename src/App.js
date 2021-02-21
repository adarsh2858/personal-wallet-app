import { useEffect, useState } from "react";
import "./App.css";

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

function App() {
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

  return (
    <div className="App">
      <header>Personal Wallet</header>
      {merchants ? merchants : "There is no merchant data available"}
      <br />
      <button onClick={createMerchant}>Add Merchant</button>

      <div className="grid grid-row">
        <a href="/all-wallets">All Wallets</a>
        <a href="/new-wallet">New Wallet</a>
        <a href="/check-balance">Check Balance</a>
        <a href="/add-fund">Add Funds</a>
        <a href="/spend-fund">Spend Funds</a>
        <a href="/all-transactions">All Transactions</a>
      </div>

      <table style={{ background: "#fff" }} className="">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Balance (Rs)</th>
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

      {/* <Table
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[2, 4, 6]}
      /> */}
    </div>
  );
}

export default App;

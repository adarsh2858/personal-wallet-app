import { useState } from "react";
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
  const [allWallets, setAllWallets] = useState(true);
  const [newWallet, setNewWallet] = useState(false);

  return (
    <div className="App">
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

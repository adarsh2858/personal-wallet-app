import { useState, useEffect } from "react";
import classnames from "classnames";
import "./App.css";
import {  connect } from "react-redux";
import * as actionTypes from "./store/actions";
import AllWallets from "./components/AllWallets";
import NewWallet from "./components/NewWallet";
import CheckBalance from "./components/CheckBalance";
import AddFunds from "./components/AddFunds";
import SpendFunds from "./components/SpendFunds";
import AllTransactions from "./components/AllTransactions";

const App = (props) => {
  const [merchants, setMerchants] = useState(false);
  const [allWallets, setAllWallets] = useState(true);
  const [newWallet, setNewWallet] = useState(false);
  const [checkBalance, setCheckBalance] = useState(false);
  const [addFunds, setAddFunds] = useState(false);
  const [spendFunds, setSpendFunds] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

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
      <div>
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
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="mx-4 col-span-1 grid grid-row float-left">
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": props.showAllWallets,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showAllWallets,
            })}
            onClick={() => {
              props.onAllWalletsClick();
              setAllWallets(true);
              setNewWallet(false);
              setCheckBalance(false);
              setAddFunds(false);
              setSpendFunds(false);
              setShowAllTransactions(false);
            }}
          >
            All Wallets
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": props.showNewWallet,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showNewWallet,
            })}
            onClick={() => {
              props.onNewWalletClick();
              setAllWallets(false);
              setNewWallet(true);
              setCheckBalance(false);
              setAddFunds(false);
              setSpendFunds(false);
              setShowAllTransactions(false);
            }}
          >
            New Wallet
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": checkBalance,
              " bg-blue-400 p-1  hover:bg-blue-500": !checkBalance,
            })}
            onClick={() => {
              setAllWallets(false);
              setNewWallet(false);
              setCheckBalance(true);
              setAddFunds(false);
              setSpendFunds(false);
              setShowAllTransactions(false);
            }}
          >
            Check Balance
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": addFunds,
              " bg-blue-400 p-1  hover:bg-blue-500": !addFunds,
            })}
            onClick={() => {
              setAllWallets(false);
              setNewWallet(false);
              setCheckBalance(false);
              setAddFunds(true);
              setSpendFunds(false);
              setShowAllTransactions(false);
            }}
          >
            Add Funds
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": spendFunds,
              " bg-blue-400 p-1  hover:bg-blue-500": !spendFunds,
            })}
            onClick={() => {
              setAllWallets(false);
              setNewWallet(false);
              setCheckBalance(false);
              setAddFunds(false);
              setSpendFunds(true);
              setShowAllTransactions(false);
            }}
          >
            Spend Funds
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": showAllTransactions,
              " bg-blue-400 p-1  hover:bg-blue-500": !showAllTransactions,
            })}
            onClick={() => {
              setAllWallets(false);
              setNewWallet(false);
              setCheckBalance(false);
              setAddFunds(false);
              setSpendFunds(false);
              setShowAllTransactions(true);
            }}
          >
            All Transactions
          </button>
        </div>
        <div className="col-span-5">
          {allWallets ? <AllWallets /> : null}
          {newWallet ? <NewWallet /> : null}
          {checkBalance ? <CheckBalance /> : null}
          {addFunds ? <AddFunds /> : null}
          {spendFunds ? <SpendFunds /> : null}
          {showAllTransactions ? <AllTransactions /> : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showAllWallets: state.allWallets,
    showNewWallet: state.newWallet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAllWalletsClick: () => dispatch({ type: actionTypes.SWITCH_ALL_WALLETS }),
    onNewWalletClick: () => dispatch({ type: actionTypes.SWITCH_NEW_WALLET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

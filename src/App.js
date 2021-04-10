import { useState, useEffect } from "react";
import classnames from "classnames";
import "./App.css";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";
import AllWallets from "./components/AllWallets";
import NewWallet from "./components/NewWallet";
import CheckBalance from "./components/CheckBalance";
import AddFunds from "./components/AddFunds";
import SpendFunds from "./components/SpendFunds";
import AllTransactions from "./components/AllTransactions";

const App = (props) => {
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

  const getTransactions = async () => {
    const userId = "Usr1";

    const response = await fetch(
      `http://localhost:3001/transactions`,
      {
        method: "GET",
      }
    );
    
    const data = await response.json();
    console.log(data)
  };

  return (
    <div className="App">
      <button className="bg bg-purple-400 p-4 rounded-md m-2" onClick={getTransactions}>Get Transactions</button>
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
            onClick={props.onAllWalletsClick}
          >
            All Wallets
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": props.showNewWallet,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showNewWallet,
            })}
            onClick={props.onNewWalletClick}
          >
            New Wallet
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": props.showCheckBalance,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showCheckBalance,
            })}
            onClick={props.onCheckBalanceClick}
          >
            Check Balance
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": props.showAddFunds,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showAddFunds,
            })}
            onClick={props.onAddFundsClick}
          >
            Add Funds
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500": props.showSpendFunds,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showSpendFunds,
            })}
            onClick={props.onSpendFundsClick}
          >
            Spend Funds
          </button>
          <button
            className={classnames({
              "bg-yellow-400 p-1 hover:bg-yellow-500":
                props.showAllTransactions,
              " bg-blue-400 p-1  hover:bg-blue-500": !props.showAllTransactions,
            })}
            onClick={props.onAllTransactionsClick}
          >
            All Transactions
          </button>
        </div>
        <div className="col-span-5">
          {props.showAllWallets ? <AllWallets /> : null}
          {props.showNewWallet ? <NewWallet /> : null}
          {props.showCheckBalance ? <CheckBalance /> : null}
          {props.showAddFunds ? <AddFunds /> : null}
          {props.showSpendFunds ? <SpendFunds /> : null}
          {props.showAllTransactions ? <AllTransactions /> : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showAllWallets: state.allWallets,
    showNewWallet: state.newWallet,
    showCheckBalance: state.checkBalance,
    showAddFunds: state.addFunds,
    showSpendFunds: state.spendFunds,
    showAllTransactions: state.allTransactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAllWalletsClick: () => dispatch({ type: actionTypes.SWITCH_ALL_WALLETS }),
    onNewWalletClick: () => dispatch({ type: actionTypes.SWITCH_NEW_WALLET }),
    onCheckBalanceClick: () =>
      dispatch({ type: actionTypes.SWITCH_CHECK_BALANCE }),
    onAddFundsClick: () => dispatch({ type: actionTypes.SWITCH_ADD_FUNDS }),
    onSpendFundsClick: () => dispatch({ type: actionTypes.SWITCH_SPEND_FUNDS }),
    onAllTransactionsClick: () =>
      dispatch({ type: actionTypes.SWITCH_ALL_TRANSACTIONS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

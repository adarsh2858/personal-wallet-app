import * as actionTypes from "./actions";

const initialState = {
  allWallets: true,
  newWallet: false,
  checkBalance: false,
  addFunds: false,
  spendFunds: false,
  allTransactions: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_ALL_WALLETS:
      return {
        ...state,
        allWallets: true,
        newWallet: false,
        checkBalance: false,
        addFunds: false,
        spendFunds: false,
        allTransactions: false,
      };

    case actionTypes.SWITCH_NEW_WALLET:
      return {
        ...state,
        allWallets: false,
        newWallet: true,
        checkBalance: false,
        addFunds: false,
        spendFunds: false,
        allTransactions: false,
      };

    case actionTypes.SWITCH_CHECK_BALANCE:
      return {
        ...state,
        allWallets: false,
        newWallet: false,
        checkBalance: true,
        addFunds: false,
        spendFunds: false,
        allTransactions: false,
      };

    case actionTypes.SWITCH_ADD_FUNDS:
      return {
        ...state,
        allWallets: false,
        newWallet: false,
        checkBalance: false,
        addFunds: true,
        spendFunds: false,
        allTransactions: false,
      };

    case actionTypes.SWITCH_SPEND_FUNDS:
      return {
        ...state,
        allWallets: false,
        newWallet: false,
        checkBalance: false,
        addFunds: false,
        spendFunds: true,
        allTransactions: false,
      };

    case actionTypes.SWITCH_ALL_TRANSACTIONS:
      return {
        ...state,
        allWallets: false,
        newWallet: false,
        checkBalance: false,
        addFunds: false,
        spendFunds: false,
        allTransactions: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

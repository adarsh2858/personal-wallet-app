import * as actionTypes from "./actions";

const initialState = {
  allWallets: true,
  newWallet: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_ALL_WALLETS:
      return {
        ...state,
        allWallets: true,
        newWallet: false,
      };
    case actionTypes.SWITCH_NEW_WALLET:
      return {
        ...state,
        allWallets: false,
        newWallet: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

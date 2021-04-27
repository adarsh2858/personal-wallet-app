const redux = require("redux");
const reduxLogger = require("redux-logger")

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const initialState = {
  numberOfCakes: 10,
  numberOfIcecreams: 20,
};

const buyCake = () => {
  return {
    type: "BUY_CAKE",
    payload: "This is my second node react tutorial.",
  };
};

const buyIcecream = () => {
    return {
        type: "BUY_ICECREAM",
        payload: "Hello world"
    }
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };

//     case BUY_ICECREAM:
//         return {
//             ...state,
//             numberOfIcecreams: state.numberOfIcecreams - 1,
//         };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }

        default:
            return state;
    }
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
//   console.log("Updated State", store.getState());
});

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()

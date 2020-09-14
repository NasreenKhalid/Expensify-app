import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

// createStore function is actually the Reducer
// Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }

  //   if (action.type === "INCREMENT") {
  //     return {
  //       count: state.count + 1,
  //     };
  //   } else {
  //     return state;
  //   }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch method is used to sent actions over

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "RESET",
// });
store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

const initialState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count <= 0) {
        alert("수량은 0 밑으로 내려갈 수 없습니다.");
        return { count: 0 };
      } else {
        return { count: state.count - 1 };
      }
    default:
      throw new Error();
  }
}

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

export const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

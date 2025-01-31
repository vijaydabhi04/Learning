import React, { useReducer } from "react";

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default function ExampleuseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div >
            <h2>Counter: {state.count}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} >
                Decrement
            </button>
        </div>
    );
};
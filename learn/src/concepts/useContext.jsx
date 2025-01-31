import React, { createContext, useContext, useState } from "react";

// Create a context
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

const CounterDisplay = () => {
    const { count } = useContext(CounterContext);
    return <h2>Counter: {count}</h2>;
};

const CounterButtons = () => {
    const { increment, decrement } = useContext(CounterContext);
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} >
                Decrement
            </button>
        </div>
    );
};

export default function ExampleuseContext() {
    return (
        <CounterProvider>
            <div >
                <CounterDisplay />
                <CounterButtons />
            </div>
        </CounterProvider>
    );
};






import React, { useState, useCallback } from "react";

// Parent Component
export default function ExampleUseCallback() {
    const [count, setCount] = useState(0);

    // useCallback ensures that incrementCounter function reference doesn't change
    const incrementCounter = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <h2>UseCallback Example</h2>
            <p>Count: {count}</p>
            <CounterButton onIncrement={incrementCounter} />
        </div>
    );
}

// Child Component
const CounterButton = React.memo(({ onIncrement }) => {
    console.log("Child component re-rendered");
    return <button onClick={onIncrement}>Increment</button>;
});

import React, { useState, useMemo } from 'react';

export default function ExampleUseMemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    // Expensive computation function
    const expensiveCalculation = (num) => {
        console.log('Running expensive calculation...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result; 
    };

    // useMemo caches the result of expensiveCalculation until `number` changes
    const computedValue = useMemo(() => expensiveCalculation(number), [number]);

    return (
        <div>
            <h2>UseMemo Example</h2>
            <div>
                <label>Enter a number: </label>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
            </div>
            <p>Computed Value: {computedValue}</p>
            <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
        </div>
    );
}

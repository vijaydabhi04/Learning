import React from 'react'
import { useRef, useEffect, useState } from 'react';

export default function ExmapleuseRef() {
    // Example 1: DOM Reference
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    // Focus the input field when button is clicked
    const focusInput = () => {
        inputRef.current.focus();
        // Optional: We can also modify other DOM properties
        inputRef.current.style.border = '2px solid blue';
    };

    // Example 2: Preserving values between renders
    const renderCountRef = useRef(0);
    const [count, setCount] = useState(0);

    // This effect will run on every render
    useEffect(() => {
        // Unlike state, updating ref doesn't cause re-render
        renderCountRef.current += 1;
        console.log(`Component has rendered ${renderCountRef.current} times`);
    });

    return (
        <div className="p-4">
            {/* Example 1: DOM Reference */}
            <div className="mb-4">
                <h3>Example 1: DOM Reference</h3>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something..."

                />
                <button
                    onClick={focusInput}

                >
                    Focus Input
                </button>
            </div>

            {/* Example 2: Render Count */}
            <div>
                <h3>Example 2: Preserving Values Between Renders</h3>
                <button
                    onClick={() => setCount(c => c + 1)}

                >
                    Increment Count: {count}
                </button>
                <p>Number of renders: {renderCountRef.current}</p>
            </div>
        </div>
    );
};

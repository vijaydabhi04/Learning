import React, { useState, useDeferredValue, useEffect } from "react";

const ExpensiveList = ({ query }) => {
    const filteredItems = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`).filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h3>Filtered Items</h3>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
export default function ExampleuseDeferredValue() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query); // Deferred value for query input

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search items"
            />
            <ExpensiveList query={deferredQuery} />
        </div>
    );
};

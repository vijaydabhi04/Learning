import React, { useState, useLayoutEffect, useRef } from "react";

export default function ExampleuseLayoutEffect() {
    const [width, setWidth] = useState(0);
    const boxRef = useRef();

    // useLayoutEffect runs synchronously after the DOM mutation
    useLayoutEffect(() => {
        // Get the width of the element and update the state
        if (boxRef.current) {
            setWidth(boxRef.current.getBoundingClientRect().width);
        }
    }, []); // Empty dependency array means this runs once after the initial render

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: "700px", height: "200px", backgroundColor: "lightblue" }}
            >
                <h3>Box Width: {width}px</h3>
            </div>
            <p>
                The width of the box is measured using `useLayoutEffect` and set in the state.
            </p>
        </div>
    );
};


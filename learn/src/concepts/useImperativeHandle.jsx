import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

// Child component
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    const [value, setValue] = useState("");

    // Custom logic with useImperativeHandle
    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log("Focus method called");
            inputRef.current.focus();
        },
        reset: () => {
            console.log("Reset method called");
            setValue("");
        }
    }));



    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
});

// Parent component
export default function ExampleuseImperativeHandle() {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();  // Call the custom focus method from the child
    };

    const handleReset = () => {
        inputRef.current.reset();  // Call the custom reset method from the child
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <CustomInput ref={inputRef} />
            <button onClick={handleFocus}>Focus Input</button>
            <button onClick={handleReset}>Reset Input</button>
        </div>
    );
};


import React from 'react';
import { useState, useEffect } from 'react';

export default function ExampleuseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [userData, setUserData] = useState(null);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log('This effect runs on every render');
    });

    useEffect(() => {
        console.log('This effect runs only once when component mounts');
        return () => {
            console.log('Cleanup - runs when component unmounts');
        };
    }, []);

    useEffect(() => {
        console.log(`Count changed to: ${count}`);
        document.title = `Count: ${count}`;
    }, [count]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakerapi.it/api/v2/persons');
                const data = await response?.data;
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (search) {
                console.log(`Searching for: ${search}`);
                setResults([`Result for ${search}`]);
            }
        }, 500);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [search]);

    return (
        <div>
            <div>
                <button onClick={() => setCount(c => c + 1)}>
                    Count: {count}
                </button>
            </div>
            <div>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
            </div>

            <div>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
                {results.map((result, index) => (
                    <div key={index}>{result}</div>
                ))}
            </div>
            <div>
                {userData && (
                    <div>
                        <h2>User Data:</h2>
                        {userData}
                    </div>
                )}
                {!userData && <p>Loading user data...</p>}
            </div>
        </div>
    );
};

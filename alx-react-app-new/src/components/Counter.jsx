import React, { useState } from 'react';
import React, { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0); // Initialize count to 0

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white' }}
            >
                Increment
            </button>
            <button
                onClick={() => setCount(count - 1)}
                style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white' }}
            >
                Decrement
            </button>
            <button
                onClick={() => setCount(0)}
                style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white' }}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;

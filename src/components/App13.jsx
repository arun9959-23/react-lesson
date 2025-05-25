import React, { useState, useEffect } from 'react';

function App13() {
  const [input, setInput] = useState(10);
  const [results, setResults] = useState({
    add: 0,
    sub: 0,
    mul: 0,
    div: 0,
  });

  useEffect(() => {
    setResults({
      add: 100 + Number(input),
      sub: 100 - Number(input),
      mul: 100 * Number(input),
      div: input !== 0 ? (100 / Number(input)).toFixed(2) : 'Infinity',
    });
  }, [input]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>App13 - useEffect Arithmetic</h2>
      <div>
        <label>
          Input (Number): 
          <input 
            type="number" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            style={{ margin: '10px' }}
          />
        </label>
      </div>
      <div>
        <p>Addition (100 + input): {results.add}</p>
        <p>Subtraction (100 - input): {results.sub}</p>
        <p>Multiplication (100 * input): {results.mul}</p>
        <p>Division (100 / input): {results.div}</p>
      </div>
    </div>
  );
}

export default App13;
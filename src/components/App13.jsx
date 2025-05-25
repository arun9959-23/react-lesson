import React, { useState, useEffect } from 'react';
import './App13.css';

function App13() {
  const [input, setInput] = useState(10);
  const [results, setResults] = useState({
    add: 0,
    sub: 0,
    mul: 0,
    div: 0,
  });

  useEffect(() => {
    const num = Number(input);
    setResults({
      add: 100 + num,
      sub: 100 - num,
      mul: 100 * num,
      div: num !== 0 ? (100 / num).toFixed(2) : 'Infinity',
    });
  }, [input]);

  return (
    <div className="app13-container">
      <h2>App13</h2>
      <h3>Assignment</h3>

      <div className="box-row">
        <div className="operation-box">
          <strong>Addition</strong><br />
          100 + {input} = {results.add}
        </div>
        <div className="operation-box">
          <strong>Subtraction</strong><br />
          100 - {input} = {results.sub}
        </div>
      </div>

      <div className="input-section">
        <p><strong>enter the number to operate
            </strong></p>
        <input 
          type="number" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
      </div>

      <div className="box-row">
        <div className="operation-box">
          <strong>Multiplication</strong><br />
          100 * {input} = {results.mul}
        </div>
        <div className="operation-box">
          <strong>Division</strong><br />
          100 / {input} = {results.div}
        </div>
      </div>
    </div>
  );
}

export default App13;
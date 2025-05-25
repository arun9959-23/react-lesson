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
    const num = Number(input);
    setResults({
      add: 100 + num,
      sub: 100 - num,
      mul: 100 * num,
      div: num !== 0 ? (100 / num).toFixed(2) : 'Infinity',
    });
  }, [input]);
return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>App13</h2>
      <h3>Assignment</h3>
      <div style={containerStyle}>
        <div style={boxStyle}>
          <strong>Addition</strong><br />
          100 + {input} = {results.add}
        </div>
        <div style={boxStyle}>
          <strong>Subtraction</strong><br />
          100 - {input} = {results.sub}
        </div>
      </div>

      <div>
        <p><strong>input type=number</strong></p>
        <input 
          type="number" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          style={{ padding: '10px', fontSize: '16px', textAlign: 'center' }}
        />
      </div>

      <div style={containerStyle}>
        <div style={boxStyle}>
          <strong>Multiplication</strong><br />
          100 * {input} = {results.mul}
        </div>
        <div style={boxStyle}>
          <strong>Division</strong><br />
          100 / {input} = {results.div}
        </div>
      </div>
    </div>
  );
}

export default App13;
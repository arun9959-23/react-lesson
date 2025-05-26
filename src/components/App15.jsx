import React, { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();
  
  const [sum, setSum] = useState(null);
  const [textColor, setTextColor] = useState("black");

  const handleSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
  };

  const handleAddition = () => {
    const num1 = parseFloat(num1Ref.current.value) || 0;
    const num2 = parseFloat(num2Ref.current.value) || 0;
    setSum(num1 + num2);
  };

  const handleColorChange = () => {
    const newColor = colorRef.current.value;
    setTextColor(newColor);
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>

   
      <p>
        <input type="text" ref={nameRef} />
      </p>
      <button onClick={handleSubmit}>Submit</button>

      <hr />
      <h3>Add Two Numbers</h3>
      <input type="number" ref={num1Ref} placeholder="First Number" />
      <input type="number" ref={num2Ref} placeholder="Second Number" />
      <button onClick={handleAddition}>Add</button>
      {sum !== null && <p>Result: {sum}</p>}

      <hr />

      <h3>Change Color</h3>
      <input type="text" ref={colorRef} placeholder="Enter color" />
      <button onClick={handleColorChange}>Change</button>
      <p style={{ color: textColor }}>Hello World</p>
    </div>
  );
}

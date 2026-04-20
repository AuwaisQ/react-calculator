import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    { label: '7', type: 'num' },
    { label: '8', type: 'num' },
    { label: '9', type: 'num' },
    { label: '+', type: 'op' },
    { label: '4', type: 'num' },
    { label: '5', type: 'num' },
    { label: '6', type: 'num' },
    { label: '-', type: 'op' },
    { label: '1', type: 'num' },
    { label: '2', type: 'num' },
    { label: '3', type: 'num' },
    { label: '*', type: 'op' },
    { label: 'C', type: 'special' },
    { label: '0', type: 'num' },
    { label: '=', type: 'special' },
    { label: '/', type: 'op' },
  ];

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        setInput('');
        setResult('');
        break;

      case '=':
        try {
          const calculation = eval(input);
          setResult(calculation.toString());
          setInput(calculation.toString());
        } catch (error) {
          setResult('Error');
        }
        break;

      default:
        const lastChar = input.slice(-1);
        const operators = ['+', '-', '*', '/'];

        if (operators.includes(value) && operators.includes(lastChar)) {
          setInput(input.slice(0, -1) + value);
        } else {
          setInput(input + value);
        }
        break;
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" className="input" value={input} readOnly />
          <div className="output">{result}</div>
        </div>
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`btn-${btn.type}`}
              onClick={() => handleButtonClick(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

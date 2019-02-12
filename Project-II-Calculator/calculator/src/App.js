import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay solution="0" />
      <ActionButton text="clear" buttonStyle="action" />
      <NumberButton text="/" buttonStyle="symbol" />
      <NumberButton text="x" buttonStyle="symbol" />
      <NumberButton text="-" buttonStyle="symbol" />
      <NumberButton text="+" buttonStyle="symbol" />
      <NumberButton text="=" buttonStyle="symbol" />
      <NumberButton text="9" buttonStyle="number" />
      <NumberButton text="8" buttonStyle="number" />
      <NumberButton text="7" buttonStyle="number" />
      <NumberButton text="6" buttonStyle="number" />
      <NumberButton text="5" buttonStyle="number" />
      <NumberButton text="4" buttonStyle="number" />
      <NumberButton text="3" buttonStyle="number" />
      <NumberButton text="2" buttonStyle="number" />
      <NumberButton text="1" buttonStyle="number" />
      <ActionButton text="0" buttonStyle="action" />
    </div>
  );
};

export default App;

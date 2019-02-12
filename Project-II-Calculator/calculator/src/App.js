import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay solution="0" displayStyle="display" />
      <ActionButton text="clear" buttonStyle="action" />
      <NumberButton text={"\u00F7"} buttonStyle="symbol" />
      <NumberButton text="7" buttonStyle="number" />
      <NumberButton text="8" buttonStyle="wider number" />
      <NumberButton text="9" buttonStyle="wider number" />
      <NumberButton text={"\u00D7"} buttonStyle="symbol" />
      <NumberButton text="4" buttonStyle="number" />
      <NumberButton text="5" buttonStyle="wider number" />
      <NumberButton text="6" buttonStyle="wider number" />
      <NumberButton text={"\u2212"} buttonStyle="symbol" />
      <NumberButton text="1" buttonStyle="number" />
      <NumberButton text="2" buttonStyle="wider number" />
      <NumberButton text="3" buttonStyle="wider number" />
      <NumberButton text="+" buttonStyle="symbol" />
      <ActionButton text="0" buttonStyle="action bold" />
      <NumberButton text="=" buttonStyle="symbol" />
    </div>
  );
};

export default App;

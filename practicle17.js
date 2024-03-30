import './App.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>202203103510124<br/>Anki Patil</h2>
      <h1>Counter</h1>
      <p className="count-display">Current count: {count}</p>
      <div className="button-container">
        <button className="counter-button" onClick={incrementCount}>
          Increment
        </button>
        <button className="counter-button" onClick={decrementCount}>
          Decrement
        </button>
      </div>
    </div>
  );
}
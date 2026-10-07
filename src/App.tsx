import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="header">COUNTER APP</header>
      <div className="counter">
        <span className="count">{count}</span>
        <div className="buttons-wrapper">
          <button
            className="button minus"
            onClick={() => setCount((prev) => (prev !== 0 ? prev - 1 : 0))}
          >
            -
          </button>
          <button
            className="button plus"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

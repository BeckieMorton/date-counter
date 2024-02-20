import { useState } from "react";
import React from "react";
import "./App.css";

export default function App2() {
  return (
    <div>
      <h1>Date Counter - 2nd Edition</h1>
      <p>
        <Counter />
      </p>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  let todaysDate = new Date();

  const addStep = () => {
    setSteps(steps + 5);
  };

  const minusStep = () => {
    setSteps(steps - 5);
  };

  const addCount = () => {
    setCount(count + steps);
  };

  const minusCount = () => {
    setCount(count - steps);
    //can do <button onClick=((c) => c -1)>-</button>
  };

  const resetValues = () => {
    setCount(0);
    setSteps(0);
  };

  return (
    <div>
      <p>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        Step: {steps}
      </p>
      <p>
        <p>Count</p>
        <button onClick={minusCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={addCount}>+</button>
      </p>
      <p>
        <span>
          {count === 0
            ? "It is today "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
          {date.toDateString()}
        </span>
      </p>
      {count !== 0 || steps !== 0 ? (
        <p>
          <button onClick={resetValues}>Reset</button>
        </p>
      ) : null}
    </div>
  );
};

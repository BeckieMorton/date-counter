import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Date Counter</h1>
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

  return (
    <div>
      <p>
        <button onClick={minusStep}>-</button>
        Step: {steps}
        <button onClick={addStep}>+</button>
      </p>
      <p>
        <button onClick={minusCount}>-</button>
        Count: {count}
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
      <p>Today's date is: {todaysDate.toLocaleDateString()}</p>
    </div>
  );
};

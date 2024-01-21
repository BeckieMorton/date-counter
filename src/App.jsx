import { useState } from "react";
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
  const [date, setDate] = useState([]);

  const currentDate = new Date().toDateString();

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
        {count} from today is {date}
      </p>
      <p>Today's date is: {currentDate}</p>
    </div>
  );
};

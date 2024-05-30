import React, { useState } from "react";

import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(1);

  const change = (e) => {
    e.target.value = e.target.value.replace(/^0/, "");
    if (Number(e.target.value) < 2) setCount(1);
    setCount(Number(e.target.value));
  };
  const addZero = (number) => (number <= 9 ? "0" + number : number);

  const increment = () => {
    setCount(Number(count + 1));
  };

  const decrement = () => {
    count < 2 ? setCount(1) : setCount(Number(count - 1));
  };

  return (
    <div className="counter-box">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => decrement()}
        >
          <line
            x1="15.5303"
            y1="12.2646"
            x2="8.47145"
            y2="12.2646"
            stroke="#98A2B3"
          />
        </svg>
      </button>
      <input type="number" onChange={(e) => change(e)} value={count}></input>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => increment()}
        >
          <path
            d="M12.1349 8.47064V15.5295M15.5285 12.1358H8.46973"
            stroke="#F2F4F7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;

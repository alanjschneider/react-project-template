import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function sub() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
    </>
  );
}

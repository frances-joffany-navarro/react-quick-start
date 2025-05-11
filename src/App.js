import { useState } from 'react';
export default function App() {
  return (
    <>
      <MyButton />
      <MyButton />

    </>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      <p>You clicked {count} time/s</p>
    </div>
  );

}
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

    </>
  );
}


function MyButton({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Click me!
      </button>
      <p>You clicked {count} {count <= 1 ? "time" : "times"} </p>
    </div>
  );

}
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("initial text");

  return (
    <div className="App">
      <p>This React App lives inside a web component</p>

      <h1>Testing events</h1>

      <fieldset>
        <legend>Click</legend>
        <p>Counter: {count}</p>

        <button onClick={() => setCount((i) => i + 1)}>+1</button>
      </fieldset>

      <fieldset>
        <legend>Change</legend>

        <p>Value: {value}</p>
        <p>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </p>
      </fieldset>
    </div>
  );
}

export default App;

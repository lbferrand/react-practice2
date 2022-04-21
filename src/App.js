import { useState } from "react";
import "./App.css";

function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>{year}</h2>
          <button onClick={() => setYear(year + 1)}>New Year</button>
        </div>
        <div>
          <h1>Manager on Duty: {manager}</h1>
          <button onClick={() => setManager("Rachel")}>New Manager</button>
        </div>
        <div>
          <h1>Status: {status}</h1>
          <button onClick={() => setStatus("Open")}>Open</button>
          <button onClick={() => setStatus("Back in 5")}>Break</button>
          <button onClick={() => setStatus("Closed")}>Closed</button>
        </div>
      </header>
    </div>
  );
}

export default App;

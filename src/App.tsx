import "./App.css";
import { data } from "./data.ts";
import Chart from "./Chart.tsx";
import { useState } from "react";

function App() {
  const months = Object.keys(data);
  const [currentMonth, setMonth] = useState<string>(months[0]);

  return (
    <>
      <div>
        <h1>Poker Pals Chip Stacks</h1>
        <label htmlFor="months">Choose a month: </label>
        <select
          name="months"
          onChange={(event) => setMonth(event.target.value)}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div>
        {currentMonth ? (
          <>
            <Chart stackData={data[currentMonth].stacks} />
          </>
        ) : null}
      </div>
      <ul>
        <li>Hands: {data[currentMonth].hands}</li>
        <li>Flops: {data[currentMonth].flops}</li>
        <li>Turns: {data[currentMonth].turns}</li>
        <li>Rivers: {data[currentMonth].rivers}</li>
        <li>All Ins: {data[currentMonth].allIns}</li>
      </ul>
    </>
  );
}

export default App;
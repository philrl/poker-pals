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
      </div>
      <div>
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
          <Chart
            players={data[currentMonth].players}
            stackData={data[currentMonth].stacks}
          />
        ) : null}
      </div>

      <div className="data-container">
        <div>
          <strong>Match Stats:</strong>
          <ul>
            <li>Hands: {data[currentMonth].hands}</li>
            <li>Flops: {data[currentMonth].flops}</li>
            <li>Turns: {data[currentMonth].turns}</li>
            <li>Rivers: {data[currentMonth].rivers}</li>
            <li>All Ins: {data[currentMonth].allIns}</li>
          </ul>
        </div>
        <div>
          <strong>Largest Pots:</strong>
          <ul>
            {data[currentMonth].largestPots.map((pot, idx) => (
              <li key={`${pot.name}-${pot.pot}-${idx}`}>
                {pot.name}: {pot.pot}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Pots won</strong>
          <ul>
            {Object.entries(data[currentMonth].potsWon)
              .toSorted(([, a], [, b]) => b - a)
              .map(([player, pots]) => (
                <li key={player}>
                  {player}: {pots}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <strong>Exit times</strong>
          <ul>
            {data[currentMonth].exits.map((exit) => (
              <li key={exit.name}>
                {exit.name}: {new Date(exit.at).toLocaleTimeString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

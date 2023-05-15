import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";

import Donut from "./components/charts/Donut";
import Bar from "./components/charts/Bar";
import Line from "./components/charts/Line";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Build React Graphs The Easy Way</h1>
        <div className="section">
          <Donut />
          <div className="section">
            <Bar />
          </div>
          <div className="section">
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { AllCards } from "./component/AllCards";
import data from "./utilis/data";

function App() {
  const [val, setVal] = useState("");
  const [filterData, setFilterData] = useState(data);
  function filterHandler() {
    let res = data.filter((item) => item.title.toLowerCase().includes(val));
    setFilterData(res);
    console.log(res);
  }
  return (
    <div>
      <h1>Store Items</h1>
      <div>
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => setVal(e.target.value)}
          style={{ width: "50%", height: "15%", padding: "8px" }}
        />
        <button
          style={{ marginLeft: "10px", height: "15%", padding: "8px" }}
          onClick={filterHandler}
        >
          Search
        </button>
        <br />
        <br />
        <AllCards data={filterData} />
      </div>
    </div>
  );
}

export default App;

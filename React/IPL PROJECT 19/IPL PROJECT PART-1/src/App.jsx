import { useEffect, useState } from "react";

function App() {
  const [matchesData, setMatcheData] = useState([]);

  async function FetchMatchData() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e8a079b1a1mshbb599346d3f5166p13bca7jsn7530bdc30834",
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      let filterData = result.matchDetails.filter(
        (singleMatch) => singleMatch["matchDetailsMap"],
      );
      setMatcheData(filterData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    FetchMatchData();
  }, []);

  return (
    <div>
      {matchesData.map((data, i) =>
        data.matchDetailsMap.match.map((singleMatch) => (
          <h1>
            {singleMatch.matchInfo.team1.teamSName} {" vs "}
            {singleMatch.matchInfo.team2.teamSName} {data.matchDetailsMap.key}{" "}
            {singleMatch.matchInfo.status}
          </h1>
        )),
      )}
    </div>
  );
}

export default App;

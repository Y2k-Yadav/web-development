import Home from "./components/Home"
import MatchDetails from "./components/MatchDetails"
import { Route , Routes} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/MatchDetails/:matchid" element={<MatchDetails />}/>
    </Routes>
  )
}

export default App;

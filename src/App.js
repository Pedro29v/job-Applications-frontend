import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import NewJobAppli from "./components/form/NewJobAppli";
import Detail from "./components/cards/Detail";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/new" exact element={<NewJobAppli />} />
        <Route path="/detail/:id" exact element={<Detail />} />
        <Route path="/statistics" exact element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import NewJobAppli from "./components/form/NewJobAppli";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/new" exact element={<NewJobAppli />} />
      </Routes>
    </div>
  );
}

export default App;

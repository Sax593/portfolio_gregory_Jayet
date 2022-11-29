import Home from "@pages/Home/Home";
import Project from "@pages/Project/Project";
import Skill from "@pages/Skill/Skill";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;

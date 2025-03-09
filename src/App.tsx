import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PlanetDetail from "./components/PlanetDetail"
import SolarSystem from "./components/SolarSystem"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SolarSystem />} />
          <Route path="/planet/:planetName" element={<PlanetDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


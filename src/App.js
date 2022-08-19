import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Patients from "./screens/Patients/Patients";
import Medicines from "./screens/Medicines/Medicines";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/patients" element={<Patients />}></Route>
          <Route exact path="/medicines" element={<Medicines />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

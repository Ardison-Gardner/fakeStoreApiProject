import "./components/styles/styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

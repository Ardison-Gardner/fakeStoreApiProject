import "./components/styles/styles.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductView from "./components/ProductView";
import Test from "./components/Test";
import { GlobalState, initialState } from "./context/globalState";

function App() {
  const [state, setState] = useState(initialState);

  return (
    <GlobalState.Provider value={{ state, setState }}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/products/:id" element={<ProductView />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState.Provider>
  );
}

export default App;

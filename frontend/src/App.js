// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyElectricity from "./pages/buy-electricity";
import CheckElectricity from "./pages/check-electricity";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/buy" exact element={<BuyElectricity/>} />
          <Route path="/check" exact element={<CheckElectricity/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

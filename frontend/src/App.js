// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyElectricity from "./pages/buy-electricity";
import CheckElectricity from "./pages/check-electricity";
import { GlobalContext ,AppContext} from "./components/GlobalContext";
import Login from "./pages/login";
import Header from "./components/Header";
import Signup from "./pages/signup";
import React, {useState, useContext} from "react";
import NotFound from "./pages/pageNotfound";
import Unauthorized from "./pages/unauthorized";
import Protected from "./components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(AppContext);
  if(user){
    setIsLoggedIn(true)
  }
  return (
    <GlobalContext>
    <Router>
    <div>
      <Header/>
        <Routes>
          <Route path="/home" exact element={
            <Protected isLoggedIn={isLoggedIn}>
          <Home/>
          </Protected>
          } />
          <Route path="/buy" exact element={<BuyElectricity/>} />
          <Route path="/check" exact element={<CheckElectricity/>} />
          <Route path="/" exact element={<Login/>} />
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/notFound" exact element={<NotFound/>} />
          <Route path="/unauthorized" exact element={<Unauthorized/>} />
        </Routes>
    </div>
    </Router>
    </GlobalContext>
  );
}

export default App;

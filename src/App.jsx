import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

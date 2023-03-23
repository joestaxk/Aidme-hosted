import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Service from "./pages/Services/Service";
import Errander from "./pages/Errander/Errander";
import Login from "./pages/Signup/Login";

function App() {
   
  const [open,setOpen] = useState(false);
  const [first,setFirst] =useState(false);
  const [sec,setSec] = useState(false);
  const [third,setThird] = useState(false);
  const [four,setFour] = useState(false);
  const [five,setFive] = useState(false);
  const [six,setSix] = useState(false);
  const [last,setLast] = useState(false)
  const [isErrand, setIsErrand] = useState(false);

  const openModal = () => {
    setOpen(true);
}
const closeModal = () => {
  setOpen(false);
}

  const firstOpen = ( ) => {
    setFirst(true);
  }
  const firstClose  = ( ) => {
    setFirst(false);
  }

  const secOpen = () => {
    setSec(true)
  }
  const secClose = () => {
    setSec(false);
  }
 const thirdOpen = () => {
  return setThird(true);
 }
 const thirdClose = () => {
  return setThird(false)
 }
 const fourOpen = () => {
  setFour(true);
 }
   
 const fourClose = () => {
  setFour(false);
 }
 const fiveOpen = ( ) => {
  setFive(true)
 }
 const fiveClose = () => {
  setFive(false)
 }
 const sixOpen = () => {
   setSix(true);
 }
 const sixClose = () => {
   setSix(false);
 }
 const lastOpen = () => {
  setLast(true);
 }
 const lastClose = () => {
  setLast(false)
 }
 const openIsErrand = () => {
    setIsErrand(true);
 }
 const closeIsErrand = () => {
   setIsErrand(false);
 }
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/help" element={<Help />} />
          <Route path="/errander-signup" element={<Errander 
          open={open}
           close={closeModal}
            openModal={openModal}
            first={first}
            firstOpen={firstOpen}
            firstClose={firstClose}
            sec={sec}
            secOpen={secOpen}
            secClose={secClose}
            third={third}
            thirdOpen={thirdOpen}
            thirdClose={thirdClose}
            four={four}
            fourOpen={fourOpen}
            fourClose={fourClose}
            five={five}
            fiveOpen={fiveOpen}
            fiveClose={fiveClose}
            six={six}
            sixOpen={sixOpen}
            sixClose={sixClose}
            last={last}
            lastOpen={lastOpen}
            lastClose={lastClose}
            isErrand={isErrand}
            openIsErrand={openIsErrand}
            closeIsErrand={closeIsErrand}
            />} />
          <Route path="/help" element={<Help />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

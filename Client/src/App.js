import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Team from "./components/Team";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Feedback from './components/Feedback';
import Maps from './components/Maps';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="component-linking">
            <Routes>
                <Route path = "/services" element = {<Services />} />
                <Route path = "/team" element = {<Team/>} />
                <Route path = "/about-us" element = {<About/>} />
                <Route path = "/login" element = {<Login/>} />
                <Route path = "/signup" element = {<Signup/>} />
                <Route path = "/" element = {<Home/>} />
                <Route path = "/feedback" element = {<Feedback/>} />
                <Route path = "/maps" element = {<Maps/>} />
            </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

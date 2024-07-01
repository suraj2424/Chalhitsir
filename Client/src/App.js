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
import Maps from './components/Maps';


import ContactUs from './components/ContactUs';
import NoPage from './components/NoPage';
import MapSample from './components/MapSample';

import MapComponent from './components/MapComponent';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Career from './components/Career';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
                <Route path = "/contactus" element = {<ContactUs/>} />
                <Route path = "/mapsample" element = {<MapSample/>} />
                <Route path = "/mapcomponent" element = {<MapComponent/>} />
                <Route path = "/*" element = {<NoPage/>} />
                <Route path = "/maps" element = {<Maps/>} />
                <Route path = "/career" element = {<Career/>}/>
            </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

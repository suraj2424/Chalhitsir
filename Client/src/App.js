import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Team from "./components/Team";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ContactUs from './components/ContactUs';
import NoPage from './components/NoPage';
import Career from './components/Career';
import Maps from './components/Maps';

import ServiceContextProvider from './contexts/ServiceContextProvider';


const AppContent = () => {
  const location = useLocation();

  // Paths where Navbar and Footer should be hidden
  const hideNavbarAndFooter = ['/login', '/signup'];

  const shouldHideNavbarAndFooter = hideNavbarAndFooter.includes(location.pathname);
  return (
    <>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <div className="component-linking">
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ServiceContextProvider>
          <AppContent />
        </ServiceContextProvider>
      </div>
    </Router>
  );
}

export default App;

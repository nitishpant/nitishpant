import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Videos from './components/Videos/Videos';
import Projects from './components/Projects/Projects';
import Hire from './components/Hire/Hire';
import Home from "./components/Home/Home";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <hr/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Hire" element={<Hire/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/Videos" element={<Videos/>}/>
      </Routes>
    </Router>
    </>

  );
}

export default App;

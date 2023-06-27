import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { Button } from './components/Button';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/pages/Inicio';
import Informacion from './components/pages/Informacion';
import Planes from './components/pages/Planes';
import Registrarse from './components/pages/Registrarse';

function App() {
  return (
    <>
    <Router>
    <Navbar />  
      <Routes>
          <Route path='/' exact component={Inicio} />
          <Route path='/informacion' component={Informacion} />
          <Route path='/planes' component={Planes} />
          <Route path='/registrarse' component={Registrarse} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

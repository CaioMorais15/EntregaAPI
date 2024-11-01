import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Clientes from './Pages/Clientes';

function App() {
    return(
        <>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/Clientes" element={<Clientes />} />
          </Routes>
        </Router>
        </>
    )
}

export default App

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Badges from './pages/Badges';
import Banners from './pages/Banners';
import Cards from './pages/Cards';
import Testimonials from './pages/Testimonials';
import Tooltip from './pages/Tooltip';
import Toast from './pages/Toast';

export const IconContext = React.createContext();

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/badges' element={<Badges />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/tooltip" element={<Tooltip />} />
            <Route path="/toast" element={<Toast />} />
          </Routes>
        </BrowserRouter>
      </IconContext.Provider>
    </div>
  );
}

export default App;

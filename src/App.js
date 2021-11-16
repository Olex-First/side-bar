import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snacks from './pages/Snacks';
import Beers from './pages/Beers';
import Cocktails from './pages/Cocktails';
import HotDrinks from './pages/HotDrinks';

function App() {
  return (
       <div className='mt-4'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/snacks' exact element={<Snacks/>} />
            <Route path='/beers' element={<Beers/>} />
            <Route path='/cocktails' element={<Cocktails/>} />
            <Route path='/hotdrinks' element={<HotDrinks/>} />
          </Routes>
        </BrowserRouter>
      </div>  

  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';


function App() {
  return (
    <div>
      <header>
        <a href='/'>amazon</a>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homescreen />} />
          <Route path='/product/:slug' element={<Productscreen />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;

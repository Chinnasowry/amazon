import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='d-flex flex-column site-container'>
      <Container>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><a href='/' style={{textDecoration:"none", color:"white"}}>amazon</a></Navbar.Brand>                         
          </Container>
        </Navbar>
      </header>
      <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homescreen />} />
          <Route path='/product/:slug' element={<Productscreen />} />
        </Routes>
      </BrowserRouter>   
      </main>    
      <footer>
        <div className='text-center'>
          All Rights are reserved
        </div>
      </footer> 
      </Container>
    </div>
  );
}

export default App;

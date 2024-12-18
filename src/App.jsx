import React from 'react'
import './App.css'
import Tenaryoperatop from './Tenaryoperatop'
import Crudassignment from './crudassignment'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'
import Home from './Home';


function App() {


  return (
    <>
      <Router>
        <nav>
          <ul>
          <li><Link className='yoyo' to="/">HOME</Link></li>
            <li><Link className='yoyo' to='/array'>ABOUT</Link></li>
            <li> <Link className='yoyo' to="/body">JOB</Link> </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/body' element={<Crudassignment />} />
          <Route path='/array' element={<About/>} />
        </Routes>
      </Router>

      
      {/* <Crudassignment /> */}

      <br /><br /><br />
    </>
  )
}

export default App

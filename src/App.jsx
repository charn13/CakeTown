import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home, About, Contact, Services }from './pages/index.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/aboutus" element={<About />} />
        <Route path='/services'element={<Services/>} />
        <Route  path='/contact' element={<Contact/>} />
        
       
      
       
      
      </Routes>
       
      </Router>
    </>
  )
}

export default App

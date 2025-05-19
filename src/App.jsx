import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from 'react-router-dom'
import Applications from './pages/Applications'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="windowContainer">
      <Navbar/>
      <div className="mainContainer">
        <Routes>
          <Route  path="/" element={<Dashboard/>}/>
          <Route  path="/applications" element={<Applications/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

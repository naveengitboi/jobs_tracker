import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="windowContainer">
      <Navbar/>
      <div className="mainContainer">
        <Dashboard/>
      </div>
    </div>
  )
}

export default App

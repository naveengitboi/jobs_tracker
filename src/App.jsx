import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="windowContainer">
      <Navbar/>
      <div className="mainContainer">
        <h1>Welcome to the app</h1>
      </div>
    </div>
  )
}

export default App

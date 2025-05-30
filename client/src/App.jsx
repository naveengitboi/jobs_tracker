import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from 'react-router-dom'
import Applications from './pages/Applications'
import Profile from './pages/Profile'
import Template from './pages/Template'
import AddTemplate from './forms/AddTemplate'
import Sites from './pages/Sites'
import AddApplication from './forms/AddApplication'
import EditProfile from './forms/EditProfile'
import SitesDisplay from './components/SitesDisplay'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="windowContainer">
      <Navbar/>
      <div className="mainContainer">
        <Routes>
          <Route  path="/" element={<ProtectedRoute/>}>
            <Route index element={<Dashboard/>} />
          </Route>
          <Route  path="/applications" element={<Applications/>}/>
          <Route  path="/profile" element={<Profile/>}/>
          <Route  path="/templates" element={<Template/>}/>
          <Route  path="/sites" element={<Sites/>}>
            <Route index path=":category?" element={<SitesDisplay/>}/> 
          </Route>
          <Route  path="/new_application" element={<AddApplication/>}/>
          <Route  path="/new_template" element={<AddTemplate/>}/>
          <Route  path="/profile/edit_profile" element={<EditProfile/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

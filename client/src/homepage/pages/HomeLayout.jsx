import React from 'react'
import HomeHeader from '../components/HomeHeader'
import "../../styles/homepage/HomeLayout.css"
import { Outlet } from 'react-router-dom'
import HeaderHP from '../components/HeaderHP'

function HomeLayout() {
  return (
    <div className="homeLayout">
        <Outlet/>
    </div>
  )
}

export default HomeLayout
import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

function ProtectedRoute() {
    const auth = false;
  return (
        auth? <Outlet/> : <Navigate to="/profile" />
  )
}

export default ProtectedRoute
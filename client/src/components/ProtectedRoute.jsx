import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

function ProtectedRoute() {
    const auth = true;
  return (
        auth? <Outlet/> : <Navigate to="/profile" />
  )
}

export default ProtectedRoute
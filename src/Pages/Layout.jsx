import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (<>
    <div>signUp/Login</div>
    <Outlet/>
    </>
  )
}

export default Layout
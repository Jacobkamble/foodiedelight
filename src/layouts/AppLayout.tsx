import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <h1>Applayout</h1>
      <Link to={"/"}>Home</Link>

      <Outlet/>
    </>
  )
}

export default AppLayout

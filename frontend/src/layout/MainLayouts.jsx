import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

function MainLayouts() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    </>
  )
}

export default MainLayouts
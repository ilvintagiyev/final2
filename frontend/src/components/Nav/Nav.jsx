import React from 'react'
import "./Nav.scss"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Nav() {
  return (
    <>
    
    <nav>
    <div className='coloshop'>
        <h2 className='colo'>COLO</h2><h2 className='shop'>SHOP</h2>
    </div>
        <ul className='general'>
            <Link to={"Home"} className='link'>Home</Link>
            <Link to={"Add"} className='link'>Add</Link>
            <Link to={"Admin"} className='link'>Admin</Link>
            <Link to={"Basket"} className='link'>Basket</Link>
        <SearchIcon/>
        <PersonIcon/>
        <ShoppingCartIcon/>

        </ul>
    </nav>
    </>
  )
}

export default Nav
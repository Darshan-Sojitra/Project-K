import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
         <nav className='side-nav'>
               <NavLink to='/Auth' className='side-nav-links' activeClassName='active' >
               <p>SignUp</p>
               </NavLink>
               <div className='side-nav-div'>
                <NavLink to='/Public' className='side-nav-links' activeClassName='active' >
                             <p>Public</p>
                </NavLink>
                
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
                              <img src={Globe} width='20' alt='Globe' />
                              <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>

                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                              <p>Tags</p>
                </NavLink>
                
                <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                              <p>User</p>
                </NavLink>
               </div>
         </nav>

    </div>
  )
}

export default LeftSidebar
import React from 'react'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Users = () => {
  return (
               <div className='home-container-1'>
                
                <LeftSidebar/>
                <RightSidebar/>
               
               <div className="home-container-2">
               <div className="avatar">
                 <h1>M</h1>             
               </div>
               <div className='u-details'>
                <h3>Name          :  Mohan Bagan</h3> 
                <h3>Email         :  bohanbagan@gmail.com</h3>  
                <h3>Profession    :  Student</h3> 
                <h3>Ranking       :  151</h3> 
                <h3>Questions     :  05</h3> 
                <h3>Q-Solved      :  11</h3>
                <h3>JoinedOn      :  9 JAN 2022</h3>            
               </div>
              
              
      </div>
      </div>

  ) }
  

export default Users
import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.png'

const Widget = () => {
  return (
    <div className='widget'>
               <h4>The overflow blog</h4>
               <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                              <img src={pen} alt='' width='18'/>
                              <p>Observality is the key to future of software(and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                              <img src={pen} alt='' width='18'/>
                              <p>Podcasts 374: How valuable is yours access name?</p>
                </div>
               </div>

               <h4>Featured on meta</h4>
               <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                              <img src={comment} alt='' width='18'/>
                              <p>Observality is the key to future of software(and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                              <img src={comment} alt='' width='18'/>
                              <p>Podcasts 374: How valuable is yours access name?</p>
                </div>
                <div className='right-sidebar-div-2'>
                              <img src={blacklogo} alt='' width='18'/>
                              <p>Podcasts 374: How valuable is yours access name?</p>
                </div>
               </div>

               <h4>Hot meta posts</h4>
               <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                          <p>38</p>
                              <p>Observality is the key to future of software(and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                             <p>20</p>
                              <p>Podcasts 374: How valuable is yours access name?</p>
                </div>
                <div className='right-sidebar-div-2'>
                             <p>14</p>
                              <p>Podcasts 374: How valuable is yours access name?</p>
                </div>
               </div>
    </div>
  )
}

export default Widget
import React from 'react'
import './About.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const About = () => {
  return (
              <div className='home-container-1'>
                <LeftSidebar/>
                <RightSidebar/>
              
               <div className="home-container-2">
               <div className="pro"><h1>Dont't Learn Alone</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum sit, repellendus ipsam iure illo ex porro cumque, totam autem dolor delectus architecto tenetur non veritatis quaerat, quis aliquid? Dolorem.</p>
               <h1 className='tags-h1'>Being The Pro In The Programming Can Be Easy, Especially With Us</h1>
               <div className="with-us">
                <p>Prepare With Us</p>
                <p>Get Hired With Us</p>
                <p>Grow With Us</p>
               </div>

               <h1 className='tags-h1'>Our Goals</h1>
               <p className='tags-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas minus esse repellendus totam, incidunt atque inventore deserunt accusamus quas? Expedita quae non praesentium aperiam sequi quo iure magnam repudiandae aspernatur voluptas illo, veritatis libero vitae corrupti ipsum, enim eos deleniti mollitia porro odit. Atque voluptatibus quaerat provident iure fugit nam.e</p>

               <div className="achiev-3">   
               <h1 className='tags-h1'>Achievements</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat.</p>
               </div>
              
               <h1 className='tags-h1'>Recognition</h1>
               <p className='tags-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam recusandae velit aliquam nostrum itaque facilis? Quaerat voluptatum rerum maxime! Quas quae recusandae soluta incidunt laborum nam perspiciatis, rem iusto? A Tag is a keyword or label that categorizes your question with othersimilar questions.</p>
              </div>
             
      </div>
    </div>
  )
}

export default About
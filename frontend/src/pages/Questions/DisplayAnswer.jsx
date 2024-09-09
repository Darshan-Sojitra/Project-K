import React from 'react'
// import QuestionsDetails from './QuestionsDetails'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
               question.answer.map((ans)=>(
                  <div className="display-ans" key={ans._id}>
                    <p>{ans.answerText}</p>
                    <div className="question-actions-user">
                       <div className='edit-question-btn'>
                              <button type='button'>Share</button>
                              <button 
                              type='button'>Delete</button>
                       </div>
                       <div>
                             <p>answered {ans.createdAt}</p> 
                             <Link to='' className='user-link' style={{color : '#000000'}}>
                                  {/* <Avatar backgroundColor='green' px='8px' py='5px' >{ans.author.charAt(0).toUpperCase()}</Avatar> */}
                                  <div>
                                    {ans.author._id}
                                  </div>
                              </Link>
                       </div>            
                     </div>
                  </div>
               ))
      }
    </div>
  )
}

export default DisplayAnswer
 
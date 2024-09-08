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
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                       <div className='edit-question-btn'>
                              <button type='button'>Share</button>
                              <button 
                              type='button'>Delete</button>
                       </div>
                       <div>
                             <p>answered {ans.answeredOn}</p> 
                             <Link to='/Users' className='user-link' style={{color : '#000000'}}>
                                  <Avatar backgroundColor='green' px='8px' py='5px' >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                  <div>
                                    {ans.userAnswered}
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

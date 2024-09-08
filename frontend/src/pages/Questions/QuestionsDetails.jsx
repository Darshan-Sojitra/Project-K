import React from 'react'
import {Link, useParams} from 'react-router-dom'
import upvote from '../../assets/up-votes.svg'
import downvote from '../../assets/down-votes.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import './DisplayAnswer'
import DisplayAnswer from './DisplayAnswer'
const QuestionsDetails = () => {

               const {id} = useParams()

 var questionsList = [
                            {
                              _id: '1',
                              upVotes: 3,
                              downVotes: 2,
                              noOfAnswers: 2,
                              QuestionTitle: "What is a functon?",
                              QuestionBody: "JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code",
                              QuestionTags: ["java","node js","react js","mongodb"],
                              userPosted: "mano",
                              askedOn:"Jan 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "kumar",
                                answeredOn: "Jan 2",
                                userId : 2
                              }]
                            },
                            {
                              _id: '2',
                              upVotes: 13,
                              downVotes: 4,
                              noOfAnswers: 3,
                              QuestionTitle: "What is configureStore use?",
                              QuestionBody: "Redux Toolkit has a configureStore () method that simplifies the store setup process. configureStore () wraps around the Redux library’s createStore () method and the combineReducers () method, and handles most of the store setup for us automatically.",
                              QuestionTags: ["javascript","Redux","States","toolkit"],
                              userPosted: "mano",
                              askedOn:"Jan 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "harsh",
                                answeredOn: "Jan 12",
                                userId : 2
                              }]
                            },
                            {
                              _id: '3',
                              upVotes: 10,
                              downVotes: 2,
                              noOfAnswers: 1,
                              QuestionTitle: "What are ES6 features?",
                              QuestionBody: "JavaScript ES6 Features. 1 What is ECMAScript 6 (or ES6) ECMAScript 2015 (or ES6) is the sixth and major edition of the ECMAScript language specification standard. It defines ... 2 The let Keyword. 3 The const Keyword. 4 The for...of Loop. 5 Template Literals",
                              QuestionTags: ["javaScript","ES^","react js","mongodb"],
                              userPosted: "mano",
                              askedOn:"Jan 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "jill",
                                answeredOn: "Jan 22",
                                userId : 2
                              }]
                            },
                            {
                              _id: '4',
                              upVotes: 3,
                              downVotes: 2,
                              noOfAnswers: 0,
                              QuestionTitle: "What are react hooks?",
                              QuestionBody: "Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which 'hook into' React state and lifecycle features from function components. It does not work inside classes.",
                              QuestionTags: ["javascript","REACTjs","react js","mongodb"],
                              userPosted: "mano",
                              askedOn:"Jan 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "kumar",
                                answeredOn: "Jan 2",
                                userId : 2
                              }]
                            },
                            {
                              _id: '5',
                              upVotes: 3,
                              downVotes: 2,
                              noOfAnswers: 0,
                              QuestionTitle: "What is a an anonymous functon?",
                              QuestionBody: "An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression. The below enlightened syntax illustrates the declaration of anonymous function using normal declaration:",
                              QuestionTags: ["python","kotlin","flask",],
                              userPosted: "mano",
                              askedOn:"Jan 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "Anish",
                                answeredOn: "Jan 2",
                                userId : 2
                              }]
                            },
                            {
                              _id: '6',
                              upVotes: 30,
                              downVotes: 2,
                              noOfAnswers: 5,
                              QuestionTitle: "What is OOPs concept?",
                              QuestionBody: "Object means a real-world entity such as a pen, chair, table, computer, watch, etc. Object-Oriented Programmingis a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts: 1. Object 2. Class 3. Inheritance 4. Polymorphism 5. Abstraction 6. Encapsulation",
                              QuestionTags: ["java","cpp","python","js"],
                              userPosted: "mano",
                              askedOn:"march 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "Rick",
                                answeredOn: "march 2",
                                userId : 2
                              }]
                            },
                            {
                              _id: '7',
                              upVotes: 10,
                              downVotes: 1,
                              noOfAnswers: 0,
                              QuestionTitle: "What is a object in js",
                              QuestionBody: "JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.",
                              QuestionTags: ["javascript","node js","react js","mongodb"],
                              userPosted: "mano",
                              askedOn:"april 1",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "Rishi",
                                answeredOn: "april 2",
                                userId : 2
                              }]
                            },
                            {
                              _id: '8',
                              upVotes: 13,
                              downVotes: 0,
                              noOfAnswers: 0, 
                              QuestionTitle: "What is REST api",
                              QuestionBody: "Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.",
                              QuestionTags: ["API","RESTapi","js","mongodb"],
                              userPosted: "mano",
                              askedOn:"feb 25",
                              answer : [{
                                answerBody : "Answer",
                                userAnswered : "kabir",
                                answeredOn: "feb 26",
                                userId : 2
                              }]
                            }
                         
                          ]             
                           

  return (
      <div className='question-details-page'>
         {
              
               questionsList === null ?
               <h1>loading...</h1> :
               <> 
                  {
                       questionsList.filter(question => question._id === id).map(question =>(
                         <div key={question._id}>
                              <section className="question-details-container">
                               <h1>{question.QuestionTitle}</h1> 
                              
                               <div className="question-details-container-2">
                                 <div className="question-votes">
                                   <img src={upvote} alt='' width='18' className='votes-icon' />
                                   <p>{question.upVotes - question.downVotes}</p>
                                   <img src={downvote} alt='' width='18' className='votes-icon' />
                                 </div>
                             
                              <div style={{width : '100%'}}>
                                <p className="question-body">
                                 {question.QuestionBody}
                                </p>
                                <div className="question-details-tags">
                                  {
                                   question.QuestionTags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                   ))
                                  }
                                </div>
                              <div className="question-actions-user">
                                <div >
                                  <button type='button'>Share</button>
                                  <button type='button'>Delete</button>
                                </div>
                              <div>
                                <p>asked {question.askedOn}</p>
                                <Link to='/Users' className='user-link' style={{color : '#000000'}}>
                                  <Avatar backgroundColor='orange' px='8px' py='5px' >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                  <div>
                                    {question.userPosted}
                                  </div>
                                </Link>
                              </div>
                            </div> 
                          </div> 
                        </div>         
                      </section>
                      {
                        question.noOfAnswers !== 0 &&(
                          <section>
                            <h3>
                              {question.noOfAnswers} answers
                            </h3>
                            <DisplayAnswer key={question._id} question={question} />
                          </section>
                        )
                      }

                      <section className='post-ans-container'>
                      <h3>Your Answer</h3>
                      <form>
                        <textarea name="" id="" cols="30" rows="10" className='ta'></textarea><br/>
                        <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                      </form>
                      <p>
                        Browse other Question tagged
                        {
                          question.QuestionTags.map((tag) => (
                            <Link to='Tags' key={tag} className='ans-tags'>{tag}</Link>
                          ))
                        } or <span/>
                          
                        <Link to='/AskQuestion' style={{textDecoration : 'none' , color : '#009dff'}}>ask your own question</Link>
                      </p>
                      </section>
                    </div>
                    
                       ))        
                  }
                 
               </>
         } 
        
            

      </div>
  )
}

export default QuestionsDetails
import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

  const tagsList = [
               {
                              id: 1,
                             tagName: 'javascript',
                             tagDesc: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. '           
                           },
               {
                              id: 2,
                              tagName: 'java',
                              tagDesc: 'Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language  Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java'           
               },
               {
                              id: 3,
                              tagName: 'python',
                              tagDesc: 'Python is a general purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications. It is simple and easy to learn and provides lots of high-level data structures.    '           
                          },
               {
                              id: 4,
                              tagName: 'c++',
                              tagDesc: 'C++ is a general purpose, case-sensitive, free-form programming language that supports object-oriented, procedural and generic programming.C++ is a middle-level language, as it encapsulates both high and low level language features.'           
                          },
              {
                              id: 5,
                              tagName: 'html',
                              tagDesc: 'HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML,.'           
                          },
               {
                              id: 6,
                              tagName: 'reactjs',
                              tagDesc: 'ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. '           
                          },
               {
                              id: 7,
                              tagName: 'angular',
                              tagDesc: 'Angular is a JavaScript framework which makes you able to create reactive Single Page Applications (SPAs). This is a leading front-end development framework which is regularly updated by Angular team of Google. '           
                          },
              {
                              id: 8,
                              tagName: 'php',
                              tagDesc: 'PHP is an open-source, interpreted, and object-oriented scripting language that can be executed at the server-side. PHP is well suited for web development. Therefore, it is used to develop web applications (an application that executes on the server and generates the dynamic page.). '           
                          },
               {
                             id: 9,
                             tagName: 'Perl',
                             tagDesc: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. '           
                           },
               {
                             id: 10,
                             tagName: 'Nodejs',
                             tagDesc: 'node js, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. '           
                           },
  ]


  return (
    <div className='home-container-1'>
               
               <LeftSidebar/>
               <RightSidebar/>
              
      <div className="home-container-2">
               <h1 className='tags-h1'>Tags</h1>
               <p className='tags-p'> A Tag is a keyword or label that categorizes your question with othersimilar questions.</p>
               <p className='tags-p'> Using the right tags make it easier for others to find and answer your question.</p>
               <div className="tags-list-container">
                 {
                              tagsList.map((tag) => (
                                             <TagsList tag={tag} key={tagsList.id} />
                              ))
                 }
               </div>
      </div>
    </div>
  )
}

export default Tags

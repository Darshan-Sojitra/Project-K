import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios
import './HomeMainbar.css';
import QuestionsList from './QuestionsList';

const HomeMainbar = () => {
  const [questionsList, setQuestionsList] = useState([]);  // Initialize with an empty array
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Make an axios GET request to fetch questions
        const response = await axios.get("http://localhost:3000/question", {
          headers: {
            'auhtentication': ` ${localStorage.getItem('token')}`  // Include JWT token if needed
          }
        });

        setQuestionsList(Array.isArray(response.data) ? response.data : []);  // Set the questions list
        setLoading(false);  // Stop loading once data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false);  // Stop loading even if there is an error
      }
    };

    fetchQuestions();  // Fetch questions on component mount
  }, []);

  const location = useLocation();
  const user = 1;  // Placeholder for user authentication status
  const navigate = useNavigate();

  // Authentication check for asking a question
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask questions");
      navigate('/Login');
    } else {
      navigate('/AskQuestion');
    }
  };

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {loading ? (
          <h1>Loading...</h1>  // Show loading while data is being fetched
        ) : error ? (
          <h1>{error}</h1>  // Show error message if there is an error
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
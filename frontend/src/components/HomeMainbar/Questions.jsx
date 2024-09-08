import React from 'react';
import { Link } from 'react-router-dom';
import './HomeMainbar.css';

const Questions = ({ question }) => {
  return (
    <div className='display-question-container'>
      {/* Display question details */}
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className='question-title-link'>
          {question.questionText} {/* Updated to match schema */}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {/* Display tags if they exist */}
            {question.tags && question.tags.length > 0 ? (
              question.tags.map((tag) => <p key={tag}>{tag}</p>)
            ) : (
              <p>No tags</p>  // Display this if there are no tags
            )}
          </div>
          <div className="display-time">
            {/* Handle cases where the author is null */}
             {new Date(question.createdAt).toLocaleString()} by {question.author ? question.author.username : "Unknown"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

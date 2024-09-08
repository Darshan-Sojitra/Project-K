import React, { useState } from 'react';
import './AskQuestion.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTagAdd = (e) => {
    e.preventDefault();
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput(""); // Clear input
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/newquestion",
        {
          questionText: title,
          questiondes: body,
          tags: tags,
        },
        {
          headers: {
            'auhtentication': `${localStorage.getItem('token')}`
          }
        }
      );

      if (res.status === 201) {
        navigate('/');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Unauthorized. Please log in again.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error(err);
    }
  };

  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a Public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input
                type='text'
                id='ask-ques-title'
                placeholder='e.g is there any function to find the index of an element in array'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea
                id='ask-ques-body'
                cols='30'
                rows='10'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </label>
            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <div className='tag-input-container'>
                {tags.map((tag, index) => (
                  <div key={index} className='tag'>
                    {tag}
                    <button type='button' onClick={() => handleTagRemove(tag)}>x</button>
                  </div>
                ))}
                <input
                  type='text'
                  id='ask-ques-tags'
                  placeholder='e.g (javascript, react, css)'
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                />
                <button type='button' onClick={handleTagAdd}>Add Tag</button>
              </div>
            </label>
          </div>
          <input type='submit' value='Review your question' className='review-btn' />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;

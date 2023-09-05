'use client';
import React, { FormEvent } from 'react';

const X: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    // onSubmit();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create X Post</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="topic">Topic</label>
            <div>
              <textarea
                id="topic"
                placeholder="Enter summary of image"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow buttonContainer">
            <div>
              <button type="submit" className="submitButton">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default X;

'use client';
import React, { FormEvent } from 'react';

const Instagram: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    // onSubmit();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create Instagram Post</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="summary">Summary of the image</label>
            <div>
              <textarea
                id="summary"
                placeholder="Enter summary of image"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="tagList">List of tags</label>
            <div>
              <input
                id="tagList"
                type="number"
                placeholder="Enter Tags"
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

export default Instagram;

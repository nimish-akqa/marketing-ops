'use client';
import React, { FormEvent, useRef } from 'react';

const PersonaForm: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    // onSubmit();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create New Persona</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="name">Name</label>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="role">Role</label>
            <div>
              <input
                id="role"
                type="text"
                placeholder="Enter Role"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="problems">Problems</label>
            <div>
              <input
                id="problems"
                type="text"
                placeholder="Enter Problems"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="pains">Pains</label>
            <div>
              <input
                id="pains"
                type="text"
                placeholder="Enter Pains"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="jobs">Jobs</label>
            <div>
              <input
                id="jobs"
                type="text"
                placeholder="Enter Jobs to be done"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="motivation">Motivations</label>
            <div>
              <input
                id="motivation"
                type="text"
                placeholder="Enter Motivations"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="trigger">Trigger</label>
            <div>
              <input
                id="trigger"
                type="text"
                placeholder="Enter Triggers"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="barriers">Barriers</label>
            <div>
              <input
                id="barriers"
                type="text"
                placeholder="Enter Barriers"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="name">Name</label>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="context">Context</label>
            <div>
              <input
                id="context"
                type="text"
                placeholder="Enter Context"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow buttonContainer">
            <div>
              <button type="submit" className="submitButton">
                Create Persona
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonaForm;

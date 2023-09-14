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
              <textarea
                id="name"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="role">Role</label>
            <div>
              <textarea
                id="role"
                placeholder="Enter Role"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="problems">Problems</label>
            <div>
              <textarea
                id="problems"
                placeholder="Enter Problems"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="pains">Pains</label>
            <div>
              <textarea
                id="pains"
                placeholder="Enter Pains"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="jobs">Jobs</label>
            <div>
              <textarea
                id="jobs"
                placeholder="Enter Jobs to be done"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="motivation">Motivations</label>
            <div>
              <textarea
                id="motivation"
                placeholder="Enter Motivations"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="trigger">Trigger</label>
            <div>
              <textarea
                id="trigger"
                placeholder="Enter Triggers"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="barriers">Barriers</label>
            <div>
              <textarea
                id="barriers"
                placeholder="Enter Barriers"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="context">Context</label>
            <div>
              <textarea
                id="context"
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

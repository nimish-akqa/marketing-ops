'use client';
import React, { FormEvent, useState } from 'react';

import DatePicker from 'react-datepicker';
import { Agent } from '@/types/global';

import './projectform.scss';
import 'react-datepicker/dist/react-datepicker.css';

interface ProjectFormProps {
  agents: Agent[];
  // onSubmit: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ agents }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    // onSubmit();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create New Project</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="projectName">Project Name</label>
            <div>
              <input
                id="projectName"
                type="text"
                placeholder="Enter Project Name"
                className="form-control"
              />
            </div>
          </div>

          <div className="formFieldRow">
            <label htmlFor="projectDesc">Project Description</label>
            <div>
              <textarea
                id="projectDesc"
                placeholder="Enter Project Description"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="startDate">Start Date</label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="endDate">End Date</label>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="status">Status</label>
            <div>
              <select name="status" id="status" className="form-control">
                <option value="completed">Completed</option>
                <option value="delay">Delay</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="team">Team Members</label>
            <div>
              <select name="team" id="team" className="form-control" multiple>
                {agents &&
                  agents.map((agent) => (
                    <option value={agent.agentId} key={agent.agentId}>
                      {agent.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="formFieldRow buttonContainer">
            <div>
              <button type="submit" className="submitButton">
                Create Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

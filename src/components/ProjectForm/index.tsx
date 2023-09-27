'use client';
import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { Agent, ProjectForm } from '@/types/global';
import { handleProjectFormSubmit, handleInputChange } from '@/utils/formUtils';

import 'react-datepicker/dist/react-datepicker.css';

interface ProjectFormProps {
  agents: Agent[];
}

const ProjectForm: React.FC<ProjectFormProps> = ({ agents }) => {
  // const [startDate, setStartDate] = useState<Date | null>(new Date());
  // const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState<ProjectForm>({
    name: '',
    desc: '',
    startDate: null,
    endDate: null,
    status: '',
    team: []
  });
  const handleDateChange = (
    date: Date | null,
    field: 'startDate' | 'endDate'
  ) => {
    setFormData({
      ...formData,
      [field]: date
    });
  };
  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData({
      ...formData,
      team: selectedOptions // Assuming the name of the field is "team"
    });
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create New Project</div>
        <form onSubmit={handleProjectFormSubmit(formData)}>
          <div className="formFieldRow">
            <label htmlFor="name">Project Name</label>
            <div>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter Project Name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange(formData, setFormData)}
                required
              />
            </div>
          </div>

          <div className="formFieldRow">
            <label htmlFor="desc">Project Description</label>
            <div>
              <textarea
                name="desc"
                id="desc"
                placeholder="Enter Project Description"
                className="form-control"
                value={formData.desc}
                onChange={handleInputChange(formData, setFormData)}
                required
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="startDate">Start Date</label>
            <div>
              <DatePicker
                placeholderText={'Select start date'}
                selected={formData.startDate}
                onChange={(date) => handleDateChange(date, 'startDate')}
                startDate={formData.startDate}
                dateFormat="MM/dd/yyyy"
                required
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="endDate">End Date</label>
            <div>
              <DatePicker
                placeholderText={'Select end date'}
                selected={formData.endDate}
                onChange={(date) => handleDateChange(date, 'endDate')}
                dateFormat="MM/dd/yyyy"
                minDate={formData.startDate}
                required
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="status">Status</label>
            <div>
              <select
                name="status"
                id="status"
                className="form-control"
                value={formData.status}
                onChange={handleInputChange(formData, setFormData)}
                required
              >
                <option value="">Select Status</option>
                <option value="Completed">Completed</option>
                <option value="Delay">Delay</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="team">Team Members</label>
            <div>
              <select
                name="team"
                id="team"
                className="form-control"
                multiple
                onChange={handleMultiSelectChange}
                value={formData.team}
              >
                {agents &&
                  agents.map((agent) => (
                    <option value={agent.id} key={agent.id}>
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

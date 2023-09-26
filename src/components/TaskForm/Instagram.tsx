'use client';
import React, { FormEvent, useState } from 'react';

import { Agent } from '@/types/global';
import { InstagramForm, TaskFormProps } from '@/types/taskform';
import { handleTaskFormSubmit, handleTaskInputChange } from '@/utils/formUtils';
interface InstagramFormProps extends TaskFormProps {
  filteredAgents: Agent[];
}
const Instagram: React.FC<InstagramFormProps> = ({
  filteredAgents,
  ...props
}) => {
  const [formData, setFormData] = useState<InstagramForm>({
    assignee: '',
    summary: '',
    tagsCSV: ''
  });

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create Instagram Post</div>
        <form name="instagram" onSubmit={handleTaskFormSubmit(formData, props)}>
          <div className="formFieldRow">
            <label htmlFor="assignee">Assignee</label>
            <div>
              <select
                name="assignee"
                id="assignee"
                className="form-control"
                value={formData.assignee}
                onChange={handleTaskInputChange(formData, setFormData)}
                required
              >
                <option value="">Select an assignee</option>
                {filteredAgents &&
                  filteredAgents?.map((agent) => (
                    <option value={agent.id} key={agent.id}>
                      {agent.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="summary">Summary of the image</label>
            <div>
              <textarea
                name="summary"
                id="summary"
                placeholder="Enter summary of image"
                className="form-control"
                required
                value={formData.summary}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="tagsCSV">List of tags</label>
            <div>
              <input
                name="tagsCSV"
                id="tagsCSV"
                type="text"
                placeholder="Enter Tags"
                className="form-control"
                value={formData.tagsCSV}
                onChange={handleTaskInputChange(formData, setFormData)}
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

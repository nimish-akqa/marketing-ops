'use client';
import React, { useState } from 'react';

import { Agent } from '@/types/global';
import { XForm } from '@/types/taskform';

import { handleTaskFormSubmit, handleTaskInputChange } from '@/utils/formUtils';
interface XFormProps {
  filteredAgents: Agent[];
}
const X: React.FC<XFormProps> = ({ filteredAgents }) => {
  const [formData, setFormData] = useState<XForm>({
    assignee: '',
    topic: ''
  });

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create X Post</div>
        <form onSubmit={handleTaskFormSubmit(formData, 'xContentBrief')}>
          <div className="formFieldRow">
            <label htmlFor="assignee">Assignee</label>
            <div>
              <select
                name="assignee"
                id="assignee"
                className="form-control"
                required
                value={formData.assignee}
                onChange={handleTaskInputChange(formData, setFormData)}
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
            <label htmlFor="topic">Topic</label>
            <div>
              <textarea
                name="topic"
                id="topic"
                placeholder="Enter summary of image"
                className="form-control"
                required
                value={formData.topic}
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

export default X;

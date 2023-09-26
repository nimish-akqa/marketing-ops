'use client';
import React, { useState } from 'react';

import { Agent } from '@/types/global';

import { TwitterForm, TaskFormProps } from '@/types/taskform';

import { handleTaskFormSubmit, handleTaskInputChange } from '@/utils/formUtils';
import { twitterFormSampleData } from './sampleFormData';
interface TwitterFormProps extends TaskFormProps {
  filteredAgents: Agent[];
}
const Twitter: React.FC<TwitterFormProps> = ({ filteredAgents, ...props }) => {
  const [formData, setFormData] = useState<TwitterForm>({
    assignee: '',
    topic: ''
  });

  return (
    <>
      <div className="section formContainerCard">
        <div className="containerBody">
          <div className="cardTitle">Create Twitter Post</div>
          <form onSubmit={handleTaskFormSubmit(formData, props)}>
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
                <input
                  name="topic"
                  id="topic"
                  type="text"
                  placeholder="Enter Topic"
                  className="form-control"
                  required
                  value={formData.topic}
                  onChange={handleTaskInputChange(formData, setFormData)}
                />
              </div>
            </div>
            <div className="formFieldRow buttonContainer">
              <div style={{ display: 'flex', gap: 5 }}>
                <button type="submit" className="submitButton">
                  Create Task
                </button>
                <button
                  type="button"
                  className="submitButton"
                  onClick={() =>
                    setFormData(
                      twitterFormSampleData[Math.floor(Math.random() * 3)]
                    )
                  }
                >
                  Auto Fill
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Twitter;

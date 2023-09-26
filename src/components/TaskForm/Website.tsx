'use client';
import React, { FormEvent, useState } from 'react';

import { Agent, AudiencePersona } from '@/types/global';
import { TaskFormProps, WebsiteForm } from '@/types/taskform';
import { handleTaskFormSubmit, handleTaskInputChange } from '@/utils/formUtils';

import { websiteFormSampleData } from './sampleFormData';

interface WebsiteFormProps extends TaskFormProps {
  audiencePersona: AudiencePersona[];
  filteredAgents: Agent[];
}
const Website: React.FC<WebsiteFormProps> = ({
  audiencePersona,
  filteredAgents,
  ...props
}) => {
  const [formData, setFormData] = useState<WebsiteForm>({
    assignee: '',
    topic: '',
    subTopicsCSV: '',
    wordCount: '',
    audiencePersona: '',
    toneOfVoice: '',
    seoKeywordsCSV: ''
  });

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create Website Article</div>
        <form name="website" onSubmit={handleTaskFormSubmit(formData, props)}>
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

          <div className="formFieldRow">
            <label htmlFor="subTopicsCSV">Sub Topics</label>
            <div>
              <textarea
                name="subTopicsCSV"
                id="subTopicsCSV"
                placeholder="Enter list of subtopics"
                className="form-control"
                required
                value={formData.subTopicsCSV}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="wordCount">No. of words</label>
            <div>
              <input
                name="wordCount"
                id="wordCount"
                type="number"
                placeholder="Enter No. of words"
                className="form-control"
                required
                value={formData.wordCount}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="audiencePersona">Audience Persona</label>
            <div>
              {/* <select
                name="audiencePersona"
                id="audiencePersona"
                className="form-control"
                required
                value={formData.audiencePersona}
                onChange={handleTaskInputChange(formData, setFormData)}
              >
                <option value="">Select audience persona</option>
                {audiencePersona &&
                  audiencePersona.map((persona) => (
                    <option value={persona.id} key={persona.id}>
                      {persona.name}
                    </option>
                  ))}
              </select> */}
              <input
                name="audiencePersona"
                id="audiencePersona"
                className="form-control"
                placeholder="Enter Audience Persona"
                required
                value={formData.audiencePersona}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="toneOfVoice">Tone of voice</label>
            <div>
              <input
                name="toneOfVoice"
                id="toneOfVoice"
                type="text"
                placeholder="Enter tone of voice"
                className="form-control"
                required
                value={formData.toneOfVoice}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="seoKeywordsCSV">SEO keywords / phrases</label>
            <div>
              <input
                name="seoKeywordsCSV"
                id="seoKeywordsCSV"
                type="text"
                placeholder="Enter SEO keywords or phrases"
                className="form-control"
                required
                value={formData.seoKeywordsCSV}
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
                    websiteFormSampleData[Math.floor(Math.random() * 3)]
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
  );
};

export default Website;

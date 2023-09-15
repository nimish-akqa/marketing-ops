'use client';
import React, { FormEvent, useState } from 'react';

import { Agent, AudiencePersona } from '@/types/global';
import { WebsiteForm } from '@/types/taskform';
import { handleTaskFormSubmit, handleTaskInputChange } from '@/utils/formUtils';

interface WebsiteFormProps {
  audiencePersona: AudiencePersona[];
  filteredAgents: Agent[];
}
const Website: React.FC<WebsiteFormProps> = ({
  audiencePersona,
  filteredAgents
}) => {
  const [formData, setFormData] = useState<WebsiteForm>({
    assignee: '',
    topic: '',
    subtopic: '',
    numberOfWords: '',
    audiencePersona: '',
    toneVoice: '',
    seoList: ''
  });

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create Website Article</div>
        <form
          name="website"
          onSubmit={handleTaskFormSubmit(formData, 'websiteContentBrief')}
        >
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
            <label htmlFor="subtopic">List of sub topics</label>
            <div>
              <textarea
                name="subtopic"
                id="subtopic"
                placeholder="Enter list of subtopics"
                className="form-control"
                required
                value={formData.subtopic}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="numberOfWords">No. of words</label>
            <div>
              <input
                name="numberOfWords"
                id="numberOfWords"
                type="number"
                placeholder="Enter No. of words"
                className="form-control"
                required
                value={formData.numberOfWords}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="audiencePersona">Audience Persona</label>
            <div>
              <select
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
              </select>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="toneVoice">Tone of voice</label>
            <div>
              <input
                name="toneVoice"
                id="toneVoice"
                type="text"
                placeholder="Enter tone of voice"
                className="form-control"
                required
                value={formData.toneVoice}
                onChange={handleTaskInputChange(formData, setFormData)}
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="seoList">List of SEO keywords / phrases</label>
            <div>
              <input
                name="seoList"
                id="seoList"
                type="text"
                placeholder="Enter SEO keywords or phrases"
                className="form-control"
                required
                value={formData.seoList}
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

export default Website;

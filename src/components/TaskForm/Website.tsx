'use client';
import React, { FormEvent, useState } from 'react';

import { Agent, AudiencePersona } from '@/types/global';
import { addJob } from '@/app/api/queue';

interface AudiencePersonaList {
  audiencePersona: AudiencePersona[];
  fileredAgents: Agent[];
}
const Website: React.FC<AudiencePersonaList> = ({
  audiencePersona,
  fileredAgents
}) => {
  const [formData, setFormData] = useState({
    assignee: '',
    topic: '',
    subtopic: '',
    numberOfWords: '',
    audiencePersona: '',
    toneVoice: '',
    seoList: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
    try {
      const apiUrl = '/api/tasks';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Job created:', data.job);
      } else {
        console.error('Job creation failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create Website Article</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="assignee">Assignee</label>
            <div>
              <select
                name="assignee"
                id="assignee"
                className="form-control"
                value={formData.assignee}
                onChange={(e) =>
                  setFormData({ ...formData, assignee: e.target.value })
                }
                required
              >
                <option value="">Select an assignee</option>
                {fileredAgents &&
                  fileredAgents?.map((agent) => (
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
                id="topic"
                type="text"
                placeholder="Enter Topic"
                className="form-control"
                required
                value={formData.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
              />
            </div>
          </div>

          <div className="formFieldRow">
            <label htmlFor="subtopic">List of sub topics</label>
            <div>
              <textarea
                id="subtopic"
                placeholder="Enter list of subtopics"
                className="form-control"
                required
                value={formData.subtopic}
                onChange={(e) =>
                  setFormData({ ...formData, subtopic: e.target.value })
                }
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="numberOfWords">No. of words</label>
            <div>
              <input
                id="numberOfWords"
                type="number"
                placeholder="Enter No. of words"
                className="form-control"
                required
                value={formData.numberOfWords}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfWords: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, audiencePersona: e.target.value })
                }
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
                id="toneVoice"
                type="text"
                placeholder="Enter tone of voice"
                className="form-control"
                required
                value={formData.toneVoice}
                onChange={(e) =>
                  setFormData({ ...formData, toneVoice: e.target.value })
                }
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="seoList">List of SEO keywords / phrases</label>
            <div>
              <input
                id="seoList"
                type="text"
                placeholder="Enter SEO keywords or phrases"
                className="form-control"
                required
                value={formData.seoList}
                onChange={(e) =>
                  setFormData({ ...formData, seoList: e.target.value })
                }
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

'use client';
import React, { FormEvent } from 'react';

import { AudiencePersona } from '@/types/global';

interface AudiencePersonaList {
  audiencePersona: AudiencePersona[];
}
const Website: React.FC<AudiencePersonaList> = async ({ audiencePersona }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    // onSubmit();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create Website Article</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="topic">Topic</label>
            <div>
              <input
                id="topic"
                type="text"
                placeholder="Enter Topic"
                className="form-control"
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
              >
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

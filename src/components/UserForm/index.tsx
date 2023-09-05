'use client';
import React, { FormEvent, useRef } from 'react';

import { IoMdCloudUpload } from 'react-icons/io';

const UserForm: React.FC = () => {
  const uploadAvatarButton = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    // onSubmit();
  };

  const handleUploadClick = () => {
    uploadAvatarButton.current?.click();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create New User</div>
        <form onSubmit={handleSubmit}>
          <div className="formFieldRow">
            <label htmlFor="avatar">Avatar</label>
            <div>
              <div className="fileDropzone" onClick={handleUploadClick}>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  ref={uploadAvatarButton}
                  style={{ display: 'none' }}
                />
                <div className="fileUploadText">
                  <IoMdCloudUpload size={50} color="grey" />
                  <h4>Click to upload avatar</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="userName">User Name</label>
            <div>
              <input
                id="userName"
                type="text"
                placeholder="Enter User Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="agentType">Agent Type</label>
            <div>
              <select name="agentType" id="agentType" className="form-control">
                <option value="completed">Human</option>
                <option value="delay">Bot</option>
              </select>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="skill">Skill List</label>
            <div>
              <input
                id="skill"
                type="text"
                placeholder="Enter Skills"
                className="form-control"
              />
            </div>
          </div>

          <div className="formFieldRow buttonContainer">
            <div>
              <button type="submit" className="submitButton">
                Create User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

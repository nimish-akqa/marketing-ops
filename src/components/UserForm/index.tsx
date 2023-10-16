'use client';
import React, { FormEvent, useEffect, useRef, useState } from 'react';

import { UserForm } from '@/types/global';
import { handleInputChange, handleUserFormSubmit } from '@/utils/formUtils';

import { IoMdCloudUpload } from 'react-icons/io';
import { addAgent } from '../../../actions/actions';

const UserForm: React.FC = () => {
  const uploadAvatarButton = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<File>();
  const ref = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<UserForm>({
    name: '',
    email: '',
    type: '',
    skills: ''
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('type', formData.type);
      data.append('skills', formData.skills);
      if (avatar) {
        data.append('image', avatar);
      }
      const res = await fetch('/api/agents', {
        method: 'POST',
        body: data
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      console.error(e);
    }
  };

  const [src, setSrc] = useState('');
  useEffect(() => {
    if (avatar) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imgSrc = event.target?.result as string;
        setSrc(imgSrc);
      };

      reader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const handleUploadClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === uploadAvatarButton.current) {
      return;
    }
    event.stopPropagation();
    uploadAvatarButton.current?.click();
  };

  return (
    <div className="section formContainerCard">
      <div className="containerBody">
        <div className="cardTitle">Create New User</div>
        <form
          ref={ref}
          action={async (formData) => {
            // ref.current?.reset();
            const res = await addAgent(formData);
            console.log(res);
          }}
        >
          {/* <form onSubmit={onSubmit}> */}
          {/* <form onSubmit={handleUserFormSubmit(formData)}> */}
          <div className="formFieldRow">
            <label>Avatar</label>
            <div>
              <div className="fileDropzone" onClick={handleUploadClick}>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  ref={uploadAvatarButton}
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    setAvatar(e.target.files?.[0]);
                  }}
                />
                <div className="fileUploadText">
                  <IoMdCloudUpload size={50} color="grey" />
                  <h4>Click to upload avatar</h4>
                </div>
              </div>
              {src && (
                <div className="blobImg">
                  <img src={src} />
                  <div className="imgDetails">
                    <span>{avatar?.name}</span>
                    {avatar?.size && (
                      <span>{(avatar?.size / 1000).toFixed(2)} KB</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="name">User Name</label>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter User Name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange(formData, setFormData)}
                required
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="type">Agent Type</label>
            <div>
              <select
                name="type"
                id="type"
                className="form-control"
                value={formData?.type}
                onChange={handleInputChange(formData, setFormData)}
                required
              >
                <option value="">Select agent type</option>
                <option value="HUMAN">Human</option>
                <option value="BOT">Bot</option>
              </select>
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange(formData, setFormData)}
                required
              />
            </div>
          </div>
          <div className="formFieldRow">
            <label htmlFor="skill">Skill List CSV</label>
            <div>
              <input
                id="skill"
                name="skills"
                type="text"
                placeholder="Enter Skills"
                className="form-control"
                value={formData.skills}
                onChange={handleInputChange(formData, setFormData)}
                required
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

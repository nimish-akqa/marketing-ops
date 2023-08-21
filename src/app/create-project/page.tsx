"use client";
import React, { FormEvent } from "react";

interface MyFormProps {
  onSubmit: () => void;
}
const ProjectForm: React.FC<MyFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    onSubmit();
  };

  return (
    <div className="mainContent">
      <div className="pageContent">
        <div className="section sectionHeader">
          <div className="pageTitle">
            <h4>Create New</h4>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          {/* Other form fields */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

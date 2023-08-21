import React, { FormEvent } from "react";

// interface MyFormProps {
//   onSubmit: () => void;
// }

// const ProjectForm: React.FC<MyFormProps> = (/*{ onSubmit }*/) => {
const ProjectForm: React.FC = (/*{ onSubmit }*/) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    // onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      {/* Other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;

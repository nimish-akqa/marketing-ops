import React from 'react';
import PersonaForm from '@/components/PersonaForm';

const page = () => {
  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>CREATE NEW </h4>
        </div>
      </div>
      <PersonaForm />
    </>
  );
};

export default page;

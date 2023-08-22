import ProjectForm from '@/components/ProjectForm';
import React from 'react';
const page = () => {
    return (
        <div className="mainContent">
            <div className="pageContent">
                <div className="section sectionHeader">
                    <div className="pageTitle">
                        <h4>CREATE NEW </h4>
                    </div>
                </div>
                <ProjectForm />
            </div>
        </div>
    );
};

export default page;

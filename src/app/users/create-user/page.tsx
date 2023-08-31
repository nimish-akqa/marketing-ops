import React from 'react';
import UserForm from '@/components/UserForm';

const page = () => {
    return (
        <>
            <div className="section sectionHeader">
                <div className="pageTitle">
                    <h4>CREATE NEW</h4>
                </div>
            </div>
            <UserForm />
        </>
    );
};

export default page;

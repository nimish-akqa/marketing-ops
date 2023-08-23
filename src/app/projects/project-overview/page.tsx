import React from 'react';
import './projectoverview.scss';

const page = () => {
    return (
        <div className="mainContent">
            <div className="page-content">
                <div className="page-title">
                    <h4>Project Overview</h4>
                </div>

                <div className="dashboard">
                    <div className="col-lg-8">
                        <div className="card">
                            Project Details : To an English person, it will seem
                            like simplified English, as a skeptical Cambridge
                            friend of mine told me what Occidental is. The
                            European languages are members of the same family.
                            Their separate existence is a myth. For science,
                            music, sport, etc,
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>

                <div className="files dashboard">
                    <div className="col-lg-4">
                        <div className="card-tile">Attached Files</div>
                        <div className="table-responsive"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

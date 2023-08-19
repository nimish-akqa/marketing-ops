import React from "react";
import "./projects.scss";
import Image from "next/image";
import { projects } from "@/tempJson/projects";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";

const convertDate = (date: string) => {
  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const page = () => {
  return (
    <div className="mainContent">
      <div className="pageContent">
        <div className="section sectionHeader">
          <div className="pageTitle">
            <h4>PROJECTS LIST</h4>
          </div>
          <div>
            <button className="createButton">
              <BsPlusLg />
              Create Project
            </button>
          </div>
        </div>
        <div className="section">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Team</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr>
                  <td>
                    <span>{project.name}</span>
                    <p>{project.metadesc}</p>
                  </td>
                  <td>{convertDate(project.startDate)}</td>
                  <td>{convertDate(project.endDate)}</td>
                  <td>
                    {" "}
                    <span
                      className={`projectStatus ${
                        project.status === "Completed"
                          ? `success`
                          : project.status === "Pending"
                          ? `warning`
                          : `danger`
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <div className="userGroup">
                      {project.teamMembers.map((teamMember) => (
                        <div className="userAvatar">
                          <Image
                            src={`https://api.multiavatar.com/${teamMember.userId}.svg`}
                            width={32}
                            height={32}
                            alt="thumb"
                          />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="projectOptions">
                      <i>
                        <BsThreeDots />
                      </i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import "./agents.scss";
import Image from "next/image";
import { agents } from "@/tempJson/agents";
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
            <h4>AGENT LIST</h4>
          </div>
          <div>
            <button className="createButton">
              <BsPlusLg />
              Create New Agent
            </button>
          </div>
        </div>
        <div className="section">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Agent Type</th>
                <th>Email</th>
                <th>Skills</th>
                <th>Projects</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.agentId}>
                  <td>
                    <div className="userGroup">
                      <div className="userAvatar">
                        <Image
                          src={`https://api.multiavatar.com/${agent.agentId}.svg`}
                          width={32}
                          height={32}
                          alt="thumb"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{agent.name}</span>
                  </td>
                  <td>
                    <span>{agent.agentType}</span>
                  </td>
                  <td>
                    <span>{agent.email}</span>
                  </td>
                  <td>
                    <div className="skillGroup">
                      {agent.skills.map((skill) => (
                        <span className={`skills success`}>{skill}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span>{agent.projects}</span>
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

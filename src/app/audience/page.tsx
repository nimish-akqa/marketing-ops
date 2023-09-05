import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsPlusLg } from 'react-icons/bs';
import ActionDropDown from '@/components/ActionDropDown';
import { AudiencePersona } from '@/types/global';

import { getAudiencePersona } from '@/utils/apiUtils';

const page = async () => {
  const audiencePersona: AudiencePersona[] = await getAudiencePersona();

  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>AUDIENCE PERSONA LIST </h4>
        </div>
        <Link className="createButton" href={`audience/create-persona`}>
          <BsPlusLg />
          Create Persona
        </Link>
      </div>
      <div className="section sectionContent">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Problem</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {audiencePersona.map((persona: AudiencePersona) => (
              <tr key={persona.id}>
                <td>
                  <span>
                    <Link href={``}>{persona.name}</Link>
                  </span>
                </td>
                <td>{persona.role}</td>
                <td>{persona.problems}</td>
                <td>
                  <ActionDropDown
                    class="optionsDropdown"
                    optionId={persona.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;

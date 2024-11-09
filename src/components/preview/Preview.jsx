import React from 'react';
import Stanga from './Stanga';
import Dreapta from './Dreapta';

function Preview({ data, workExperiences, educationEntries }) {
  return (
    <div id="preview-bg">
      <div id="foaie">
        <Stanga data={data} />
        <Dreapta workExperiences={workExperiences} educationEntries={educationEntries} />
      </div>
    </div>
  );
}

export default Preview;

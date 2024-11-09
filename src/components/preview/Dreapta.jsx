import React from 'react';
import PreviewEducation from './PreviewEducation';
import PreviewWork from './PreviewWork';

function Dreapta({ workExperiences, educationEntries }) {
  return (
    <div id="restu">
      <div id="preview-work">
        <div id="titlu-preview-work">WORK EXPERIENCE</div>
        {workExperiences.map((work, index) => (
          <PreviewWork key={index} {...work} />
        ))}
      </div>

      <div id="preview-school">
        <div id="titlu-preview-school">EDUCATION</div>
        {educationEntries.map((education, index) => (
          <PreviewEducation key={index} {...education} />
        ))}
      </div>
    </div>
  );
}

export default Dreapta;

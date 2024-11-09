import React from 'react';

function PreviewWork({ title, workplace, dateWorkStart, dateWorkEnd, addWorkInfo }) {
  return (
    <div id="work-sub-titlu">
      <div id="work-sub-sub">
        <div id="informatii-job">
          <div id="pozitie">{title}</div>
        </div>
        <div id="durata">
          {dateWorkStart} - {dateWorkEnd ? dateWorkEnd : "Present"}
        </div>
      </div>
      <div id="companie">{workplace}</div>
      <div id="job-descriere">{addWorkInfo}</div>
    </div>
  );
}

export default PreviewWork;

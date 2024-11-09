import React from 'react';

function PreviewWork({ title, workplace, dateWorkStart, dateWorkEnd, addWorkInfo }) {
  const formatDate = (date) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const dateObject = new Date(year, month - 1);
    return dateObject.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div id="work-sub-titlu">
      <div id="work-sub-sub">
        <div id="informatii-job">
          <div id="pozitie">{title}</div>
        </div>
        <div id="durata">
          {formatDate(dateWorkStart)} - {dateWorkEnd ? formatDate(dateWorkEnd) : "Present"}
        </div>
      </div>
      <div id="companie">{workplace}</div>
      <div id="job-descriere">{addWorkInfo}</div>
    </div>
  );
}

export default PreviewWork;

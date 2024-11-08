import React, { useState } from 'react';
import Editor from './components/editor/Editor';
import Preview from './components/preview/Preview';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { mdiEyeOutline } from '@mdi/js';

import './App.css';

function App() {
  document.title = 'cv generator';
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    professionalTitle: "",
    summary: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    title: "",
    workplace: "",
    dateWorkStart: "",
    dateWorkEnd: "",
    addWorkInfo: "",
    skill: "",
    skills: []
  });
  

  const [educationData, setEducationData] = useState({
    university: "",
    degree: "",
    dateStart: "",
    dateEnd: "",
    addInfo: ""
  });

  const [educationEntries, setEducationEntries] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addEducationEntry = () => {
    setEducationEntries((prevEntries) => [
      ...prevEntries,
      { ...educationData }
    ]);
    setEducationData({
      university: "",
      degree: "",
      dateStart: "",
      dateEnd: "",
      addInfo: ""
    });
  };

  const addSkill = () => {
    setData((prevData) => {
      if (prevData.skill.trim() === "") return prevData; // Avoid adding empty skills
  
      const updatedSkills = [...prevData.skills, prevData.skill];
  
      console.log("Updated skills:", updatedSkills); // Log the updated skills array
  
      return {
        ...prevData,
        skills: updatedSkills,
        skill: "", // Clear the input after adding the skill
      };
    });
  };
  const removeSkill = (index) => {
    setData((prevData) => {
      const updatedSkills = prevData.skills.filter((_, i) => i !== index);
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };
  

  const handleCheckboxChange = (e) => {
    const fieldsets = document.querySelectorAll('fieldset');
    const forms = document.querySelectorAll('form');
    setIsChecked(e.target.checked);

    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      forms.forEach(form => form.classList.add('dkm'));
      fieldsets.forEach(fieldset => fieldset.classList.add('dkm'));
    } else {
      document.body.classList.remove('dark-mode');
      forms.forEach(form => form.classList.remove('dkm'));
      fieldsets.forEach(fieldset => fieldset.classList.remove('dkm'));
    }
  };

  const downloadResume = () => {
    const input = document.getElementById('foaie');
    html2canvas(input, { scale: 3, backgroundColor: null }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const widthInMm = 210; // A4 width in mm
      const heightInMm = (canvas.height * widthInMm) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, widthInMm, heightInMm);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div id="tot">
      <div id='stanga'>
        <h2 id='cv-header'>cv generator</h2>
        <div id='descriere'>Create your CV by filling out the forms below! Your CV will be dynamically updated in the preview.</div>
        <div id='link'><a href="https://github.com/topciovrafael/cv-generator">Check out the GitHub repo for this project here!</a></div>
        <label className="switch" id='change-label'>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className="slider"></span>
        </label>
        <Editor
          data={data}
          handleChange={handleChange}
          educationData={educationData}
          handleEducationChange={handleEducationChange}
          addEducationEntry={addEducationEntry}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />
      </div>
      <Preview data={data} educationEntries={educationEntries} />

      <button id="download" onClick={downloadResume}>
        <Icon path={mdiDownload} size={2} />
      </button>
      <button id="see" onClick={downloadResume}>
      <Icon path={mdiEyeOutline} size={2} />
      </button>
    </div>
  );
}

export default App;

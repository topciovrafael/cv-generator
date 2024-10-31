import React, { useState } from 'react';
import Editor from './components/editor/Editor';
import Preview from './components/preview/Preview';
import './App.css';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    professionalTitle: "",
    summary: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    university: "",
    degree: "",
    dateStart: "",
    dateEnd: "",
    addInfo: "",
    title: "",
    workplace: "",
    dateWorkStart: "",
    dateWorkEnd: "",
    addWorkInfo: "",
    skills: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const fieldsets = document.querySelectorAll('fieldset');
    const forms = document.querySelectorAll('form');

    setIsChecked(e.target.checked);
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      forms.forEach(form => {
        form.classList.add('dkm');
      });
      fieldsets.forEach(fieldset => {
        fieldset.classList.add('dkm');
      });
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      forms.forEach(form => {
        form.classList.remove('dkm');
      });
      fieldsets.forEach(fieldset => {
        fieldset.classList.remove('dkm');
      });
    }
  };

  // Function to download PDF
  const downloadResume = () => {
    
    const input = document.getElementById('foaie'); // Get the element to be downloaded
    html2canvas(input, {
      scale: 10, // Use a higher scale for better quality
      backgroundColor: null // Retain the original background color
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
  
      // A4 size in mm at 72 DPI is approximately 210 x 297 mm
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = 297; // A4 height in mm
  
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16
      });
      
      // Get the actual dimensions of the canvas
      const imgWidth = canvas.width * 210 / (canvas.width * 2); // Width based on canvas scale
      const imgHeight = canvas.height * 210 / (canvas.width * 2); // Height based on canvas scale
  
      // Calculate dimensions in mm
      const widthInMm = pdfWidth; // Width of A4
      const heightInMm = (imgHeight * pdfWidth) / imgWidth; // Scale height based on width
  
      // Center the image
      const xOffset = (pdfWidth - widthInMm) / 2; // Centering on the x-axis
      const yOffset = (pdfHeight - heightInMm) / 2; // Centering on the y-axis
  
      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', xOffset, yOffset, widthInMm+1, heightInMm+1);
  
      // Check if the image height exceeds PDF height and create new pages if needed
      let heightLeft = heightInMm - pdfHeight;
      let position = 0;
  
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', xOffset, position + yOffset, widthInMm, heightInMm);
        heightLeft -= pdfHeight;
      }
  
      // Save the PDF
      pdf.save('resume.pdf');
    });
  };
  
  
  
  
  
  

  return (
    <div id="tot">
      <div id='stanga'>
        <h2 id='cv-header'>cv generator</h2>
        <div id='descriere'>Create your CV by filling out the forms below! Your CV will be dynamically updated in the preview.</div>
        <div id='link'><a href="https://github.com/topciovrafael" >Check out the GitHub repo for this project here!</a></div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="slider"></span>
        </label>
        <Editor data={data} handleChange={handleChange} />
      </div>
      <Preview data={data} /> {/* Pass the data to Preview */}
      
      <button id="download" onClick={downloadResume}>
        <Icon path={mdiDownload} size={2} />
      </button>
      
      {/* The element you want to capture as PDF */}
      <div id="foaie" style={{ display: 'none' }}>
      </div>
    </div>
  );

}

export default App;

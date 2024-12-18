import React from 'react';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import WorkInfo from './WorkInfo';
import Skills from './Skills';

function Editor(props) {
  return (
    <div id="clseditor">
      <BasicInfo data={props.data} handleChange={props.handleChange} />
      <ContactInfo data={props.data} handleChange={props.handleChange} />
      <Skills data={props.data} handleChange={props.handleChange} addSkill={props.addSkill} removeSkill={props.removeSkill}
 />
      <EducationInfo
        data={props.educationData}
        handleChange={props.handleEducationChange}
        addEducationEntry={props.addEducationEntry}
        educationEntries={props.educationEntries}
        removeEd={props.removeEd}
      />
      <WorkInfo data={props.data} handleChange={props.handleChange} addWorkExperience={props.addWorkExperience}  workExperiences={props.workExperiences} removeWork={props.removeWork}/>
    </div>
  );
}

export default Editor;

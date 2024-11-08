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
        addEntry={props.addEducationEntry}
      />
      <WorkInfo data={props.data} handleChange={props.handleChange} />
    </div>
  );
}

export default Editor;

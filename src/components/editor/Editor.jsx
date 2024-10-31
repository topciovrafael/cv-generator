import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'
import Skills from './Skills'
import React, { useState } from 'react'

function Editor(props){
    return (
        <div id="clseditor">
          <BasicInfo data={props.data} handleChange={props.handleChange}></BasicInfo>
          <ContactInfo data={props.data} handleChange={props.handleChange}></ContactInfo>
          <Skills data={props.data} handleChange={props.handleChange}></Skills>
          <EducationInfo data={props.data} handleChange={props.handleChange}></EducationInfo>
          <WorkInfo data={props.data} handleChange={props.handleChange}></WorkInfo>
        </div>
      )
}

export default Editor;
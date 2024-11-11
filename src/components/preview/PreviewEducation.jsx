import React from 'react';


function PreviewEducation({ university, degree, dateStart, dateEnd, addInfo }){
const formatDate = (date) => {
        if (!date) return '';
        const [year, month] = date.split('-');
        const dateObject = new Date(year, month - 1);
        return dateObject.toLocaleString('default', { month: 'long', year: 'numeric' });
      };
    return(
                        <div id="school-sub-titlu">
                            <div id="school-sub-sub">
                                <div id="informatii-school">
                                <div id="university">{university}</div>
                                </div>
                                
                                <div id="durata-school">{formatDate(dateStart)} - {dateEnd ? formatDate(dateEnd) : "Present"}</div>
                            </div>
                            <div id="sectie">{degree}</div>
                            <div id="school-descriere">{addInfo}</div>
                        </div>
    );
}

export default PreviewEducation;
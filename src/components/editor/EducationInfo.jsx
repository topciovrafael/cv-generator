import React, { useState } from 'react';

function EducationInfo(props){
    const {data,handleChange}=props;

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };

    return(
        <form className="education-info">
            <h2 className="header-education-info">Education Background</h2>
            <fieldset className="fieldset-education-info">
                <div><label htmlFor="university">
                Institution:
                </label>
                <input
                type="text"
                name="university"
                id="input-university"
                onChange={handleChange}
                value={data.university}
                placeholder="UPT"
                /></div>
                <div><label htmlFor="degree">
                Degree:
                </label>
                <input
                type="text"
                name="degree"
                id="input-degree"
                value={data.degree}
                onChange={handleChange}
                placeholder="" 
                required
                />
                </div>
                <div>
                <label htmlFor="dateStart">
                Starting Year:
                </label>
                <input
                type="month"
                name="dateStart"
                id="input-university"
                onChange={handleChange}
                value={data.dateStart}
                placeholder=""
                />
                </div>

                <div><label htmlFor="university">
                On-going:
                </label>
                <label className="switch laform">
              <input
              type="checkbox"
              checked={isChecked} 
              onChange={handleCheckboxChange}
              />
          <span className="slider"></span>
          </label></div>
                
          {!isChecked && (
                    <div id="daidisable">
                        <label htmlFor="dateEnd">Ending Year:</label>
                        <input
                            type="month"
                            disabled={isChecked}
                            name="dateEnd"
                            id="input-dateEnd"
                            onChange={handleChange}
                            value={data.dateEnd}
                            placeholder=""
                        />
                    </div>
                )}
                <div>
                <label htmlFor="addInfo">
                Additional info:
                </label>
                <input
                type="text"
                name="addInfo"
                id="input-addInfo"
                value={data.addInfo}
                onChange={handleChange}
                placeholder="" 
                />
                </div>
                <button id="adaugare-experienta" type="button" onClick={()=>console.log(props)}>Add</button> 
            </fieldset>
        </form>
    );
}

export default EducationInfo;
import React, { useState,useEffect } from 'react';


function WorkInfo(props){
    const {data,handleChange,addWorkExperience}=props;
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const checkIfFieldsAreValid = () => {
    const { title, workplace, dateWorkStart, dateWorkEnd } = data;
    if (!title || !workplace || !dateWorkStart) return false;
    if (!isChecked && !dateWorkEnd) return false;
    return true;
  };


  useEffect(() => {
    setIsButtonDisabled(!checkIfFieldsAreValid());
  }, [data, isChecked]);

  
    return(
        <form className="work-info">
            <h2 className="header-work-info">Work Experience</h2>
            <fieldset className="fieldset-work-info">
                <div><label htmlFor="title">
                Title/Position:
                </label>
                <input
                type="text"
                name="title"
                id="input-title"
                onChange={handleChange}
                value={data.title}
                placeholder="Web Developer"
                required
                /></div>
                <div><label htmlFor="workplace">
                Workplace:
                </label>
                <input
                type="text"
                name="workplace"
                id="input-workplace"
                value={data.workplace}
                onChange={handleChange}
                placeholder="" 
                required
                />
                </div>
                <div>
                <label htmlFor="dateWorkStart">
                Starting Year:
                </label>
                <input
                type="month"
                name="dateWorkStart"
                id="input-dateWorkStart"
                onChange={handleChange}
                value={data.dateWorkStart}
                placeholder=""
                required
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
                        <label htmlFor="dateWorkEnd">Ending Year:</label>
                        <input
                            type="month"
                            disabled={isChecked}
                            name="dateWorkEnd"
                            id="input-dateWorkEnd"
                            onChange={handleChange}
                            value={data.dateWorkEnd}
                            placeholder=""
                            required
                        />
                    </div>
                )}

                <div>
                <label htmlFor="addWorkInfo">
                Job Duties:
                </label>
                <textarea name="addWorkInfo" id="input-addWorkInfo" cols="30" rows="10" onChange={handleChange}
                value={data.addWorkInfo}></textarea>
                </div>
                <button
                id="adaugare-experienta"
                type="button"
                onClick={addWorkExperience}
                disabled={isButtonDisabled}
                >
                Add
                </button>
            </fieldset>
        </form>
        
    );
}

export default WorkInfo;
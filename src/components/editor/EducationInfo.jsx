import React, { useState,useEffect } from 'react';

function EducationInfo({ data, handleChange, addEducationEntry,educationEntries, removeEd }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const checkIfFieldsAreValid = () => {
    const { university, degree, dateStart, dateEnd } = data;
    if (!university || !degree || !dateStart) return false;
    if (!isChecked && !dateEnd) return false;
    return true;
  };

  useEffect(() => {
    setIsButtonDisabled(!checkIfFieldsAreValid());
  }, [data, isChecked]);

  return (
    <form className="education-info">
      <h2 className="header-education-info">Education Background</h2>
      <fieldset className="fieldset-education-info">
        <div>
          <label htmlFor="university">Institution:</label>
          <input
            type="text"
            name="university"
            onChange={handleChange}
            value={data.university}
            placeholder="UPT"
          />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            name="degree"
            onChange={handleChange}
            value={data.degree}
            placeholder="B.Sc."
          />
        </div>
        <div>
          <label htmlFor="dateStart">Starting Year:</label>
          <input
            type="month"
            name="dateStart"
            onChange={handleChange}
            value={data.dateStart}
          />
        </div>

        <div>
          <label htmlFor="onGoing">On-going:</label>
          <label className="switch laform">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="slider"></span>
          </label>
        </div>

        {!isChecked && (
          <div id="daidisable">
            <label htmlFor="dateEnd">Ending Year:</label>
            <input
              type="month"
              name="dateEnd"
              id="input-dateEnd"
              onChange={handleChange}
              value={data.dateEnd}
              placeholder=""
            />
          </div>
        )}

        <div>
          <label htmlFor="addInfo">Additional Info:</label>
          <input
            type="text"
            name="addInfo"
            onChange={handleChange}
            value={data.addInfo}
          />
        </div>

        <button
          id="adaugare-educatie"
          type="button"
          onClick={addEducationEntry}
          disabled={isButtonDisabled}
        >
          Add
        </button>
        
        
        
        <div id="universities-list">
                {educationEntries?.map((educationEntry, index) => (
                <div key={index} className="universities-tab">
                <div>{educationEntry.university}</div>
                <button
                type="button"
                id="remove-uni"
                className="remove-uni-btn"
                onClick={() => removeEd(index)}
                >
                &#x2715;
              </button>
            </div>
          ))}
          
        </div>
      </fieldset>
    </form>
  );
}

export default EducationInfo;

function Skills(props){
    const {data,handleChange, addSkill, removeSkill}=props;
    const { skills } = data;

    return(
        <form className="skills">
            <h2 className="header-skills">Skills</h2>
            <fieldset className="fieldset-skills">
                <div id="skills-loc">
                    <div><label htmlFor="skill">
                    Add a skill:
                </label>
                <input
                type="text"
                name="skill"
                id="input-skill"
                onChange={handleChange}
                value={data.skill}
                placeholder=""
                /></div>
            
                <button type="button"  id="adaugare-skill" onClick={addSkill}>+</button>
                </div>
                <div id="skills-list">
                {skills.map((skill, index) => (
                <div key={index} className="skill-tab">
                <span>{skill}</span>
                <button
                type="button"
                id="remove-skill"
                className="remove-skill-btn"
                onClick={() => removeSkill(index)}
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

export default Skills;
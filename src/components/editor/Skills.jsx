function Skills(props){
    const {data,handleChange, addSkill}=props;

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
            </fieldset>
        </form>
    );
}

export default Skills;
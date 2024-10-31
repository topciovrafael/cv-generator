function Skills(props){
    const {data,handleChange}=props;

    return(
        <form className="skills">
            <h2 className="header-skills">Skills</h2>
            <fieldset className="fieldset-skills">
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
                />
                <button type="button" id="adaugare-experienta">+</button>
                </div>
            </fieldset>
        </form>
    );
}

export default Skills;
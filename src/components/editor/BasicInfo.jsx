function BasicInfo(props){
    const {data,handleChange}=props;

    return(
        <form className="basic-info">
            <h2 className="header-basic-info">Basic Information</h2>
            <fieldset className="fieldset-basic-info">
                <div><label htmlFor="firstName">
                    First Name:
                </label>
                <input
                type="text"
                name="firstName"
                id="input-first-name"
                onChange={handleChange}
                value={data.firstName}
                placeholder="John"
                /></div>
                <div><label htmlFor="lastName">
                    Last Name:
                </label>
                <input
                type="text"
                name="lastName"
                id="input-last-name"
                onChange={handleChange}
                value={data.lastName}
                placeholder="Myers"
                /></div>
                <div><label htmlFor="professionalTitle">
                Professional title:
                </label>
                <input
                type="text"
                name="professionalTitle"
                id="input-professional-title"
                onChange={handleChange}
                value={data.professionalTitle}
                placeholder="Web Developer"
                /></div>
                <div><label htmlFor="firstName">
                    Summary:
                </label>
                <textarea name="summary" id="input-summary" cols="30" rows="5" onChange={handleChange}
                value={data.summary}></textarea>
                </div>
            </fieldset>
        </form>
    );
}

export default BasicInfo;
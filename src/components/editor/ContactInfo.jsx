function ContactInfo(props){
    const {data,handleChange}=props;

    return(
        <form className="contact-info">
            <h2 className="header-contact-info">Contact Information</h2>
            <fieldset className="fieldset-contact-info">
                <div><label htmlFor="email">
                    E-mail:
                </label>
                <input
                type="email"
                name="email"
                id="input-email"
                onChange={handleChange}
                value={data.email}
                placeholder="john@example.com"
                /></div>
                <div><label htmlFor="lastName">
                    Phone number:
                </label>
                <input
                type="text"
                name="phone"
                id="input-phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Phone number"
                pattern="[+40][0-9]{11}" 
                required
                />
                </div>
                <div>
                <label htmlFor="location">
                    Location:
                </label>
                <input
                type="text"
                name="location"
                id="input-location"
                onChange={handleChange}
                value={data.location}
                placeholder="NY"
                />
                </div>
                <div>
                <label htmlFor="website">
                    Website:
                </label>
                <input
                type="url"
                name="website"
                id="input-website"
                onChange={handleChange}
                value={data.website}
                placeholder="www.example.com"
                />
                </div>
            </fieldset>
        </form>
    );
}

export default ContactInfo;
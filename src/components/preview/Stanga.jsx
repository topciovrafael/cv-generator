import React from 'react';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiWeb } from '@mdi/js';

function Stanga(props) {
    const { firstName, lastName, professionalTitle, summary, email, phone, location, website, skills } = props.data;

    return (
        <div id="banda">
            <div id="preview-nume">{`${firstName} ${lastName}`}</div>
            <div id="preview-title">{professionalTitle}</div>
            <div id="preview-summary">{summary}</div>

            <div id='ptmail'>
                <Icon path={mdiEmail} size={.9} />
                <div id="afisare-email">{email}</div>
            </div>

            <div id='ptphone'>
                <Icon path={mdiPhone} size={.9} />
                <div id="afisare-phone">{phone}</div>
            </div>

            <div id='ptlocation'>
                <Icon path={mdiMapMarker} size={.9} />
                <div id="afisare-location">{location}</div>
            </div>

            <div id='ptweb'>
                <Icon path={mdiWeb} size={.9} />
                <div id="afisare-web">{website}</div>
            </div>

            <div id="header-skilluri">Skills</div>
            {skills.length > 0 ? (
                skills.map((skill, index) => (
                    <div className="skilluri" key={index}>• {skill}</div>
                ))
            ) : (
                <div className="skilluri">No skills added</div>
            )}
        </div>
    );
}

export default Stanga;

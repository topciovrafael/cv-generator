import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiWeb } from '@mdi/js';

function Dreapta(props){
    return(
        <div id="restu">
                    <div id='preview-work'>
                        <div id="titlu-preview-work">WORK EXPERIENCE</div>
                        <div id="work-sub-titlu">
                            <div id="work-sub-sub">
                                <div id="informatii-job">
                                <div id="pozitie">Recruiting Intern</div>
                                </div>
                                
                                <div id="durata">Oct. 2018 - Present</div>
                            </div>
                            <div id="companie">Continental</div>
                            <div id="job-descriere">Proactively sourced candidates using LinkedIn Recruiter for technical roles, including back-end software engineering and data engineering roles, leading to 4 full-time hires Iterated on messaging to qualified candidates for given roles to improve the response rate from 8% to 17%</div>
                        </div>
                    </div>


                    <div id='preview-school'>
                        <div id="titlu-preview-school">EDUCATION</div>
                        <div id="school-sub-titlu">
                            <div id="school-sub-sub">
                                <div id="informatii-school">
                                <div id="university">UPT</div>
                                </div>
                                
                                <div id="durata-school">Oct. 2018 - Present</div>
                            </div>
                            <div id="sectie">AC</div>
                            <div id="school-descriere">Proactively sourced candidates using LinkedIn Recruiter for technical roles, including back-end software engineering and data engineering roles, leading to 4 full-time hires Iterated on messaging to qualified candidates for given roles to improve the response rate from 8% to 17%</div>
                        </div>
                    </div>
                </div>
    );
}

export default Dreapta;
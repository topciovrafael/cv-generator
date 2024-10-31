import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiWeb } from '@mdi/js';



function Preview(props){


    return(
        <div id='preview-bg'>
            <div id='foaie'>
                <div id="banda">
                <div id="preview-nume">Topciov Rafael</div>

                <div id="preview-title">Front End Developer</div>

                <div id="preview-summary">Computer science enthusiast focused on creating seamless and engaging user experiences.</div>

                <div id='ptmail'>
                <Icon path={mdiEmail} size={1}/>
                <div id="afisare-email">rafitare52@gmail.com</div>
                </div>
                
                <div id='ptphone'>
                <Icon path={mdiPhone} size={1} />
                <div id="afisare-phone">+40728440737</div>
                </div>

                <div id='ptlocation'>
                <Icon path={mdiMapMarker} size={1} />
                <div id="afisare-location">Timisoara, Romania</div>
                </div>

                <div id='ptweb'>
                <Icon path={mdiWeb} size={1} />
                <div id="afisare-web">topciovrafael.github.io</div>
                </div>

                <div id="header-skilluri">Skills</div>
                <div className="skilluri">• Skill 1</div>
                <div className="skilluri">• Skill 2</div>
                <div className="skilluri">• Skill 3</div>
                <div className="skilluri">• Skill 4</div>

                </div>
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
            </div>
        </div>
    );
}

export default Preview;
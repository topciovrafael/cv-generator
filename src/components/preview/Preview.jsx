import React from 'react';
import Stanga from './Stanga';
import Dreapta from './Dreapta';

function Preview(props) {
    return (
        <div id='preview-bg'>
            <div id='foaie'>
                <Stanga data={props.data} /> {/* Pass data prop to Stanga */}
                <Dreapta />
            </div>
        </div>
    );
}

export default Preview;

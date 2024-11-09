import React from 'react';
import Stanga from './Stanga';
import Dreapta from './Dreapta';

function Preview({ data, isOverlayVisible }) {
  return (
    <div id="preview-bg" style={{}}>
      <div id="foaie">
        <Stanga data={data} />
        <Dreapta />
      </div>
    </div>
  );
}

export default Preview;

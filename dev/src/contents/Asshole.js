import React from 'react';

import D3Ter from './asshole/D3Ter.js';

import * as data from '../data/Classes.js';

export default function Asshole () {
    return (
        <div style={{width:'100%', height: '100%', overflow:'auto'}}>

          <D3Ter data={data.d3ter} />

        </div>
    );
}

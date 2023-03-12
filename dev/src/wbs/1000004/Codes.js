import React from 'react';

import Box from '@mui/material/Box';

import Code from './Code.js';

import DATA from './DATA.js';

export default function Codes (props) {
    const unit = 444 + 22 * 2;

    const sx = {
        display: 'flex',
        flexWrap: 'wrap',
        width: Math.floor(window.innerWidth / unit) * unit,
    };

    return (
        <div style={{paddingBottom: 222}}>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <p>The MERGE clause ensures that a pattern exists in the graph. Either the pattern already exists, or it needs to be created.</p>
          </div>

          <div style={{display:'flex', justifyContent: 'center'}}>

            <Box sx={sx}>
              {DATA.map(d=> {
                  return <Code data={d}/>;
              })}
            </Box>
          </div>
        </div>
    );
}

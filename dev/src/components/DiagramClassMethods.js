import React from 'react';

import Box from '@mui/material/Box';

import DiagramClassMethod from './DiagramClassMethod.js';
import DiagramClassMethodsGroup from './DiagramClassMethodsGroup.js';

export default function DiagramClassMethods (props) {
    const methods = props.methods;

    return (
        <Box sx={{display:'flex', flexDirection: 'column'}}>
          {methods.map((d,i)=> {
              if ('string'===(typeof d.type) && 'group'===d.type)
                  return <DiagramClassMethodsGroup key={i} data={d} number={i} />;

              return <DiagramClassMethod key={i} data={d} />;
          })}
        </Box>
    );
}

import React from 'react';

import Box from '@mui/material/Box';

import DiagramClassAttribute from './DiagramClassAttribute.js';

export default function DiagramClassAttributes (props) {
    const attributes = props.attributes;

    return (
        <Box sx={{width:'100%'}}>
          {attributes.map(d => {
              return <DiagramClassAttribute key={d.name} data={d}/>;
          })}
        </Box>
    );
}

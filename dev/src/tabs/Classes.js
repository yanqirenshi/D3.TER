import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {H} from 'tion';

import RECTUM from './Classes/RECTUM.js';
import PAINTER from './Classes/PAINTER.js';
import BUILDER from './Classes/BUILDER.js';
import MATERIAL from './Classes/MATERIAL.js';

export default function Classes () {
    return (
        <Box sx={{display:'flex', justifyContent: 'center', pt: 5}}>
          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Rectum</H>
            <pre style={{lineHeight: '13px'}}>
              {RECTUM.join('\n')}
            </pre>
          </Box>

          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Painter</H>
            <pre style={{lineHeight: '13px'}}>
              {PAINTER.join('\n')}
            </pre>
          </Box>

          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Builder</H>
            <pre style={{lineHeight: '13px'}}>
              {BUILDER.join('\n')}
            </pre>
          </Box>

          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Material</H>
            <pre style={{lineHeight: '13px'}}>
              {MATERIAL.join('\n')}
            </pre>
          </Box>
        </Box>
    );
}

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Overview () {
    return (
        <Box>
          <Container>
            <Typography sx={{fontSize:16, lineHeight:'16px'}}>
              <pre>{x.join('\n')}</pre>
            </Typography>
          </Container>
        </Box>
    );
}

const x = [
    '       +-------+',
    '       | Colon |',
    '       |=======|',
    '       |-------|',
    '       +-------+',
    '           ^',
    '           |',
    '  +-----------------------------+',
    '  | Rectum                      |',
    '  |=============================|',
    '  |+ callbacks                  |',
    '  |- _entities                  |',
    '  |- _relationships             |',
    '  |- _default                   |',
    '  |-----------------------------|',
    '  |- ensureCallbacks            |',
    '  |+ entities                   |',
    '  |+ bounds                     |',
    '  |+ getIdentifier              |',
    '  |- buildRelationshipsWithPort |',
    '  |+ data                       |',
    '  +-----------------------------+',
];

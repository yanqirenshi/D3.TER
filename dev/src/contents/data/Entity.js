import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Base from './Base.js';

import {entity} from '../../data/TEMPLATES.js';

export default function Entity (props) {
    return (
        <Base json={entity}>

          <Box>
            <Typography variant="h4">_id</Typography>
          </Box>

          <Box>
            <Typography variant="h4">_class</Typography>
          </Box>

          <Box>
            <Typography variant="h4">padding</Typography>
          </Box>

          <Box>
            <Typography variant="h4">margin</Typography>
          </Box>

          <Box>
            <Typography variant="h4">description</Typography>
          </Box>

          <Box>
            <Typography variant="h4">position</Typography>
          </Box>

          <Box>
            <Typography variant="h4">size</Typography>
          </Box>

          <Box>
            <Typography variant="h4">bar</Typography>
          </Box>

          <Box>
            <Typography variant="h4">background</Typography>
          </Box>

          <Box>
            <Typography variant="h4">name</Typography>
          </Box>

          <Box>
            <Typography variant="h4">type</Typography>
          </Box>

          <Box>
            <Typography variant="h4">identifiers</Typography>
          </Box>

          <Box>
            <Typography variant="h4">attributes</Typography>
          </Box>

          <Box>
            <Typography variant="h4">ports</Typography>
          </Box>

        </Base>
    );
}

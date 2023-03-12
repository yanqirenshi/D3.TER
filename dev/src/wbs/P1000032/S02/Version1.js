import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';

import TablePackStreamCoreDataType from '../common/TablePackStreamCoreDataType.js';
import TablePackStreamSpecifiedStructure from '../common/TablePackStreamSpecifiedStructure.js';


export default function Version1 () {
    return (
        <Box sx={{pb:'222px'}}>
          <Paper elevation={0}>
            <Typography>
              <span>
                PackStream is a general purpose data serialisation format,
              </span>

              <span sx={{ml:'2px'}}>
                originally inspired by (but incompatible with) MessagePack.
              </span>
            </Typography>

            <Typography>
              The format provides a type system fully compatible with the types supported by Cypher, see the Cypher Manual → Values and types for more information.
            </Typography>

            <Typography>
              PackStream offers a number of core data types, many supported by multiple binary representations, as well as a flexible extension mechanism.
            </Typography>

            <Typography>
              The core data types are described in the table below.
            </Typography>

            <TablePackStreamCoreDataType />
          </Paper>

          <Typography>
            The PackStream specified structures are listed in the table below.
          </Typography>

          <Paper elevation={0}>
            <TablePackStreamSpecifiedStructure />
          </Paper>
        </Box>
    );
}

import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// import Text from '../common/Text.js';

export default function DataTypes () {
    return (
        <Box>
          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Null</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Boolean</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Integer</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Float</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Bytes</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">String</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">List</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Dictionary</Typography>

            {/* <Text en=""></Text> */}
          </Paper>

          <Paper elevation={0} sx={{m:'22px'}}>
            <Typography variant="h4">Structure</Typography>

            {/* <Text en=""></Text> */}
          </Paper>
        </Box>
    );
}

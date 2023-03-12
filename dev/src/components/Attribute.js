import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Attribute (props) {
    const data = props.data;

    return (
        <Box sx={{p:'22px', mt: '22px'}}>

          <Typography variant="h4">
            {data.name}
          </Typography>

          <Box sx={{pl:'22px', mt: '11px'}}>
            {table(data)}
          </Box>

          <Box sx={{pl:'22px', mt: '22px'}}>
            <Typography variant="h5">Description</Typography>

            <Box>
              {description(data)}
            </Box>
          </Box>
        </Box>
    );
}

function description (data) {
    const val = data.description;

    if ('string'===typeof val)
        return val;


    return data.description.map((l,i)=> {
        return (
            <Typography key={i}>
              {l}
            </Typography>
        );
    });
}

function table (data) {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Default Value</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">
                  <Typography>
                    {data.type.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>
                    {data.default}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    );
}

import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Attributes (props) {
    const data = props.data;

    return (
        <Box sx={{height: '100%',width: '100%'}}>
          <Container maxWidth="lg">
            <Paper elevation={0} sx={{p:2}}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowSpan="2" align="center">ID</TableCell>
                      <TableCell colSpan="2" align="center">Name</TableCell>
                      <TableCell colSpan="2" align="center">Contents</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">logical</TableCell>
                      <TableCell align="center">physical</TableCell>
                      <TableCell align="center">Type</TableCell>
                      <TableCell align="center">Length</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.attributes.map((row) => (
                        <TableRow key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>

                          <TableCell>
                            {row.name}
                          </TableCell>

                          <TableCell></TableCell>

                          <TableCell></TableCell>

                          <TableCell></TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Container>
        </Box>
    );
}

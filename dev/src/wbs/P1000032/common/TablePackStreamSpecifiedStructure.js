import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function TablePackStreamSpecifiedStructure () {
    return (
        <TableContainer component={Paper}>
          <Typography variant="caption">Table 1. Core data types</Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Data type</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data_types.map((data_type) => (
                  <TableRow key={data_type.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        {data_type.name}
                    </TableCell>
                    <TableCell>
                      {data_type.description}
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

const data_types = [
    { name: 'Node',                description: 'snapshot of a node within a graph database' },
    { name: 'Relationship',        description: 'snapshot of a relationship within a graph database' },
    { name: 'UnboundRelationship', description: 'relationship detail without start or end node information' },
    { name: 'Path',                description: 'alternating sequence of nodes and relationships' },
    { name: 'Date',                description: 'a date without a time-zone in the ISO-8601 calendar system, e.g. “2007-12-03”' },
    { name: 'Time',                description: 'a time with an offset from UTC/Greenwich in the ISO-8601 calendar system, e.g. “10:15:30+01:00”' },
    { name: 'LocalTime',           description: 'a time without a time-zone in the ISO-8601 calendar system, e.g. “10:15:30”' },
    { name: 'DateTime',            description: 'a date-time with a time-zone in the ISO-8601 calendar system, e.g. “2007-12-03T10:15:30+01:00 Europe/Paris”, the time-zone is specified in minutes offset from UTC' },
    { name: 'DateTimeZoneId',      description: 'a date-time with a time-zone in the ISO-8601 calendar system, e.g. “2007-12-03T10:15:30+01:00 Europe/Paris”, the time-zone is specified with a zone ID' },
    { name: 'LocalDateTime',       description: 'a date-time without a time-zone in the ISO-8601 calendar system, e.g. “2007-12-03T10:15:30”' },
    { name: 'Duration',            description: 'a temporal amount' },
    { name: 'Point2D',             description: 'represents a single location in two-dimensional space' },
    { name: 'Point3D',             description: 'represents a single location in three-dimensional space' },
];

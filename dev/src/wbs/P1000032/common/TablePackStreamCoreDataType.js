import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function TablePackStreamCoreDataType () {
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
                      <Link href={data_type.url}>
                        {data_type.name}
                      </Link>
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
    { name: 'Null',       description: 'missing or empty value',                                url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-null' },
    { name: 'Boolean',    description: 'true or false',                                         url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-boolean' },
    { name: 'Integer',    description: 'signed 64-bit integer',                                 url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-integer' },
    { name: 'Float',      description: '64-bit floating point number',                          url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-float' },
    { name: 'Bytes',      description: 'byte array',                                            url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-bytes' },
    { name: 'String',     description: 'unicode text, UTF-8',                                   url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-string' },
    { name: 'List',       description: 'ordered collection of values',                          url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-list' },
    { name: 'Dictionary', description: 'collection of key-value entries (no order guaranteed)', url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-dictionary' },
    { name: 'Structure',  description: 'composite value with a type signature',                 url: 'https://neo4j.com/docs/bolt/current/packstream/#data-type-structure' },
];

import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import S from '@mui/material/Typography';

import Graph from './Graph.js';

export default function App() {
  return (
      <Container maxWidth="md"
                 sx={{pt: 3, pb: 22}}>
        <Box sx={{height:333, p: 2, background: '#f8f8f8'}}>
          <Graph/>
        </Box>

        <Box sx={{mt:6}}>
          <S variant="h5">Data Model</S>
        </Box>

        <Box sx={{mt:6}}>
          <S variant="h5">Object Model</S>

          <Box sx={{mt:3}}>
            <S variant="h6">Identifier</S>
          </Box>

          <Box sx={{mt:3}}>
            <S variant="h6">Attribute</S>
          </Box>

          <Box sx={{mt:3}}>
            <S variant="h6">IdentifierInstance</S>
          </Box>

          <Box sx={{mt:3}}>
            <S variant="h6">AttributeInstance</S>
          </Box>

          <Box sx={{mt:3}}>
            <S variant="h6">Entity</S>
          </Box>

          <Box sx={{mt:3}}>
            <S variant="h6">Port</S>
          </Box>

          <Box sx={{mt:3}}>
            <S variant="h6">Relationship</S>
          </Box>

        </Box>
      </Container>
  );
}

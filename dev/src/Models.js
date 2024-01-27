import React from 'react';

import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

import InputDataModel from './InputDataModel.js';
import ObjectModel from './ObjectModel.js';

export default function Models () {
    return (
        <Box sx={{mt:3, display:'flex', justifyContent: 'center'}}>
          <Box sx={{mt:6}}>
            <S variant="h5">Input Data Model</S>
            <InputDataModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Object Model</S>
            <ObjectModel/>
          </Box>
        </Box>
    );
}

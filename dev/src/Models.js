import React from 'react';

import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

import InputDataModel from './InputDataModel.js';
import DataModel from './DataModel.js';
import ObjectModel from './ObjectModel.js';
import Classes from './Classes.js';

export default function Models () {
    return (
        <Box sx={{mt:3}}>
          <Box sx={{mt:6}}>
            <S variant="h5">Data Model</S>
            <DataModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Input Data Model</S>
            <InputDataModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Object Model</S>
            <ObjectModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Classes</S>
            <Classes/>
          </Box>
        </Box>
    );
}

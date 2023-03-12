import React from 'react';

import Box from '@mui/material/Box';

export default function Text (props) {
    const en = props.en;
    const chldren = props.children;

    return (
        <Box sx={{p:'0px'}}>
          {!chldren && en}
          {chldren && chldren}
        </Box>
    );
}

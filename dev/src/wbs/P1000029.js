import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style ={
    display:'flex',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000029 () {
    return (
        <div style={style}>
          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h1" component="div" sx={{textAlign: 'center'}}>
              PAD
            </Typography>
          </Box>
        </div>
    );
}

// https://ja.wikipedia.org/wiki/PAD_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E8%A8%AD%E8%A8%88)

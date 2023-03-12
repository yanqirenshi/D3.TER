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

export default function P1000030 () {
    return (
        <div style={style}>
          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h1" component="div" sx={{textAlign: 'center'}}>
              DDD
            </Typography>
          </Box>
        </div>
    );
}

// https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88

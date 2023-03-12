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
              BPMN
            </Typography>
          </Box>
        </div>
    );
}

// https://ja.wikipedia.org/wiki/%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AA%E3%83%B3%E3%82%B0%E8%A1%A8%E8%A8%98%E6%B3%95

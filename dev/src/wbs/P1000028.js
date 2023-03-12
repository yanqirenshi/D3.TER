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

export default function P1000028 () {
    return (
        <div style={style}>
          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h1" component="div" sx={{textAlign: 'center'}}>
              TM
            </Typography>
          </Box>
        </div>
    );
}

// http://www.sdi-net.co.jp/ter-home.htm
// http://www.sdi-net.co.jp/
// http://www.sdi-net.co.jp/tm-versions.htm

// https://github.com/yanqirenshi/TER
// https://github.com/yanqirenshi/D3.TER

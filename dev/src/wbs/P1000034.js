import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const style ={
    display:'flex',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000034 () {
    return (
        <div style={style}>
          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h1" component="div" sx={{textAlign: 'center'}}>
              <Link href="https://www.e-stat.go.jp/">
                e-Stat
              </Link>
            </Typography>
          </Box>
        </div>
    );
}

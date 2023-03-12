import React from 'react';

import D3Deployment, { Rectum } from '@yanqirenshi/d3.deployment';

import ENCODE_DEPLOYMENT_DIAGRAM from '../data/ENCODE_DEPLOYMENT_DIAGRAM.js';

import Box from '@mui/material/Box';

const style ={
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

const rectum = new Rectum({
    transform: {
        k: 0.5,
        x: 1000.0,
        y: 200.0,
    },
});

export default function P1000045 () {
    const [graph_data] = React.useState(ENCODE_DEPLOYMENT_DIAGRAM);

    React.useEffect(()=> {
        rectum.data(graph_data);
    }, [graph_data]);

    return (
        <Box style={style}>
          <Box sx={{width:'100%', height: '800px'}}>
            <D3Deployment rectum={rectum} />
          </Box>
        </Box>
    );
}

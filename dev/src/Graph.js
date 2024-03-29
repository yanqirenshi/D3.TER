import React from 'react';
import Box from '@mui/material/Box';

import D3Ter, {Rectum}  from './lib/index.js';

import TM_DATA from './data/TM.js';

export default function Graph () {
    const [rectum, setRectum] = React.useState(null);
    const [graph_data] = React.useState(TM_DATA);

    React.useEffect(()=> {
        if (rectum!==null) return;

        setRectum(new Rectum({
            transform: {
                k: 0.7,
                x: 400.0,
                y:   0.0,
            },
            svg: {
                style: {
                    background: '#fff',
                },
            },
            edge: { width: 6, color: '#333333' },
            callbacks: {
                entity: {
                    click: (node)=> {
                        console.log(node);
                    },
                },
                identifier: {
                    click: (node)=> {
                        console.log(node);
                    },
                },
                attribute: {
                    click: (node)=> {
                        console.log(node);
                    },
                },
                relationship: {
                    click: (node)=> {
                        console.log(node);
                    },
                },
            }
        }));
    }, [rectum]);

    React.useEffect(()=> {
        if (rectum)
            rectum.data(graph_data);
    }, [rectum, graph_data]);

    if (!rectum)
        return null;

    return (
        <Box sx={{width:'100%', height:'100%'}}>
          <D3Ter rectum={rectum} />
        </Box>
    );
}

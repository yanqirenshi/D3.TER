import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Method from './Method.js';

export default function Methods (props) {
    const methods = props.data.methods.reduce((list, d) => {
        if ("string"===(typeof d.type) && 'group'===d.type)
            list = list.concat(d.list || []);
        else
            list.push(d);

        return list;
    }, []);

    return (
        <Box>
          <Typography variant="h3">
            Methods
          </Typography>

          <div>
            {methods.map(d=> {
                return (
                    <Method key={d.name} data={d}/>
                );
            })}
          </div>
        </Box>
    );
}

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Method from './Method.js';

export default function Methods (props) {
    const item_class = 'pool-item-method';
    const options = {
        columnWidth: 100,
        itemSelector: `.${item_class}`,
        gutter: 10,
        itemClass: item_class, // original parameter
    };

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

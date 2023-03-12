import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Attribute from './Attribute.js';

export default function Attributes (props) {
    const item_class = 'pool-item-attribute';

    const attributes = props.data.attributes;

    return (
        <Box>
          <Typography variant="h3">
            Attributes
          </Typography>

          <div>
            {attributes.map(d=> {
                return (
                    <Attribute data={d}/>
                );
            })}
          </div>
        </Box>
    );
}

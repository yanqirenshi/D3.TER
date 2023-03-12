import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DiagramClassMethod from './DiagramClassMethod.js';
import style from './DiagramClassStyles.js';

export default function DiagramClassMethodsGroup (props) {
    const d = props.data;

    return (
        <div style={props.number===0 ? style.item_group.first : style.item_group.not_first}>

          <Typography sx={style.item_group.title}>
            {`<<${d.title}>>`}
          </Typography>

          <Box>
            {d.list.map((d,i) => <DiagramClassMethod key={i} data={d} />)}
          </Box>

        </div>
    );
}

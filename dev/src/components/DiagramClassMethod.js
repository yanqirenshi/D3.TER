import React from 'react';

import Typography from '@mui/material/Typography';

import style from './DiagramClassStyles.js';

export default function DiagramClassMethod (props) {
    const data = props.data;

    return (
        <div style={style.item.root}>
          <div style={style.item.visibility}>
            <Typography>
              {data.visibility}
            </Typography>
          </div>

          <div style={style.item.name}>
            <Typography>
              {data.name}
            </Typography>
          </div>
        </div>
    );
}

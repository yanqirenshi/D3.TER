import React from 'react';

import style from './DiagramClassStyles.js';

import Box from '@mui/material/Box';

export default function DiagramClassAttribute (props) {
    const data = props.data;

    return (
        <Box sx={style.item.root}>
          <Box sx={style.item.visibility}>
            {data.visibility}
          </Box>

          <Box sx={style.item.name}>
            {data.name}
          </Box>

          {/* <div style={{marginLeft:22,marginRight:22}}> */}
          {/*   <p>:</p> */}
          {/* </div> */}

          {/* <div style={style.item.name}> */}
          {/*   {data.type.name} */}
          {/* </div> */}
        </Box>
    );
}

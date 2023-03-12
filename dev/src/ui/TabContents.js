import React from 'react';

import Box from '@mui/material/Box';

export default function TabContents (props) {
    const tabs = props.tabs;
    const code = props.code;
    const children = props.children;

    const style = {
        height:'100%',
    };

    if (code!==tabs.selected)
        style.display = 'none';

    return (
        <Box sx={style}>
          {children}
        </Box>
    );
}

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {Tabs} from '../../ui/index.js';

export default function Header(props) {
    const title = props.title;
    const tabs = props.tabs;
    const changeTab = props.changeTab;

    return (
        <Box>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </div>

          <div>
            <Tabs data={tabs} onChange={changeTab}/>
          </div>
        </Box>
    );
}

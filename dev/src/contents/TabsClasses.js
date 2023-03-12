import React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabsClasses (props) {
    const tabs = props.tabs || [];

    const handleChange = (e, code) => {
        const new_tabs = {...tabs};
        new_tabs.selected = code;
        props.onClickTab(new_tabs);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabs.selected}
                onChange={handleChange}
                aria-label="basic tabs example">

            {tabs.list.map(d=> {
                return (
                    <Tab key={d.code} label={d.label} value={d.code} />
                );
            })}

          </Tabs>
        </Box>
    );
}

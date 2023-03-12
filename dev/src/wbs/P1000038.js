import React from 'react';

import Box from '@mui/material/Box';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import CommonLisp from './P1000038/CommonLisp.js';
import Neo4j from './P1000038/Neo4j.js';
import Os from './P1000038/Os.js';
import PostgreSQL from './P1000038/PostgreSQL.js';

const style ={
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000038 () {
    const [tabs, setTabs] = React.useState({
        selected: '1',
        list: [
            { code: '1', label: 'OS' },
            { code: '2', label: 'Neo4j' },
            { code: '3', label: 'PostgreSQL' },
            { code: '4', label: 'Common Lisp' },
        ],
    });

    const handleChange = (event, newValue) => {
        const new_tabs = {...tabs};
        new_tabs.selected  = newValue;
        setTabs(new_tabs);
    };

    return (
        <Box style={style}>
          <Box>
          </Box>

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabs.selected}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  {tabs.list.map(tab=>{
                      return <Tab label={tab.label} value={tab.code} />;
                  })}
                </TabList>
              </Box>

              <TabPanel value="1">
                <Os/>
              </TabPanel>

              <TabPanel value="2">
                <Neo4j/>
              </TabPanel>

              <TabPanel value="3">
                <PostgreSQL/>
              </TabPanel>

              <TabPanel value="4">
                <CommonLisp/>
              </TabPanel>
            </TabContext>
          </Box>

        </Box>
    );
}

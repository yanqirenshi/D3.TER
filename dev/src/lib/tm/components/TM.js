import React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Graph from './Graph.js';
import Identifiers from './Identifiers.js';
import Attributes from './Attributes.js';

const style = {
    contents: {
        height:'100%',
        boxSizing: 'border-box',
        overflow: 'auto',
    },
};

export default function TM (props) {
    const data = props.data;

    const [tabs, setTabs] = React.useState({
        selected: '1',
        list: [
            { code: '1', label: 'Graph' },
            { code: '2', label: 'Identifiers' },
            { code: '3', label: 'Attributes' },
        ]});

    const click = (event, newValue)=> {
        const new_tabs = {...tabs};
        new_tabs.selected = newValue;
        setTabs(new_tabs);
    };

    return (
          <TabContext value={tabs.selected}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={click}
                       aria-label="lab API tabs example"
                       centered>
                {tabs.list.map(tab=> {
                    return <Tab label={tab.label} value={tab.code} />;
                })}
              </TabList>
            </Box>

            <TabPanel value="1" style={style.contents}>
              <Graph data={data}/>
            </TabPanel>

            <TabPanel value="2" style={style.contents}>
              <Identifiers data={data}/>
            </TabPanel>

            <TabPanel value="3" style={style.contents}>
              <Attributes data={data}/>
            </TabPanel>

          </TabContext>
    );
}

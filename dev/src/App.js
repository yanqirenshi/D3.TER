import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Tabs from './Tabs.js';
import Graph from './Graph.js';

import Overview from './Overview.js';
import Models from './Models.js';
import Views from './Views.js';
import Classes from './Classes.js';

export default function App() {
    const [tabs, setTabs] = React.useState({
        selected: 'models',
        list: [
            { code: 'overview', label: 'Overview' },
            { code: 'classes',  label: 'Classes' },
            { code: 'models',   label: 'Models' },
            { code: 'views',    label: 'Views' },
        ],
    });

    const onChange = (new_tabs)=> setTabs(new_tabs);

    return (
        <Box sx={{pt: 3, pb: 22}}>
          <Box sx={{height:777, p: 2, background: '#f8f8f8'}}>
            <Graph/>
          </Box>

          <Box sx={{mt:2}}>
            <Tabs tabs={tabs} onChange={onChange}/>
          </Box>

          {'overview'===tabs.selected && <Overview/>}
          {'classes'===tabs.selected && <Classes/>}
          {'models'===tabs.selected && <Models/>}
          {'views'===tabs.selected && <Views/>}
        </Box>
    );
}

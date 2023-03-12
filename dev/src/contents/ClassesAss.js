import React, { useState } from 'react';

import Box from '@mui/material/Box';

import {Footer} from '../components/Common.js';

import TabsClasses from './TabsClasses.js';

import Overview from './ClassesAss/Overview.js';
import Rectum from './ClassesAss/Rectum.js';
import Sculptor from './ClassesAss/Sculptor.js';
import Tailor from './ClassesAss/Tailor.js';
import Painter from './ClassesAss/Painter.js';

import * as data from '../data/Classes.js';

export default function ClassesAss () {
    const [tabs, setTabs] = useState({
        selected: 'overview',
        list: [
            { code: 'overview', label: 'Overviw',  active:  true },
            { code: 'rectum',   label: 'Rectum',   active: false },
            { code: 'sculptor', label: 'Sculptor', active: false },
            { code: 'tailor',   label: 'Tailor',   active: false },
            { code: 'painter',  label: 'Painter',  active: false },
        ],
    });

    const clickTab = (new_tabs) => setTabs(new_tabs);

    const isActive = (k) => tabs.selected===k;

    return (
        <Box sx={{width:'100%', height: '100%', overflow:'auto'}}>

          <Box style={{marginTop: 22, display: 'flex', justifyContent: 'center'}}>
            <TabsClasses tabs={tabs} onClickTab={clickTab} />
          </Box>

          {isActive('overview') && <Overview />}
          {isActive('rectum')   && <Rectum data={data.rectum}/>}
          {isActive('sculptor') && <Sculptor data={data.sculptor}/>}
          {isActive('tailor')   && <Tailor data={data.entity_tailor}/>}
          {isActive('painter')  && <Painter data={data.painter}/>}
          <Footer />
       </Box>
    );
}

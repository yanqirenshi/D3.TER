import React from 'react';

import TabPanel from '@mui/lab/TabPanel';

import {ContentsWithTabs, makeTabs, selectTab} from '../ui/layout.js';

import * as content from '../contents/index.js';

const style = {
    contents: {
        height:'100%',
        background:'#eee',
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: '0px'
    },
};

export default function Admin (props) {
    const [tabs, setTabs] = React.useState(makeTabs(
        'page',
        [
            { code: '4', label: '辞書' },
            { code: '3', label: 'ALL' },
        ]));

    return (
        <ContentsWithTabs data={tabs}
                          onChange={(code)=> setTabs(selectTab(code, tabs))}>

            <TabPanel value="4" style={style.contents}>
              <content.Wbs wbs_id={1023}/>
            </TabPanel>

            <TabPanel value="3" style={style.contents}>
              <content.Wbs/>
            </TabPanel>

       </ContentsWithTabs>
    );
}

import React from 'react';

import TabPanel from '@mui/lab/TabPanel';

import {
    ContentsWithTabs,
    makeTabs,
    selectTab,
} from '../ui/layout.js';

import {
    TabContents,
} from '../ui/index.js';

import * as content from '../contents/index.js';

import sogh from '../manegers/sogh.js';

const style = {
    contents: {
        height:'100%',
        boxSizing: 'border-box',
        overflow: 'auto',
    },
};

export default function Home (props) {
    const [tabs, setTabs] = React.useState(makeTabs(
        'examples',
        [
            { code: 'examples',     label: 'Examples'},
            // { code: 'components',   label: 'Components'},
            { code: 'data',         label: 'Data'},
            { code: 'classes_ass',  label: 'Classes(Ass)' },
            { code: 'classes_data', label: 'Classes(Data)' },
            { code: 'backlogs',     label: 'Backlogs' },
            { code: 'sprints',      label: 'Sprints' },
            { code: 'sprint_p',     label: 'Sprint(P)' },
            { code: 'sprint_t',     label: 'Sprint(T)' },
        ]));

    return (
        <ContentsWithTabs data={tabs}
                          onChange={(code)=> setTabs(selectTab(code, tabs))}>

          <TabContents tabs={tabs} code="examples">
            <content.Examples/>
          </TabContents>

          <TabContents tabs={tabs} code="components">
          </TabContents>

          <TabContents tabs={tabs} code="data">
            <content.Data/>
          </TabContents>

          <TabContents tabs={tabs} code="classes_ass">
            <content.ClassesAss/>
          </TabContents>

          <TabContents tabs={tabs} code="classes_data">
            <content.ClassesData/>
          </TabContents>

          <TabContents tabs={tabs} code="backlogs">
            <content.Backlogs/>
          </TabContents>

          <TabContents tabs={tabs} code="sprints">
            <content.Sprints sogh={sogh} repository={null} />
          </TabContents>

          <TabContents tabs={tabs} code="sprint_p">
            <content.SprintProjects sogh={sogh} repository={null} />
          </TabContents>

          <TabContents tabs={tabs} code="sprint_t">
            <content.SprintTimes sogh={sogh} repository={null} /> {/* repository */}
          </TabContents>

        </ContentsWithTabs>
    );
}

import React, { useState } from 'react';
import { connect } from 'react-redux';
import Measure from 'react-measure';

import Hero from '../components/Hero.js';
import TabContents from '../components/TabContents.js';

import Examples from '../contents/Examples.js';
import Data from '../contents/Data.js';
import Classes from '../contents/Classes.js';
import Asshole from '../contents/Asshole.js';
import Backlogs from '../contents/Backlogs.js';
import Sprints from '../contents/Sprints.js';
import SprintTimes from '../contents/SprintTimes.js';
import SprintProjects from '../contents/SprintProjects.js';

function Home (props) {
    const [tabs] = useState([
        { code: 'examples',   label: 'Examples'},
        { code: 'components', label: 'Components'},
        { code: 'data',       label: 'Data'},
        { code: 'classes',    label: 'Classes' },
        { code: 'backlogs',   label: 'Backlogs' },
        { code: 'sprints',    label: 'Sprints' },
        { code: 'sprint_p',   label: 'Sprint(P)' },
        { code: 'sprint_t',   label: 'Sprint(T)' },
    ]);
    const [bounds, setBounds] = React.useState({height:0});

    const sogh = props.sogh;
    const repository = props.repository;

    return (
        <div style={{width: '100vw', height: '100vh'}}>
          <Measure bounds
                   onResize={rect=> setBounds(rect.bounds)}>
            {({ measureRef }) => (
                <div ref={measureRef}>
                  <Hero tabs={tabs} />
                </div>
            )}
          </Measure>

          <div style={{height: `calc(100% - ${bounds.height}px)`, width: '100%'}}>
            <TabContents code="examples" tabs={tabs}>
              <Examples />
            </TabContents>

            <TabContents code="components" tabs={tabs}>
              <Asshole />
            </TabContents>

            <TabContents code="data" tabs={tabs}>
              <Data />
            </TabContents>

            <TabContents code="classes" tabs={tabs}>
              <Classes />
            </TabContents>

            <TabContents code="backlogs" tabs={tabs}>
              <Backlogs sogh={sogh} repository={repository} />
            </TabContents>

            <TabContents code="sprints" tabs={tabs}>
              <Sprints sogh={sogh} repository={repository} />
            </TabContents>

            <TabContents code="sprint_p" tabs={tabs}>
              <SprintProjects sogh={sogh} repository={repository} />
            </TabContents>

            <TabContents code="sprint_t" tabs={tabs}>
              <SprintTimes sogh={sogh} repository={repository} />
            </TabContents>
          </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            sogh: state.sogh,
            repository: state.repository,
        };
    },
    (dispatch) => ({}),
)(Home);

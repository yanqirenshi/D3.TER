import React, { useState } from 'react';
import { connect } from 'react-redux';

import Hero from '../components/Hero.js';
import TabContents from '../components/TabContents.js';

import Examples from './home/Examples.js';
import Data from './home/Data.js';
import Classes from './home/Classes.js';
import Asshole from './home/Asshole.js';
import Backlogs from './home/Backlogs.js';
import Sprints from './home/Sprints.js';
import SprintTimes from './home/SprintTimes.js';
import SprintProjects from './home/SprintProjects.js';

function Home (props) {
    const [tabs] = useState([
        { code: 'examples', label: 'Examples'},
        { code: 'asshole',  label: 'Asshole'},
        { code: 'data',     label: 'Data'},
        { code: 'classes',  label: 'Classes' },
        { code: 'backlogs', label: 'Backlogs' },
        { code: 'sprints',  label: 'Sprints' },
        { code: 'sprint_p',  label: 'Sprint(P)' },
        { code: 'sprint_t',  label: 'Sprint(T)' },
    ]);

    const sogh = props.sogh;
    const repository = props.repository;

    return (
        <div style={{width: '100%', height: '100%'}}>
          <TabContents code="examples" tabs={tabs}>
            <div style={{width: '100%', height: '100%', display:'flex', flexDirection: 'column'}}>
              <Hero tabs={tabs} />
              <Examples />
            </div>
          </TabContents>

          <TabContents code="asshole" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <Asshole />
            </div>
          </TabContents>


          <TabContents code="data" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <Data />
            </div>
          </TabContents>

          <TabContents code="classes" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <Classes />
            </div>
          </TabContents>

          <TabContents code="backlogs" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <Backlogs sogh={sogh} repository={repository} />
            </div>
          </TabContents>

          <TabContents code="sprints" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <Sprints sogh={sogh} repository={repository} />
            </div>
          </TabContents>

          <TabContents code="sprint_p" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <SprintProjects sogh={sogh} repository={repository} />
            </div>
          </TabContents>

          <TabContents code="sprint_t" tabs={tabs}>
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
              <Hero tabs={tabs} />
              <SprintTimes sogh={sogh} repository={repository} />
            </div>
          </TabContents>
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

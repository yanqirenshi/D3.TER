import React, { useState } from 'react';

import Hero from '../components/Hero.js';
import TabContents from '../components/TabContents.js';

import Examples from './home/Examples.js';
import Data from './home/Data.js';
import Classes from './home/Classes.js';
import Asshole from './home/Asshole.js';

export default function Home () {
    const [tabs] = useState([
        { code: 'examples', label: 'Examples'},
        { code: 'asshole',  label: 'Asshole'},
        { code: 'data',     label: 'Data'},
        { code: 'classes',  label: 'Classes' },
    ]);

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
        </div>
    );
}

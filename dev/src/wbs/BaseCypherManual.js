import React from 'react';
import Measure from 'react-measure';

import Wbs from '../contents/Wbs.js';

import Header from './BaseCypherManual/Header.js';

export default function BaseCypherManual (props) {
    const title = props.title;
    const write = props.write;

    const [bounds, setBounds] = React.useState({height:0});
    const [tabs, setTabs] = React.useState({
        selected: 'write',
        list: [
            { code: 'write', label: 'Write' },
            { code: 'wbs',   label: 'WBS' },
        ],
    });

    const changeTab = (v)=> {
        const new_tabs = {...tabs};
        new_tabs.selected = v;
        setTabs(new_tabs);
    };

    return (
        <div style={{width:'100vw', height: '100vh', paddingTop:22}}>
          <Measure bounds onResize={rect => setBounds(rect.bounds)}>
            {({ measureRef }) => (
                <div ref={measureRef}>
                  <Header title={title} tabs={tabs} changeTab={changeTab}/>
                </div>
            )}
          </Measure>


          <div hidden={'write'!==tabs.selected}
               style={{height: `calc(100vh - ${bounds.height}px)`, overflow: 'auto'}}>
            {write}
          </div>

          <div hidden={'wbs'!==tabs.selected}
               style={{height: `calc(100vh - ${bounds.height}px)`, overflow: 'auto'}}>
            <div style={{paddingBottom:222}}>
              <Wbs wbs_id={1005}/>
            </div>
          </div>
        </div>
    );
}

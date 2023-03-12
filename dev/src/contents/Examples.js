import React from 'react';

import Box from '@mui/material/Box';

import Rectum from '../tm/js/Rectum.js';
import D3Ter from '../tm/components/D3Ter.js';

import SideMenu from './Examples/SideMenu.js';
import TabContents from './Examples/TabContents.js';

import EXAMPLES_DATA from '../data/EXAMPLES_DATA.js';

const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    graph_area: {
        width:  '100%',
        height: '100%',
        background: '#eee',
        padding: 0,
        borderRadius: 5,
    },
};

export default function Examples () {
    const [rectum, setRectum] = React.useState(null);
    const [graph_data] = React.useState(EXAMPLES_DATA);
    // const [graph_data, setGraphData] = React.useState(EXAMPLES_DATA);
    const [tabs, setTabs] = React.useState({
        selected: 'graph',
        list: [
            { code: 'graph',  label: 'Graph', },
            { code: 'id',     label: 'Id', },
            { code: 'attr',   label: 'Attr', },
            { code: 'i.id',   label: 'Id.I', },
            { code: 'i.attr', label: 'Attr.I', },
        ],
    });

    React.useEffect(()=> {
        if (rectum!==null) return;

        setRectum(new Rectum({
            transform: { k: 0.7, x: 400.0, y: 400.0 },
            edge: { width: 6, color: '#333333' },
            callbacks: {
                entity: {
                    click: (node)=> {
                        console.log(node);
                    }
                }
            }
        }));
    }, [rectum]);

    React.useEffect(()=> {
        if (rectum)
            rectum.data(graph_data);
    }, [rectum, graph_data]);

    const callbacks = {
        change: {
            tab: (new_tabs)=> setTabs(new_tabs),
        },
    };

    return (
        <Box style={style}>
          <SideMenu tabs={tabs} callbacks={callbacks}/>

          <Box style={{height: '100%', flexGrow: 1}}>

            <TabContents code="graph" tabs={tabs}>
              <Box style={style.graph_area}>
                <D3Ter rectum={rectum} />
              </Box>
            </TabContents>

            <TabContents code="id" tabs={tabs}>
            </TabContents>

            <TabContents code="attr" tabs={tabs}>
            </TabContents>

            <TabContents code="i.id" tabs={tabs}>
            </TabContents>

            <TabContents code="i.attr" tabs={tabs}>
            </TabContents>

          </Box>
        </Box>
    );
}

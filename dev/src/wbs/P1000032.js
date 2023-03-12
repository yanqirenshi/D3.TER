import React from 'react';

import Box from '@mui/material/Box';

import Menu from './P1000032/Menu.js';
import * as sec from './P1000032/index.js';

const style ={
    display:'flex',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000032 () {
    const [selected, setSelected] = React.useState(mtenu_items[0].code);

    const callbacks = {
        click: {
            menu_item: (code)=> setSelected(code),
        }
    };

    return (
        <div style={style}>
          <Box sx={{width: 1111}}>
            {'01'===selected && <sec.S01_BoltProtocolDocumentation/>}
            {'02'===selected && <sec.S02_PackStream/>}
            {'03_01'===selected && <sec.S03_01_BoltProtocolHandshake/>}
            {'03_02'===selected && <sec.S03_02_BoltProtocolMessage/>}
            {'03_03'===selected && <sec.S03_03_BoltProtocolStructureSemantics/>}
            {'03_04'===selected && <sec.S03_04_BoltProtocolServerState/>}
            {'03'===selected && <sec.S03_BoltProtocol/>}
            {'04'===selected && <sec.S04_BoltProtocolAndNeo4jCompatibility/>}
            {'05'===selected && <sec.S05_Neo4jDriverAPI/>}
            {'06'===selected && <sec.S06_Neo4jDrivers/>}
            {'07_01'===selected && <sec.S07_01_AppendixVar4/>}
            {'07_02'===selected && <sec.S07_02_AppendixVar3/>}
            {'07_03'===selected && <sec.S07_03_AppendixVar2/>}
            {'07_04'===selected && <sec.S07_04_AppendixVar1/>}
            {'07'===selected && <sec.S07_Appendix/>}
          </Box>

          <Box sx={{p: '55px'}}>
            <Menu mtenu_items={mtenu_items}
                  selected={selected}
                  callbacks={callbacks}/>
          </Box>
        </div>
    );
}

const mtenu_items = [
    {
        code: '01',
        label: 'Bolt Protocol documentation',
        url: 'https://neo4j.com/docs/bolt/current/',
    },
    {
        code: '02',
        label: 'PackStream',
        url: 'https://neo4j.com/docs/bolt/current/packstream/',
    },
    {
        code: '03',
        label: 'Bolt Protocol',
        url: '',
        children: [
            {
                code: '03_01',
                label: 'Bolt Protocol handshake specification',
                url: 'https://neo4j.com/docs/bolt/current/bolt/handshake/',
            },
            {
                code: '03_02',
                label: 'Bolt Protocol message specification',
                url: 'https://neo4j.com/docs/bolt/current/bolt/message/',
            },
            {
                code: '03_03',
                label: 'Structure Semantics',
                url: 'https://neo4j.com/docs/bolt/current/bolt/structure-semantics/',
            },
            {
                code: '03_04',
                label: 'Bolt Protocol server state specification',
                url: 'https://neo4j.com/docs/bolt/current/bolt/server-state/',
            },
        ],
    },
    {
        code: '04',
        label: 'Bolt Protocol and Neo4j compatibility',
        url: '',
    },
    {
        code: '05',
        label: 'Neo4j Driver API',
        url: '',
    },
    {
        code: '06',
        label: 'Neo4j Drivers',
        url: '',
    },
    {
        code: '07',
        label: 'Appendix',
        url: '',
        children: [
            {
                code: '07_01',
                label: 'Bolt message state transitions in version 4.x',
                url: 'https://neo4j.com/docs/bolt/current/appendix/version-4/',
            },
            {
                code: '07_02',
                label: 'Bolt message state transitions in version 3',
                url: 'https://neo4j.com/docs/bolt/current/appendix/version-3/',
            },
            {
                code: '07_03',
                label: 'Bolt message state transitions in version 2',
                url: 'https://neo4j.com/docs/bolt/current/appendix/version-2/',
            },
            {
                code: '07_04',
                label: 'Bolt message state transitions in version 1',
                url: 'https://neo4j.com/docs/bolt/current/appendix/version-1/',
            },
        ],
    },
];

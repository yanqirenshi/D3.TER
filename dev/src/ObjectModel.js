import React from 'react';
import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

export default function ObjectModel () {
    return (
        <Box>
          <pre style={{lineHeight: '13px'}}>
            {x.join('\n')}
          </pre>
        </Box>
    );
}

const x = [
    '+--------------+      +----------------------+      +--------------+',
    '| IDENTIFIER   |--+   | IDENTIFIERS Instance |--+   | ENTITY       |',
    '|==============|  |   |======================|  |   |==============|',
    '|+ id          |  |   |+ id                  |  |   |+ id          |           | Resource, Resource (*)',
    '|+ name        |  `-->|+ identifier          |  |   |+ type        |< - - - - -| Event, Event (*)',
    '|+ type        |      |----------------------|  |   |+ name        |',
    '|+ length      |      +----------------------+  |   |+ description |       +----------+',
    '|+ description |                                |   |+ position    |<------| position |',
    '|--------------|                                |   |+ size        |<---+  |==========|',
    '+--------------+                                `-->|+ identifiers |--+ |  | x        |',
    '                                                +-->|+ attributes  |  | |  | y        |',
    '+--------------+      +----------------------+  |   |--------------|  | |  | z        |',
    '| ATTRIBUTE    |      | IDENTIFIERS Instance |  |   +--------------+  | |  |----------|',
    '|==============|      |======================|  |                     | |  +----------+',
    '|+ id          |--+   |+ id                  |--+                     | |',
    '|+ name        |  `-->|+ attribute           |                        | |  +------+',
    '|+ type        |      |----------------------|                        | +--| Size |',
    '|+ length      |      +----------------------+                        |    |======|',
    '|+ description |                                                      |    | w    |',
    '|--------------|                                                      |    | y    |',
    '+--------------+                                                      |    |------|',
    '                                                                      |    +------+',
    '+---------------+                                                     |',
    '| RELATIONSHIPS |                                                     |',
    '|===============|                                                     |',
    '|+ id           |                                                     |',
    '|+ from         | { id: 0, position: 0 } <----------------------------+',
    '|+ to           | { id: 0, position: 0 } <----------------------------+',
    '|---------------|',
    '+---------------+',
];

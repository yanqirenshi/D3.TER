import React from 'react';
import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

export default function InputDataModel () {
    return (
        <Box>
          <S>なんかこれ、、、複数項目でリレーション貼るのにイマイチだな。</S>
          <pre style={{lineHeight: '13px'}}>
            {x.join('\n')}
          </pre>
        </Box>
    );
}

const x = [
    '+-------------+          +-------------+',
    '| IDENTIFIER  |----+     | ENTITY      |',
    '|=============|    |     |=============|',
    '| id          |    |     | id          |',
    '| name        |    |     | type        |< - -| ???',
    '| type        |    |     | name        |',
    '| length      |    |     | description |',
    '| description |    |     | position    | { x: 0, y: 0, z: 0 }',
    '+-------------+    |     | size        | { w: 0, h: 0 }',
    '                   `---->| identifiers | { id: 0, identifier: 0 } --+',
    '+-------------+    +---->| attributes  |                            |',
    '| ATTRIBUTE   |    |     +-------------+                            |',
    '|=============|    |                                                |',
    '| id          |----+                                                |',
    '| name        |                                                     |',
    '| type        |< - -| ???                                           |',
    '| length      |                                                     |',
    '| description |                                                     |',
    '+-------------+                                                     |',
    '                                                                    |',
    '+---------------+                                                   |',
    '| RELATIONSHIPS |                                                   |',
    '|===============|                                                   |',
    '| id            |                                                   |',
    '| from          | { id: 0, position: 0 } <--------------------------+',
    '| to            | { id: 0, position: 0 } <--------------------------+',
    '+---------------+',
];

import React from 'react';
import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

export default function InputDataModel () {
    return (
        <Box sx={{display:'flex', justifyContent: 'center', mr:2}}>
          <Box sx={{pl:2,pr:2}}>
            <pre style={{lineHeight: '13px'}}>
              {x.join('\n')}
            </pre>
          </Box>

          <Box sx={{pl:2,pr:2}}>
            <pre style={{lineHeight: '13px'}}>
              {y.join('\n')}
            </pre>
          </Box>
        </Box>
    );
}

const x = [
    '+---------------+',
    '| Entity        |                                      +---------------+',
    '|---------------|           +--------------------(1)--o| Name          |',
    '| id            |           |                          |===============|',
    '| type          |           |               +-------+  | physical name |',
    '| name          |-----------+ +------------o| point |  | logical name  |',
    '| description   |             |   +------+  |=======|  +---------------+',
    '| position      |<------------+   | rect |  | x     |',
    '| size          |<---------------o|======|  | y     |',
    '| identifiers   ||[]<------+      | w    |  | z     |',
    '| attributes    ||[]<---+  |      | h    |  +-------+',
    '+---------------+       |  |      +------+',
    '                        |  |      +-------------------+',
    '                        |  +-----o| entity identifier |       +---------------+',
    '                        |         |===================|       | identifier    |',
    '                        |         | id                |       |===============|',
    '                        |         | identifier id     |<-----o| id            |',
    '                        |         | name              |<--(1) | name          |<--(1)',
    '                        |         | description       |       | description   |',
    '                        |         +-------------------+       +---------------+',
    '                        |         +------------------+',
    '                        +--------o| entity attribute |        +---------------+',
    '                                  |==================|        | attribute     |',
    '                                  | id               |        |===============|',
    '                                  | attribute id     |<------o| id            |',
    '                                  | name             |<--(1)  | name          |<--(1)',
    '                                  | description      |        | description   |',
    '                                  +------------------+        +---------------+',
];

const y = [
    '+--------------+',
    '| Relationship |',
    '|==============|         +-------------+',
    '| id           |         | port        |',
    '| type         |         |=============|',
    '| from         ||<------o| cardinality |',
    '| to           ||<------o| optionality |',
    '| details      |[]<--+   | position    |',
    '| description  |     |   +-------------+',
    '+--------------+     |',
    '                     |   +------+',
    '                     +--o| item |     +----------+',
    '                         |======|     | node     |',
    '                         | from ||<--o|==========|',
    '                         | tto  ||<--o| id       |',
    '                         +------+     | position |',
    '                                      +----------+',
];

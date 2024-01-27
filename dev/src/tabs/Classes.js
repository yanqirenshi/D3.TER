import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {H} from 'tion';

export default function Classes () {
    return (
        <Box sx={{display:'flex', justifyContent: 'center', pt: 5}}>
          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Rectum</H>
            <pre style={{lineHeight: '13px'}}>
              {z.join('\n')}
            </pre>
          </Box>

          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Painter</H>
            <pre style={{lineHeight: '13px'}}>
              {y.join('\n')}
            </pre>
          </Box>

          <Box sx={{ml:2, mr:2}}>
            <H lev="5">Tailer(Stylest)</H>
            <pre style={{lineHeight: '13px'}}>
              {x.join('\n')}
            </pre>
          </Box>
        </Box>
    );
}

const z = [
    '+-----------------------------+',
    '| Rectum (Colon)              |',
    '|=============================|',
    '|+ callbacks                  |',
    '|- _entities                  |',
    '|- _relationships             |',
    '|- _default                   |',
    '|-----------------------------|',
    '|  ensureCallbacks            |',
    '|  entities                   |',
    '|  bounds                     |',
    '|  getIdentifier              |',
    '|  buildRelationshipsWithPort |',
    '|+ data                       |',
    '|  draw                       |',
    '+-----------------------------+',
];

const x = [
    '                                  +---------+',
    '                                  | Atman   |',
    '                                  |=========|',
    '                                  |- _class |',
    '                                  |- _id    |',
    '                                  |- _core  |',
    '                                  |---------|',
    '                                  |+ id     |',
    '                                  +---------+',
    '                                       ^',
    '                                       |',
    '       +-------------------------------+------------+-------------------+---------------+-----------+---------------------+',
    '       |                                            |                   |               |           |                     |',
    '+---------------------+                        +----------------+  +-----------+  +------------+    |                     |',
    '| Builder             |                        | ColumnInstance |  | Attribute |  | Identifier |    |                     |',
    '|=====================|                        |================|  |===========|  |============|    |                     |',
    '|+ name               |                        |+ name          |  |+ name     |  |+ name      |    |                     |',
    '|+ description        |                        |- _master       |  |-----------|  |------------|    |                     |',
    '|+ position           |                        |----------------|  +-----------+  +------------+    |                     |',
    '|+ size               |                        +----------------+                                   |                     |',
    '|+ type               |                             ^                                               |                     |',
    '|+ background         |                             |                                               |                     |',
    '|---------------------|      +---------+            +----------------------+                        |                     |',
    '|+ init               |      |         |            |                      |                        |                     |',
    '|+ template           |      |  +-----------+  +-------------------+  +--------------------+  +------------------+  +--------------+',
    '|- entityTypeContents |      |  | Entity    |  | AttributeInstance |  | IdentifierInstance |  | Port             |  | Relationship |',
    '|- entityBackground   |      |  |===========|  |===================|  |====================|  |==================|  |==============|',
    '|- buildIdentifiers   |      |  |- _default |  |+ name             |  |+ name              |  |- _id             |  |+ from        |',
    '|- buildAttributes    |      |  |-----------|  |+ position         |  |+ position          |  |- _owner          |  |+ to          |',
    '|- build              |      |  +-----------+  |+ size             |  |+ size              |  |- _type           |  |--------------|',
    '+---------------------+      |                 |-------------------|  |- _ports            |  |- _core           |  +--------------+',
    '       ^                     |                 |+ template         |  |--------------------|  |+ position        |',
    '       |                     |                 +-------------------+  +--------------------+  |- _entity         |',
    '+-------------------------+  |                                                                |------------------|',
    '| EntityTailor            |  |                                                                |+ position_degree |',
    '|=========================|  |                                                                +------------------+',
    '|<Size>                   |  |',
    '|- sizingType             |  |',
    '|  sizingName             |  |',
    '|  sizingIdentifiers      |  |',
    '|  sizingAttributes       |  |',
    '|  sizingContentsArea     |  |',
    '|+ sizing                 |  |',
    '|+ reSizing               |  |',
    '|                         |  |',
    '|<Position>               |  |',
    '|- positioningName        |  |',
    '|  positioningType        |  |',
    '|  positioningColumnItems |  |',
    '|  positioningIdentifiers |  |',
    '|  positioningAttributes  |  |',
    '|  deg2rad                |  |                                              utils/',
    '|  getPortLineLength      |  |                                              +-----------+  +------------+  +----------+  +------+',
    '|  getPortLineFrom        |  |                                              | Name      |  | Pool       |  | Position |  | Size |',
    '|  makePortLine           |  |                                              |===========|  |============|  |==========|  |======|',
    '|  isCorss                |  |                                              |+ physical |  |------------|  |+ x       |  |+ h   |',
    '|  getCrossPointCore      |  |                                              |+ logical  |  |+ make      |  |+ y       |  |+ w   |',
    '|  getCrossPoint          |  |                                              |+ padding  |  |+ list2pool |  |+ z       |  |------|',
    '|  getEntityLines         |  |                                              |+ position |  +------------+  |----------|  +------+',
    '|  positioningPort        |  |                                              |+ size     |                  +----------+',
    '|  positioningPorts       |  |                                              |-----------|',
    '|  positioningEntity      |  |                                              |+ set      |',
    '|+ positioning            |  |                                              |+ val      |',
    '+-------------------------+  |                                              +-----------+',
    '       ^                     |',
    '       |                     |',
    '       +---------------------+',
];

const y = [
    '+----------------+       +----------------------+   +------------------------+   +----------------+',
    '| Painter        |       | Entity               |   | Relationships          |   | Ports          |',
    '|================|       |======================|   |========================|   |================|',
    '|+ foreground    |       |- _parent             |   |- _parent               |   |- _parent       |',
    '|+ background    |       |----------------------|   |------------------------|   |----------------|',
    '|+ callbacks     |       |- foreground          |   |+ drawRelationshipsCore |   |# drawPortsCore |',
    '|- _default      |       |- background          |   |+ drawRelationships     |   |+ drawPorts     |',
    '|_painters       |       |- callbacks           |   +------------------------+   +----------------+',
    '|----------------|       |- default             |',
    '|- ports         |<--+   |                      |',
    '|- relationships |   |   |<Move>                |',
    '|- entity        |   |   |- dragStart           |',
    '|+ draw          |   |   |- dragged             |',
    '+----------------+   |   |- dragEnd             |',
    '                     |   |- addMoveEvents       |',
    '                     +--||  moveEntity          |',
    '                        ||  moveEdges           |',
    '                         |                      |',
    '                         |<Draw this.entity>    |',
    '                         |  drawGroup           |',
    '                         |                      |',
    '                         |<Body>                |',
    '                         |  drawBodyCore        |',
    '                         |  drawBody            |',
    '                         |                      |',
    '                         |<Name>                |',
    '                         |  drawNameRect        |',
    '                         |  drawNameText        |',
    '                         |  drawName            |',
    '                         |                      |',
    '                         |<Type>                |',
    '                         |  drawTypeRect        |',
    '                         |  drawTypeText        |',
    '                         |  drawType            |           +------------------------+',
    '                         |                      |           | Identifiers            |',
    '                         |<Identifiers>         |           |========================|',
    '                         |  drawIdentifiersRect ||--------->|------------------------|',
    '                         |  drawIdentifiersText ||          |+ draw                  |',
    '                         |  drawIdentifiers     |           +------------------------+',
    '                         |                      |',
    '                         |<Attributes>          |           +------------------------+',
    '                         |  drawAttributesRect  ||--------->| Attributes             |',
    '                         |  drawAttributesText  ||          |========================|',
    '                         |  drawAttributes      |           |------------------------|',
    '                         |                      |           |+ draw                  |',
    '                         |<Draw Main>           |           +------------------------+',
    '                         |+ redraw              |',
    '                         |+ draw                |',
    '                         +----------------------+',
];

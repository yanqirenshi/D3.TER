import React from 'react';
import { Section, Container } from 'react-bulma-components';

export default function Overview () {
    return (
        <Section>
          <Container>
            <div>
              <p style={{fontSize:16, lineHeight:'16px'}}>
                <pre>{x.join('\n')}</pre>
              </p>
            </div>
          </Container>
        </Section>
    );
}

const x = [
    '                                           +---------+            +----------+    +--------+    +------+',
    '                                           | Atman   |            | Sculptor |    | Umpire |    | Pool |',
    '                                           |=========|            |==========|    |========|    |======|',
    '                                           |- _class |            |----------|    |--------|    |------|',
    '                                           |- _id    |            |          |    |        |    +------+',
    '                                           |- _core  |            |          |    |        |',
    '                                           |---------|            +----------+    +--------+',
    '                                           |+ id     |',
    '                                           +---------+',
    '                                                ^',
    '                                                |',
    '                                                +-------------------------+--------------------+------------------+---------------------+----------------------+',
    '                                                |                         |                    |                  |                     |                      |',
    '                                     +---------------------+      +----------------+     +-----------+     +------------+     +------------------+     +--------------+',
    '                                     | EntityBuilder       |      | ColumnInstance |     | Attribute |     | Identifier |     | Port             |     | Relationship |',
    '                                     |=====================|      |================|     |===========|     |============|     |==================|     |==============|',
    '                                     |+ padding            |      |+ name          |     |+ name     |     |+ name      |     |- _id             |     |+ from        |',
    '                                     |+ margin             |      |- _master       |     |-----------|     |------------|     |- _owner          |     |+ to          |',
    '                                     |+ description        |      |----------------|     +-----------+     +------------+     |- _type           |     |--------------|',
    '                                     |+ position           |      +----------------+                                          |- _core           |     +--------------+',
    '                                     |+ size               |              ^                                                   |+ position        |',
    '                                     |+ bar                |              |                                                   |- _entity         |',
    '                                     |+ background         |              +----------------------------+                      |------------------|',
    '                                     |+ name               |              |                            |                      |+ position_degree |',
    '                                     |+ type               |      +--------------------+    +-------------------+             +------------------+',
    '                                     |+ identifiers        |      | IdentifierInstance |    | AttributeInstance |',
    '                                     |+ attributes         |      |====================|    |===================|',
    '                                     |+ ports              |      |--------------------|    |-------------------|',
    '                                     |- sculptor           |      +--------------------+    +-------------------+',
    '                                     |---------------------|              |                            |',
    '                                     |- init               |              |                            |',
    '                                     |- template           |              |                            |',
    '                                     |- entityTypeContents |              |                            |',
    '                                     |- entityBackground   |              |                            |',
    '                                     |- buildIdentifiers   |              |                            |',
    '                                     |- buildAttributes    |              |                            |',
    '+--------------------------+         |+ build              |              |                            |',
    '| EntityTailor             |         +---------------------+              |                            |',
    '|==========================|                    ^                         |                            |',
    '|--------------------------|                    |                         |                            |',
    '|                          |          +---------------------+             |                            |',
    '|- sizingType              |          | Entity              |             |                            |',
    '|- sizingName              |          |=====================|             |                            |',
    '|- sizingIdentifiers       |          | identifier_instance |<------------+                            |',
    '|- sizingAttributes        |          | attribute_instance  |<-----------------------------------------+',
    '|- sizingContentsArea      |          |---------------------|',
    '|+ sizing                  |--------->|+ sizing             |',
    '|+ reSizing                |--------->|+ reSizing           |',
    '|                          |    +---->|+ positioning        |',
    '|+ positioningName         |    |     +---------------------+',
    '|+ positioningType         |    |',
    '|+ positioningColumnItems  |    |',
    '|+ positioningIdentifiers  |    |',
    '|+ positioningAttributes   |    |',
    '|+ deg2rad                 |    |',
    '|+ getPortLineLength       |    |',
    '|+ getPortLineFrom         |    |',
    '|+ makePortLine            |    |',
    '|+ isCorss                 |    |',
    '|+ getCrossPointCore       |    |',
    '|+ getCrossPoint           |    |',
    '|+ getEntityLines          |    |',
    '|+ positioningPort         |    |',
    '|+ positioningPorts        |    |',
    '|+ positioningEntity       |    |',
    '|+ positioning             |----+',
    '+--------------------------+',
];

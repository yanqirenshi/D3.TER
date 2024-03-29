const MATERIAL = [
    '                                              +---------+',
    '                                              | Atman   |',
    '                                              |=========|',
    '                                              |- _class |',
    '                                              |- _id    |',
    '                                              |- _core  |',
    '                                              |---------|',
    '                                              |+ id     |',
    '                                              +---------+',
    '                                                   ^',
    '                                                   |',
    '       +--------------------------+----------------+--+---------------+-----------+---------------------+',
    '       |                          |                   |               |           |                     |',
    '       |                     +----------------+  +-----------+  +------------+    |                     |',
    '       |                     | ColumnInstance |  | Attribute |  | Identifier |    |                     |',
    '       |                     |================|  |===========|  |============|    |                     |',
    '       |                     |+ name          |  |+ name     |  |+ name      |    |                     |',
    '       |                     |- _master       |  |-----------|  |------------|    |                     |',
    '       |                     |----------------|  +-----------+  +------------+    |                     |',
    '       |                     +----------------+                                   |                     |',
    '       |                          ^                                               |                     |',
    '       |                          |                                               |                     |',
    '       |                          +----------------------+                        |                     |',
    '       |                          |                      |                        |                     |',
    '+-------------------------+  +-------------------+  +--------------------+  +------------------+  +--------------+',
    '| Entity                  |  | AttributeInstance |  | IdentifierInstance |  | Port             |  | Relationship |',
    '|=========================|  |===================|  |====================|  |==================|  |==============|',
    '|- _default               |  |+ name             |  |+ name              |  |- _id             |  |+ from        |',
    '|                         |  |+ position         |  |+ position          |  |- _owner          |  |+ to          |',
    '|+ name                   |  |+ size             |  |+ size              |  |- _type           |  |--------------|',
    '|+ description            |  |-------------------|  |- _ports            |  |- _core           |  +--------------+',
    '|+ position               |  |+ template         |  |--------------------|  |- _position       |',
    '|+ size                   |  +-------------------+  |+ template          |  |- _entity         |',
    '|+ type                   |                         +--------------------+  |------------------|',
    '|+ background             |                                                 |+ core            |',
    '|---------------------    |                                                 |+ degree          |',
    '|<Builder>                |                                                 |+ position        |',
    '|+ init                   |                                                 |+ owner           |',
    '|+ template               |                                                 |+ entity          |',
    '|- entityTypeContents     |                                                 |                  |',
    '|- entityBackground       |                                                 |+ position_degree |',
    '|- buildIdentifiers       |                                                 |  addPort2Entity  |',
    '|- buildAttributes        |                                                 |                  |',
    '|- build                  |                                                 |<???>             |',
    '|                         |                                                 |  calLinePoints   |',
    '|<Size>                   |                                                 |  calOneLine      |',
    '|- sizingType             |                                                 |  calThreeLine    |',
    '|  sizingName             |                                                 |  calCircle       |',
    '|  sizingIdentifiers      |                                                 +------------------+',
    '|  sizingAttributes       |                                                                     ',
    '|  sizingContentsArea     |                                                                     ',
    '|+ sizing                 |                                                                     ',
    '|+ reSizing               |                                                                     ',
    '|                         |                                                                     ',
    '|<Position>               |',
    '|  positioningType        |',
    '|- positioningName        |',
    '|  positioningColumnItems |',
    '|  positioningIdentifiers |',
    '|  positioningAttributes  |',
    '|  positioningPort        |',
    '|  positioningPorts       |',
    '|  positioningEntity      |',
    '|+ positioning            |',
    '+-------------------------+',
];

export default MATERIAL;

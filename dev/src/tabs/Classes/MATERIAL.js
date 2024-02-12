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
    '|+ position               |  |+ template         |  |--------------------|  |+ position        |',
    '|+ size                   |  +-------------------+  +--------------------+  |- _entity         |',
    '|+ type                   |                                                 |------------------|',
    '|+ background             |                                                 |+ position_degree |',
    '|---------------------    |                                                 +------------------+',
    '|<Builder>                |',
    '|+ init                   |',
    '|+ template               |',
    '|- entityTypeContents     |',
    '|- entityBackground       |',
    '|- buildIdentifiers       |',
    '|- buildAttributes        |',
    '|- build                  |',
    '|                         |',
    '|<Size>                   |',
    '|- sizingType             |',
    '|  sizingName             |',
    '|  sizingIdentifiers      |',
    '|  sizingAttributes       |',
    '|  sizingContentsArea     |',
    '|+ sizing                 |',
    '|+ reSizing               |',
    '|                         |',
    '|<Position>               |',
    '|- positioningName        |',
    '|  positioningType        |',
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

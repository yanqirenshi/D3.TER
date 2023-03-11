const ENTITIES = [
    {
        id: 10,
        type: 'RESOURCE',
        name: 'Identifier',
        description: '??????',
        position: { x:-300, y:-100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 10001 , identifier: 10 }
        ],
        attributes:  [
            { id: 10501, attribute:  7 },
            { id: 10502, attribute:  8 },
        ],
    },
    {
        id: 20,
        type: 'RESOURCE',
        name: 'Entity',
        description: '??????',
        position: { x:-300, y:200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 20001, identifier: 20 }
        ],
        attributes:  [
            { id: 20501, attribute:  1 },
            { id: 20501, attribute:  2 },
            { id: 20501, attribute:  3 },
            { id: 20501, attribute:  4 },
            { id: 20501, attribute:  5 },
            { id: 20501, attribute:  6 },
        ],
    },
    {
        id: 30,
        type: 'RESOURCE',
        name: 'Attribute',
        description: '??????',
        position: { x: -300, y: 600, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30001, identifier: 30 }
        ],
        attributes:  [
            { id: 30501, attribute:  7 },
            { id: 30502, attribute:  8 },
        ],
    },
    {
        id: 100,
        type: 'EVENT',
        name: 'add Identifier',
        description: '??????',
        position: { x: 100, y: 0, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 100000, identifier: 40 },
            { id: 100001, identifier: 20 },
            { id: 100002, identifier: 10 },
        ],
        attributes:  [
            { id: 100501, attribute:  7 },
            { id: 100502, attribute:  8 },
            { id: 100503, attribute:  4 },
            { id: 100504, attribute:  5 },
        ],
    },
    {
        id: 110,
        type: 'EVENT',
        name: 'add Attribute',
        description: '??????',
        position: { x:100, y: 400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 110001, identifier: 50 },
            { id: 110001, identifier: 20 },
            { id: 110002, identifier: 30 },
        ],
        attributes:  [
            { id: 110501, attribute:  7 },
            { id: 110502, attribute:  8 },
            { id: 110503, attribute:  4 },
            { id: 110504, attribute:  5 },
        ],
    },
    {
        id: 120,
        type: 'EVENT',
        name: 'Relationship',
        description: '??????',
        position: { x: 600, y: 0, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 120001, identifier: 60 },
        ],
        attributes:  [
            { id: 120501, attribute:  9 },
            { id: 120502, attribute:  9 },
        ],
    },
    {
        id: 130,
        type: 'EVENT',
        name: 'Relationship DTL',
        description: '??????',
        position: { x: 700, y: 150, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 130000, identifier: 60 },
            { id: 130001, identifier: 40 },
            { id: 130002, identifier: 40 },
        ],
        attributes:  [
        ],
    },
];

export default ENTITIES;

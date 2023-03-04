const EXAMPLES_DATA = {
    identifiers: [
        { id: 10, name: 'id1' },
        { id: 20, name: 'id2' },
    ],
    attributes:  [
        { id: 30, name: 'att1' },
        { id: 40, name: 'att2' },
    ],
    entities:    [
        {
            id: 3,
            type: 'RESOURCE',
            name: 'resource1',
            description: '??????',
            position: { x:-300, y:-100, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [
                { id: 100, identifier: 10 }
            ],
            attributes:  [
                { id: 200, attribute: 30},
                { id: 201, attribute: 40},
            ],
        },
        {
            id: 4,
            type: 'EVENT',
            name: 'event1',
            description: '??????',
            position: { x:100, y:-100, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [
                { id: 101, identifier: 10 },
                { id: 102, identifier: 20 },
                { id: 103, identifier: 20 },
            ],
            attributes:  [
                { id: 300, attribute: 30},
                { id: 301, attribute: 40},
            ],
        },
    ],
    relationships: [
        { id: 1, from: { id: 100, position: 270 }, to: { id: 101, position: 90 } },
    ],
};

export default EXAMPLES_DATA;

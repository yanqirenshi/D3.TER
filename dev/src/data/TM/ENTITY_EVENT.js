import IDENTIFIERS from './IDENTIFIERS.js';
import ATTRIBUTES from './ATTRIBUTES.js';

const ENTITY_EVENT = [
    {
        id: 40000,
        type: 'EVENT',
        name: 'Entity の設定(Identifiers)',
        // credentials
        description: 'Setting Entity Identifier',
        position: { x: 0, y: 300, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40000101, identifier: 10003 },
            { id: 40000102, identifier: 10002 },
            { id: 40000103, identifier: 10000 },
        ],
        attributes:  [
            { id: 40000200, attribute: 20000 },
            { id: 40000201, attribute: 20001 },
            { id: 40000202, attribute: 20002 },
            { id: 40000203, attribute: 20006 },
            { id: 40000204, attribute: 20005 },
        ],
    },
    {
        id: 40001,
        type: 'EVENT',
        name: 'Entity の設定(Attribute)',
        // credentials
        description: 'Setting Entity Attribute',
        position: { x: 500, y: 500, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40001101, identifier: 10004 },
            { id: 40001102, identifier: 10002 },
            { id: 40001103, identifier: 10001 },
        ],
        attributes:  [
            { id: 40001200, attribute: 20000 },
            { id: 40001201, attribute: 20001 },
            { id: 40001202, attribute: 20002 },
            { id: 40001203, attribute: 20006 },
            { id: 40001204, attribute: 20005 },
        ],
    },
    {
        id: 40002,
        type: 'EVENT',
        name: 'Relationship の設定',
        // credentials
        description: 'Setting Relationship',
        position: { x: 1000, y: 300, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40002101, identifier: 10005 },
            { id: 40002102, identifier: 10000 },
            { id: 40002103, identifier: 10000 },
        ],
        attributes:  [
        ],
    },
];

export default ENTITY_EVENT;

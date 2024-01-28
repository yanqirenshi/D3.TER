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
        position: { x: 2000, y: 700, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40002101, identifier: 10005 },
            { id: 40002102, identifier: 10000 },
            { id: 40002103, identifier: 10000 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40003,
        type: 'EVENT',
        name: 'Relationship',
        description: '',
        position: { x: 1500, y: 700, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40003101, identifier: 10005 },
            { id: 40003102, identifier: 10002, name: {logical: 'Entity ID (From)', physical: 'entity_id_from' } },
            { id: 40003103, identifier: 10002, name: {logical: 'Entity ID (To)',   physical: 'entity_id_to' } },
        ],
        attributes:  [
            { id: 40003200, attribute: 20007 },
            { id: 40003201, attribute: 20008 },
            { id: 40003202, attribute: 20009 },
            { id: 40003203, attribute: 20010 },
            { id: 40003204, attribute: 20008 },
            { id: 40003205, attribute: 20009 },
            { id: 40003206, attribute: 20010 },
            { id: 40003206, attribute: 20005 },
        ],
    },
    {
        id: 40004,
        type: 'EVENT',
        name: 'Relattionship (E-R)',
        description: '',
        position: { x: 1600, y: 1100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40004101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40005,
        type: 'EVENT',
        name: 'Relattionship (E-E)',
        description: '',
        position: { x: 2000, y: 1100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40005101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40006,
        type: 'EVENT',
        name: 'Relattionship (R-R)',
        description: '',
        position: { x: 2400, y: 1100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40006101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40007,
        type: 'EVENT',
        name: 'Relattionship (再帰)',
        description: '',
        position: { x: 2800, y: 1100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40007101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40008,
        type: 'EVENT',
        name: 'Relattionship (Subset)',
        description: '',
        position: { x: 1600, y: 1200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40008101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40009,
        type: 'EVENT',
        name: 'Relattionship (MO)',
        description: '',
        position: { x: 2000, y: 1200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40009101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 40010,
        type: 'EVENT',
        name: 'Relattionship (HDR-DTL)',
        description: '',
        position: { x: 2400, y: 1200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 40010101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
];

export default ENTITY_EVENT;

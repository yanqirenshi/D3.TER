import IDENTIFIERS from './IDENTIFIERS.js';
import ATTRIBUTES from './ATTRIBUTES.js';

const ENTITY_EVENT = [
    {
        id: 30000,
        type: 'RESOURCE',
        name: 'Identifier',
        description: '',
        position: { x: 0, y: 0, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30000101, identifier: 10000 },
        ],
        attributes:  [
            { id: 30000201, attribute: 20000 },
            { id: 30000202, attribute: 20001 },
            { id: 30000203, attribute: 20002 },
            { id: 30000204, attribute: 20003 },
            { id: 30000205, attribute: 20004 },
            { id: 30000206, attribute: 20005 },
        ],
    },
    {
        id: 30001,
        type: 'RESOURCE',
        name: 'Attribute',
        description: 'User',
        position: { x: 500, y: 0, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30001101, identifier: 10001 },
        ],
        attributes:  [
            { id: 30001201, attribute: 20000 },
            { id: 30001202, attribute: 20001 },
            { id: 30001203, attribute: 20002 },
            { id: 30001204, attribute: 20003 },
            { id: 30001205, attribute: 20004 },
            { id: 30001206, attribute: 20005 },
        ],
    },
    {
        id: 30002,
        type: 'RESOURCE',
        name: 'Entity',
        description: 'User',
        position: { x: 250, y: 800, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30002101, identifier: 10002 },
        ],
        attributes:  [
            { id: 30002201, attribute: 20000 },
            { id: 30002202, attribute: 20001 },
            { id: 30002203, attribute: 20002 },
            { id: 30002204, attribute: 20005 },
        ],
    },
    {
        id: 30003,
        type: 'RESOURCE',
        name: 'Relationship',
        description: 'User',
        position: { x: 1500, y: 0, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30003101, identifier: 10005 },
        ],
        attributes:  [
            { id: 30003200, attribute: 20007 },
            { id: 30003201, attribute: 20008 },
            { id: 30003202, attribute: 20009 },
            { id: 30003203, attribute: 20010 },
            { id: 30003204, attribute: 20008 },
            { id: 30003205, attribute: 20009 },
            { id: 30003206, attribute: 20010 },
            { id: 30003206, attribute: 20005 },
        ],
    },

    {
        id: 30004,
        type: 'RESOURCE',
        name: 'Resource',
        description: '',
        position: { x: 0, y: 1100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30004101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30005,
        type: 'RESOURCE',
        name: 'Resource (Root)',
        description: '',
        position: { x: 100, y: 1200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30004101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30006,
        type: 'RESOURCE',
        name: 'Resource (Subset)',
        description: '',
        position: { x: 100, y: 1300, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30004101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30007,
        type: 'RESOURCE',
        name: 'Event',
        description: '',
        position: { x: 500, y: 1100, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30007101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },

    {
        id: 30008,
        type: 'RESOURCE',
        name: 'Event (Root)',
        description: '',
        position: { x: 600, y: 1200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30008101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30009,
        type: 'RESOURCE',
        name: 'Event (Subset)',
        description: '',
        position: { x: 900, y: 1200, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30009101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30010,
        type: 'RESOURCE',
        name: 'Event (再帰)',
        description: '',
        position: { x: 600, y: 1300, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30010101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30011,
        type: 'RESOURCE',
        name: 'Event (対照表)',
        description: '',
        position: { x: 900, y: 1300, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30011101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30012,
        type: 'RESOURCE',
        name: 'Event (対応表)',
        description: '',
        position: { x: 1200, y: 1300, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30012101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30013,
        type: 'RESOURCE',
        name: 'Event (HDR)',
        description: '',
        position: { x: 600, y: 1400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30013101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30014,
        type: 'RESOURCE',
        name: 'Event (HDR)',
        description: '',
        position: { x: 900, y: 1400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30014101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30015,
        type: 'RESOURCE',
        name: 'Event (MO)',
        description: '',
        position: { x: 600, y: 1500, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30015101, identifier: 10002 },
        ],
        attributes:  [
        ],
    },



    {
        id: 30016,
        type: 'RESOURCE',
        name: 'Relattionship (E-R)',
        description: '',
        position: { x: 1600, y: 400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30016101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30017,
        type: 'RESOURCE',
        name: 'Relattionship (E-E)',
        description: '',
        position: { x: 2000, y: 400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30017101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30018,
        type: 'RESOURCE',
        name: 'Relattionship (R-R)',
        description: '',
        position: { x: 2400, y: 400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30018101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30019,
        type: 'RESOURCE',
        name: 'Relattionship (再帰)',
        description: '',
        position: { x: 2800, y: 400, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30019101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },


    {
        id: 30020,
        type: 'RESOURCE',
        name: 'Relattionship (Subset)',
        description: '',
        position: { x: 1600, y: 500, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30020101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30021,
        type: 'RESOURCE',
        name: 'Relattionship (MO)',
        description: '',
        position: { x: 2000, y: 500, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30021101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },
    {
        id: 30022,
        type: 'RESOURCE',
        name: 'Relattionship (HDR-DTL)',
        description: '',
        position: { x: 2400, y: 500, z:0 },
        size: { w: 0, h: 0 },
        identifiers: [
            { id: 30022101, identifier: 10005 },
        ],
        attributes:  [
        ],
    },

];

export default ENTITY_EVENT;

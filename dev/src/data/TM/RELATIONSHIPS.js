let id = 1;

const RELATIONSHIPS = [
    {
        id: id++,
        type: null,
        from: {
            entity: 30000,
            cardinality: 1,
            optionality: 2,
            position: 0,
        },
        to: {
            entity: 40000,
            cardinality: 3,
            optionality: 4,
            position: 180,
        },
        details: [
            {
                from: { id: 30000101, description: '' },
                to:   { id: 40000103, description: '' },
            }
        ],
        description: 'identifier - entity_identifier',
    },
    {
        id: id++,
        type: null,
        from: {
            entity: 30002,
            cardinality: 1,
            optionality: 2,
            position: 180,
        },
        to: {
            entity: 40000,
            cardinality: 3,
            optionality: 4,
            position: 0,
        },
        details: [
            {
                from: { id: 30002101, description: '' },
                to:   { id: 40000102, description: '' },
            }
        ],
        description: 'entity - entity_identifier',
    },
    {
        id: id++,
        type: null,
        from: {
            entity: 30001,
            cardinality: 1,
            optionality: 2,
            position: 0,
        },
        to: {
            entity: 40001,
            cardinality: 3,
            optionality: 4,
            position: 180,
        },
        details: [
            {
                from: { id: 30001101, description: '' },
                to:   { id: 40001103, description: '' },
            }
        ],
        description: 'attribute - entity_attribute',
    },
    {
        id: id++,
        type: null,
        from: {
            entity: 30002,
            cardinality: 1,
            optionality: 2,
            position: 180,
        },
        to: {
            entity: 40001,
            cardinality: 3,
            optionality: 4,
            position: 0,
        },
        details: [
            {
                from: { id: 30002101, description: '' },
                to:   { id: 40001102, description: '' },
            }
        ],
        description: 'entity - entity_attribute',
    },
    {
        id: id++,
        type: null,
        from: {
            entity: 40000,
            cardinality: 1,
            optionality: 2,
            position: 270,
        },
        to: {
            entity: 40002,
            cardinality: 3,
            optionality: 4,
            position: 90,
        },
        details: [
            {
                from: { id: 40000101, description: '' },
                to:   { id: 40002102, description: '' },
            },
            {
                from: { id: 40000101, description: '' },
                to:   { id: 40002103, description: '' },
            }
        ],
        description: 'identifier - setting relationship',
    },
    {
        id: id++,
        type: null,
        from: {
            entity: 30002,
            cardinality: 1,
            optionality: 2,
            position: 270,
        },
        to: {
            entity: 40003,
            cardinality: 3,
            optionality: 4,
            position: 90,
        },
        details: [
            {
                from: { id: 30002101, description: '' },
                to:   { id: 40003102, description: '' },
            }
        ],
        description: 'entity - relationship',
    },
    {
        id: id++,
        type: null,
        from: {
            entity: 40003,
            cardinality: 1,
            optionality: 2,
            position: 270,
        },
        to: {
            entity: 40002,
            cardinality: 3,
            optionality: 4,
            position: 90,
        },
        details: [
            {
                from: { id: 40003101, description: '' },
                to:   { id: 40002101, description: '' },
            }
        ],
        description: 'relationship - setting relationship',
    },
];

export default RELATIONSHIPS;

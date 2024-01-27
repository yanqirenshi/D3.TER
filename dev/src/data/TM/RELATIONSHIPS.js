let id = 1;

const RELATIONSHIPS = [
    {   // identifier - entity_identifier
        id: id++,
        from: { id: 30000101, position:   0 },
        to:   { id: 40000103, position: 180 },
    },
    {   // entity - entity_identifier
        id: id++,
        from: { id: 30002101, position: 180 },
        to:   { id: 40000102, position:   0 },
    },

    {   // attribute - entity_attribute
        id: id++,
        from: { id: 30001101, position:   0 },
        to:   { id: 40001103, position: 180 },
    },
    {   // entity - entity_attribute
        id: id++,
        from: { id: 30002101, position: 180 },
        to:   { id: 40001102, position:   0 },
    },
    {   // relationship - setting relationship
        id: id++,
        from: { id: 30003101, position: 180 },
        to:   { id: 40002101, position:   0 },
    },
    {   // identifier - setting relationship
        id: id++,
        from: { id: 40000101, position: 270 },
        to:   { id: 40002102, position:  90 },
    },
    {   // identifier - setting relationship
        id: id++,
        from: { id: 40000101, position: 270 },
        to:   { id: 40002103, position:  90 },
    },
];

export default RELATIONSHIPS;

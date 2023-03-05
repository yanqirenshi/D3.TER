const position = { x: 0, y: 0, z: 0 };
const size = { w: 0, h: 0 };
const pool = { list: [], ht: {} };

export const type = {
    contents: '??',
    padding: 11,
    position: position,
    size: size,
};

export const bar = [
    {
        size: {
            header: 11,
            contents: 8,
        }
    }
];

export const name = {
    padding: 11,
    contents: '',
    position: position,
    size: size,
};

export const identifiers = {
    padding: 8,
    position: position,
    size: size,
    items: pool,
};

export const attributes = {
    padding: 8,
    position: position,
    size: size,
    items: pool,
};

export const ports = {
    items: pool,
};

export const entity = {
    _id : null,
    _class: 'ENTITY',
    padding: 11,
    margin: 6,
    description: { contents: '' },
    position: position,
    size: size,
    bar: bar,
    background: {
        color: '',
    },
    name: name,
    type: type,
    identifiers: identifiers,
    attributes: attributes,
    ports: ports,
};

export const identifier = {
    id: 1,
    name: {
        physical: null,
        logical: null,
        padding: 8,
        position: position,
        size: size,
    },
};

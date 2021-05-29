const entity = {
    name: 'Entity',
    attributes: [
        { visibility: '-', name: 'attribute_instance',  type: { name: 'Object' }, default: '???', description: '' },
        { visibility: '-', name: 'identifier_instance', type: { name: 'Object' }, default: '???', description: '' },
        { visibility: '-', name: '_default',            type: { name: 'Object' }, default: '???', description: '' },
    ],
    methods: [
        {
            name: 'constructor',
            return: 'this',
            visibility: '+',
            description: '???',
        },
        {
            type: 'group',
            title: 'utilities',
            list: [
                {
                    name: 'list2pool',
                    arguments: [
                        { name: 'list', default: '', description: '' },
                        { name: 'f', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'getIdentifier',
                    arguments: [
                        { name: 'id', default: '', description: '' },
                        { name: 'entities', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
            ],
        },
        {
            type: 'group',
            title: 'Move',
            list: [
                {
                    name: 'dragStart',
                    arguments: [
                        { name: 'd', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'dragged',
                    arguments: [
                        { name: 'd', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'dragEnd',
                    arguments: [
                        { name: 'entity', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'addMoveEvents2Body',
                    arguments: [
                        { name: 'body', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
            ],
        },
        {
            type: 'group',
            title: 'draw',
            list: [
                {
                    name: 'drawGroup',
                    arguments: [
                        { name: 'place', default: '', description: '' },
                        { name: 'data', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawBodyCore',
                    arguments: [
                        { name: 'body', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawBody',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawNameRect',
                    arguments: [
                        { name: 'rects', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawNameText',
                    arguments: [
                        { name: 'texts', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawName',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                        { name: 'callbacks', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawTypeRect',
                    arguments: [
                        { name: 'selection', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawTypeText',
                    arguments: [
                        { name: 'selection', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawType',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawIdentifiersRect',
                    arguments: [
                        { name: 'rects', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawIdentifiersText',
                    arguments: [
                        { name: 'texts', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawIdentifiers',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawAttributesRect',
                    arguments: [
                        { name: 'rects', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawAttributesText',
                    arguments: [
                        { name: 'texts', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawAttributes',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawPortsCore',
                    arguments: [
                        { name: 'ports', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'drawPorts',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'redraw',
                    arguments: [
                        { name: 'groups', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '+',
                    description: '???',
                },
                {
                    name: 'draw',
                    arguments: [
                        { name: 'place', default: '', description: '' },
                        { name: 'entities', default: '', description: '' },
                    ],
                    return: '???',
                    visibility: '+',
                    description: '???',
                },
            ],
        },
    ],
};

export default entity;

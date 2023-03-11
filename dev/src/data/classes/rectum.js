const attributes = [
    {
        visibility: '-',
        name: 'callbacks',
        type: { name: 'Object' },
        default: '???',
        description: ['']
    },
    {
        visibility: '-',
        name: '_identifiers',
        type: { name: 'Pool (Identifier)' },
        default: '???',
        description: ['']
    },
    {
        visibility: '-',
        name: '_attributes',
        type: { name: 'Pool (Attribute)' },
        default: '???',
        description: ['']
    },
    {
        visibility: '-',
        name: '_entities',
        type: { name: 'Pool (Entity)' },
        default: '???',
        description: ['']
    },
    {
        visibility: '-',
        name: '_relationships',
        type: { name: 'Pool (Relationship)' },
        default: '???',
        description: ['']
    },
    {
        visibility: '-',
        name: '_default',
        type: { name: 'Object' },
        default: '???',
        description: ['']
    },
];

const rectum = {
    name: 'Rectum',
    attributes: attributes,
    methods: [
        {
            name: 'constructor',
            return: 'this',
            visibility: '+',
            description: [''],
        },
        {
            type: 'group',
            title: 'utilities',
            list: [
                {
                    name: 'ensureCallbacks',
                    arguments: [
                        { name: 'callbacks', default: '', description: '' },
                    ],
                    return: 'Object (callbacks)',
                    visibility: '-',
                    description: [''],
                },
                {
                    name: 'buildRelationshipsWithPort',
                    arguments: [
                        { name: 'relationships', default: '', description: '' },
                    ],
                    return: 'Pool',
                    visibility: '-',
                    description: [''],
                },
                {
                    name: 'getIdentifier',
                    arguments: [
                        { name: 'id', default: '', description: '' },
                        { name: 'entities', default: '', description: '' },
                    ],
                    return: 'Identifier',
                    visibility: '-',
                    description: [''],
                },
                {
                    name: 'entities',
                    arguments: [],
                    return: 'Pool',
                    visibility: '+',
                    description: ['Entity の一覧を返す'],
                },
                {
                    name: 'bounds',
                    arguments: [
                        { name: 'bounds', default: '', description: '' },
                    ],
                    return: 'Object (bounds)',
                    visibility: '+',
                    description: ['SVG の bounds を返す。指定された引数を返す。'],
                },
                {
                    name: 'data',
                    arguments: [
                        { name: 'data', default: '', description: '' },
                    ],
                    return: 'Undefined',
                    visibility: '+',
                    description: [''],
                },
                {
                    name: 'draw',
                    arguments: [
                    ],
                    return: 'Undefined',
                    visibility: '+',
                    description: [''],
                },
            ],
        },
    ],
};

export default rectum;

const builder = {
    name: 'Builder',
    attributes: [],
    methods: [
        {
            name: 'template',
            visibility: '-'
        },
        {
            name: 'entityTypeContents',
            arguments: [
                { name: 'core', type: { name: '???' }, default: null, description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'entityBackground',
            arguments: [
                { name: 'core', type: { name: '???' }, default: null, description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'buildIdentifiers',
            arguments: [
                { name: 'core', type: { name: '???' }, default: null, description: '' },
                { name: 'state', type: { name: '???' }, default: null, description: '' },
                { name: 'entity_element', type: { name: '???' }, default: null, description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'buildIdentifiers',
            arguments: [
                { name: 'core', type: { name: '???' }, default: null, description: '' },
                { name: 'state', type: { name: '???' }, default: null, description: '' },
                { name: 'entity_element', type: { name: '???' }, default: null, description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'buildAttributes',
            arguments: [
                { name: 'core', type: { name: '???' }, default: null, description: '' },
                { name: 'state', type: { name: '???' }, default: null, description: '' },
                { name: 'entity_element', type: { name: '???' }, default: null, description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'build',
            arguments: [
                { name: 'core', type: { name: '???' }, default: null, description: '' },
                { name: 'state', type: { name: '???' }, default: null, description: '' },
            ],
            visibility: '+'
        },
    ],
};

export default builder;

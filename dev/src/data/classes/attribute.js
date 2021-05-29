const attribute = {
    name: 'Identifier',
    attributes: [],
    methods: [
        {
            name: 'list2pool',
            arguments: [
                { name: 'list', default: '', description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'template',
            visibility: '-'
        },
        {
            name: 'build',
            arguments: [
                { name: 'core', default: '', description: '' },
            ],
            visibility: '+'
        },
    ],
};

export default attribute;

const relationship = {
    name: 'Relationship',
    attributes: [],
    methods: [
        {
            name: 'constructor',
            visibility: '+'
        },
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
                { name: 'port_from', default: '', description: '' },
                { name: 'port_to', default: '', description: '' },
            ],
            visibility: '+'
        },
        {
            name: 'drawCore',
            arguments: [
                { name: 'edges', default: '', description: '' },
            ],
            visibility: '-'
        },
        {
            name: 'draw',
            arguments: [
                { name: 'place', default: '', description: '' },
                { name: 'relationships', default: '', description: '' },
            ],
            visibility: '+'
        },
    ],
};

export default relationship;

const column_instance = {
    name: 'ColumnInstance',
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
                { name: 'master', default: '', description: '' },
            ],
            visibility: '+'
        },
    ],
};

export default column_instance;

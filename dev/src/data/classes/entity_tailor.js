const entity_tailor = {
    name: 'EntityTailor',
    attributes: [
        // { visibility: '-', name: '_d3svg', type: { name: '???' }, default: 'NULL', description: '' },
        // { visibility: '-', name: '_drag',  type: { name: '???' }, default: 'NULL', description: '' },
        // { visibility: '-', name: '_look',  type: { name: '???' }, default: 'this.templateLook()', description: '' },
    ],
    methods: [
        {
            type: 'group',
            title: 'size',
            list: [
                {
                    name: 'sizingType',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizingName',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizingIdentifiers',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizingAttributes',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizingContentsArea',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizingEntity',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizingEntities',
                    visibility: '-',
                    arguments: [
                        { name: 'entities', type: { name: 'List' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'sizing',
                    visibility: '+',
                    arguments: [
                        { name: 'entities', type: { name: 'List' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'reSizingEntity',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'reSizing',
                    visibility: '+',
                    arguments: [
                        { name: 'groups', type: { name: '???' }, default: null, description: '' },
                        { name: 'entities', type: { name: 'List' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
            ],
        },
        {
            type: 'group',
            title: 'Position',
            list: [
                {
                    name: 'positioningName',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningType',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningColumnItems',
                    visibility: '-',
                    arguments: [
                        { name: 'd', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningIdentifiers',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningAttributes',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'deg2rad',
                    visibility: '-',
                    arguments: [
                        { name: 'degree', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'getPortLineLength',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'getPortLineFrom',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'makePortLine',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                        { name: 'port', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'isCorss',
                    visibility: '-',
                    arguments: [
                        { name: 'A', type: { name: '???' }, default: null, description: '' },
                        { name: 'B', type: { name: '???' }, default: null, description: '' },
                        { name: 'C', type: { name: '???' }, default: null, description: '' },
                        { name: 'D', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'getCrossPointCore',
                    visibility: '-',
                    arguments: [
                        { name: 'line', type: { name: '???' }, default: null, description: '' },
                        { name: 'line_port', type: { name: '???' }, default: null, description: '' },
                        { name: 'port', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'getCrossPoint',
                    visibility: '-',
                    arguments: [
                        { name: 'line', type: { name: '???' }, default: null, description: '' },
                        { name: 'line_port', type: { name: '???' }, default: null, description: '' },
                        { name: 'port', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'getEntityLines',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningPort',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                        { name: 'port', type: { name: '???' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningPorts',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                        { name: 'entities', type: { name: 'List' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioningEntity',
                    visibility: '-',
                    arguments: [
                        { name: 'entity', type: { name: 'Object' }, default: null, description: '' },
                        { name: 'entities', type: { name: 'List' }, default: null, description: '' },
                    ],
                    return: '???',
                    description: '',
                },
                {
                    name: 'positioning',
                    visibility: '+',
                    arguments: [],
                    return: '???',
                    description: '',
                },
            ],
        },
    ],
};

export default entity_tailor;

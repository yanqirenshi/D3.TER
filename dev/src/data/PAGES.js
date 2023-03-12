const PAGES = [
    {
        style: {
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(30, 80, 162, 1.0)',
            borderRadius: '8px',
            marginBottom: 11,
            padding: 11,
            flexGrow: 1,
        },
        items: [
            { code: 'home',     label: 'Home',     action: { type: 'PAGE', path: '/' } },
        ],
    },
    {
        style: {
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(30, 80, 162, 1.0)',
            borderRadius: '8px',
            marginBottom: 11,
            padding: 11,
        },
        items: [
            { code: 'network', label: '網図', action: { type: 'PAGE', path: '/dev.network' } },
            { code: 'tm',      label: 'T字',  action: { type: 'PAGE', path: '/dev.tm' } },
            { code: 'deploy',  label: '構成', action: { type: 'PAGE', path: '/dev.deploy' } },
            { code: 'bklg',    label: 'bkLg', action: { type: 'PAGE', path: '/backlogs' } },
            { code: 'wbs',     label: 'WBS',  action: { type: 'PAGE', path: '/wbs' } },
        ],
    },
];

export default PAGES;

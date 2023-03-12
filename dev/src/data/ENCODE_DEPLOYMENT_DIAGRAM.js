import EDGE_DATA from './encode/EDGE_DATA.js';
import NODES_DATA, {INDEX_NODES} from './encode/NODES_DATA.js';

const STRUCTURE = [
    {
        id: 1,
        ch: [
            {
                id: 5,
                p: { x:100, y:100 },
                ch: [
                    { id: 7, p: { x:100, y:100 } },
                ],
            },
            {
                id: 9,
                ch: [
                    {
                        id: 10,
                        p: { x:100, y:100 },
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        ch: [
            {
                id: 6,
                p: { x:100, y:100 },
                ch: [
                    { id: 11, p: { x:100, y:100 } },
                    { id:  8, p: { x:100, y:300 } },
                    { id: 13, p: { x:100, y:500 } },
                ],
            },
        ],
    },
    {
        id: 3,
        ch: [
            { id: 14, p: { x:100, y:100 } },
            { id: 18, p: { x:100, y:300 } },
        ],
    },
    {
        id: 4,
        ch: [
            {
                id: 12,
                p: { x:100, y:100 },
                ch: [
                    { id: 15, p: { x:100, y:100 } },
                    { id: 16, p: { x:100, y:300 } },
                    { id: 17, p: { x:100, y:500 } },
                ],
            },
        ],
    },
];

function compose (list) {
    return list.reduce((nodes, d)=> {
        const node = INDEX_NODES[d.id];

        if (d.ch)
            node.children = compose(d.ch);

        if (d.p)
            node.position = d.p;

        nodes.push(node);

        return nodes;
    }, []);
};

const NODE_STRUCTURE = compose(STRUCTURE);

const DEV_DEPLOYMENT_DIAGRAM = {
    nodes: NODE_STRUCTURE,
    edges: EDGE_DATA,
};

export default DEV_DEPLOYMENT_DIAGRAM;

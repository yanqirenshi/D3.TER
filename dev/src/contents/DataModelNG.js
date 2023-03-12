import React from 'react';

import D3Network, { Rectum } from '@yanqirenshi/d3.network';

import ExampleData from './DataModelNG/data/ExampleData.js';

const exdata = new ExampleData();

export default function DataModelNG () {
    const [rectum, setRectum] = React.useState(null);
    const [graph_data, setGraphData] = React.useState({
        nodes: exdata.makeData('nodes'),
        edges: exdata.makeData('edges'),
    });
    const [is_need_make_rectum, setIsNeedMakeRectum] = React.useState(false);

    React.useEffect(()=> {
        if (rectum!==null) return;
        setIsNeedMakeRectum(true);

    }, [rectum]);

    React.useEffect(()=> {
        if (rectum)
            rectum.data(graph_data);
    }, [rectum, graph_data]);

    if (is_need_make_rectum) {
        setIsNeedMakeRectum(false);

        setRectum(new Rectum({
            transform: { k: 0.7, x: 400.0, y: 400.0 },
            edge: { width: 6, color: '#333333' },
            callbacks: {
                node: {
                    click: (node)=> {
                        node.select = !node.select;
                        setGraphData({...graph_data});
                    }
                }
            }
        }));
    }

    if (!rectum) return null;

    return (
        <div style={{height: '100%',width: '100%'}}>
            <D3Network rectum={rectum} />
        </div>
    );
}

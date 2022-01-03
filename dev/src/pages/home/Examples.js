import React, { useState, useEffect } from 'react';

import Rectum from '../../libs/js/Rectum.js';
import D3Ter from '../../libs/components/D3Ter.js';

const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    graph_area: {
        width:  800 + (22*2),
        height: 600 + (22*2),
        background: '#eee',
        padding: 22,
        borderRadius: 5,
    },
};

export default function Examples() {
    const [rectum, setRectum] = useState(null);
    const [graph_data, setGraphData] = useState(sample);

    useEffect(()=> {
        if (rectum!==null) return;

        setRectum(new Rectum({
            transform: { k: 0.7, x: 400.0, y: 400.0 },
            edge: { width: 6, color: '#333333' },
            callbacks: {
                node: {
                    click: (node)=> {
                        console.log(node);
                    }
                }
            }
        }));
    }, [rectum]);

    useEffect(()=> {
        if (rectum)
            rectum.data(graph_data);
    }, [rectum, graph_data]);

    return (
        <div style={style}>
          <div style={style.graph_area}>
            <D3Ter rectum={rectum} />
          </div>
        </div>
    );
}

const sample = {
    identifiers: [
        { id: 10, name: 'id1' },
        { id: 20, name: 'id2' },
    ],
    attributes:  [
        { id: 30, name: 'att1' },
        { id: 40, name: 'att2' },
    ],
    entities:    [
        {
            id: 3,
            type: 'RESOURCE',
            name: 'resource1',
            description: '??????',
            position: { x:-300, y:-100, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [
                { id: 100, identifier: 10 }
            ],
            attributes:  [
                { id: 200, attribute: 30},
                { id: 201, attribute: 40},
            ],
        },
        {
            id: 4,
            type: 'EVENT',
            name: 'event1',
            description: '??????',
            position: { x:100, y:-100, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [
                { id: 101, identifier: 10 },
                { id: 102, identifier: 20 },
                { id: 103, identifier: 20 },
            ],
            attributes:  [
                { id: 300, attribute: 30},
                { id: 301, attribute: 40},
            ],
        },
    ],
    relationships: [
        { from: { id: 100, position: 270 }, to: { id: 101, position: 90 } },
    ],
};

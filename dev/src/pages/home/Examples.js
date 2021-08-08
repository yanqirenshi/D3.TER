import React, { useState, useEffect } from 'react';

import D3Ter from '../../libs/js/D3Ter.js';
import Ben9i from '../../libs/components/Ben9i.js';

const style = {
    root: {
        width:'100%',
        height: '100%',
    }
};

const svgid = 'xyz1234';

const sample = {
    identifiers: [
        { id: 1, name: 'id1' },
    ],
    attributes:  [
        { id: 2, name: 'att41' },
    ],
    entities:    [
        {
            id: 3,
            type: 'RESOURCE',
            name: 'resource1',
            description: '??????',
            position: { x:-300, y:-100, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [{ id: 100, identifier: 1, position: 270 }],
            attributes:  [{ id: 200, attribute:  2}],
        },
        {
            id: 4,
            type: 'EVENT',
            name: 'event1',
            description: '??????',
            position: { x:100, y:-100, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [{ id: 101, identifier: 1, position: 90 }],
            attributes:  [{ id: 201, attribute:  2}],
        },
    ],
    relationships: [
        { from: { id: 100 }, to: { id: 101 } },
    ],
};

export default function Examples() {
    const [ass] = useState(new D3Ter({
        selector: '#' + svgid,
        camera: null,
    }));

    useEffect(() => {
        ass.focus();
        ass.data(sample);
    }, [ass]);

    return (
        <div style={style.root}>
          <Ben9i svgid={svgid} asshole={ass}/>
        </div>
    );
}

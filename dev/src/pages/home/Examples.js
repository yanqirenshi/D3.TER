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
        { id: 1, name: '???' },
    ],
    attributes:  [
        { id: 2, name: '???' },
    ],
    entities:    [
        {
            id: 3,
            type: 'RESOURCE',
            name: '???',
            description: '??????',
            position: { x:0, y:0, z:0 },
            size: { w: 0, h: 0 },
            identifiers: [{identifier: 1}],
            attributes:  [{attribute:  2}],
        },
    ],
    relationships: [
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

        console.log(ass);
    }, [ass]);

    return (
        <div style={style.root}>
          <Ben9i svgid={svgid} asshole={ass}/>
        </div>
    );
}

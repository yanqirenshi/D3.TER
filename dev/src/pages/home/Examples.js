import React, { useState, useEffect } from 'react';

import Ass from '../../libs/js/Ass.js';
import Ben9i from '../../libs/components/Ben9i.js';

const style = {
    root: {
        width:'100%',
        height: '100%',
    }
};

const svgid = 'xyz1234';

export default function Examples() {
    const [ass] = useState(new Ass({
        selector: '#' + svgid,
        camera: null,
    }));

    useEffect(() => console.log(ass), []);

    return (
        <div style={style.root}>
          <Ben9i svgid={svgid} asshole={ass}/>
        </div>
    );
}

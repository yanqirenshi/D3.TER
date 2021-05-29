import React, { useState, useEffect } from 'react';

import Ben9i from './Ben9i.js';

import Core from '../js/Core.js';

const svgid = `D3Ter-${Math.floor(Math.random() * Math.floor(88888888))}`;

export default function D3TER (props) {
    const [ass] = useState(new Core({
        selector: '#' + svgid,
        camera: props.camera,
    }));

    return <Ben9i svgid={svgid} asshole={ass} />;
}

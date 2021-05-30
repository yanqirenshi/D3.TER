import React from 'react';

import Base from './Base.js';
import Target from '../../../libs/js/Port.js';

export default function Port (props) {
    // const column_width = 100;
    // const gutter = 10;

    return (
        <Base json={new Target().template()} />
    );
}

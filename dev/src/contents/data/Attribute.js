import React from 'react';

import Base from './Base.js';
import Target from '../../libs/js/Attribute.js';

export default function Attribute (props) {
    return (
        <Base json={new Target().template()} />
    );
}

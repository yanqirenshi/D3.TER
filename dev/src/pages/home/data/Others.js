import React from 'react';

import Base from './Base.js';
import Target from '../../../libs/js/Identifier.js';

export default function Others (props) {
    return (
        <Base json={new Target().template()} />
    );
}

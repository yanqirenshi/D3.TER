import React from 'react';

import Base from './Base.js';
import Target from '../../libs/js/IdentifierInstance.js';

export default function IdentifierInstance (props) {
    return (
        <Base json={new Target().template()} />
    );
}

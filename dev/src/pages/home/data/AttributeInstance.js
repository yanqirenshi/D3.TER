import React from 'react';

import Base from './Base.js';
import Target from '../../../libs/js/AttributeInstance.js';

export default function AttributeInstance (props) {
    return (
        <Base json={new Target().template()} />
    );
}

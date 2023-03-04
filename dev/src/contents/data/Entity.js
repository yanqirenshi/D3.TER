import React from 'react';

import Base from './Base.js';
import Target from '../../libs/js/Entity.js';

export default function Entity (props) {
    return (
        <Base json={new Target().template()} />
    );
}

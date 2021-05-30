import React from 'react';

import Base from './Base.js';
import Target from '../../../libs/js/Relationship.js';

export default function Relationship (props) {
    return (
        <Base json={new Target().template()} />
    );
}

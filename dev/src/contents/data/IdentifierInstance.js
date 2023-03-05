import React from 'react';

import Base from './Base.js';

export default function IdentifierInstance (props) {
    return (
        <Base json={template}>
        </Base>
    );
}

const template ={
    _id: null,
    _class: 'IDENTIFIER-INSTANCE',
    name: { physical: '??', logical: '' },
    position: { x: 0, y:0 },
    size: { w:0, h:0 },
    _master: null,
    _core: null,
    _ports: [],
};

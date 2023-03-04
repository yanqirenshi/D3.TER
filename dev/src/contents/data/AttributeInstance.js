import React from 'react';

import Base from './Base.js';

export default function AttributeInstance (props) {
    return (
        <Base json={template} />
    );
}

const template ={
    _id: null,
    _class: 'ATTRIBUTE-INSTANCE',
    name: { physical: '??', logical: '' },
    position: { x: 0, y:0 },
    size: { w:0, h:0 },
    _master: null,
    _core: null,
};

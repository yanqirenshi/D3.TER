import React from 'react';

import Base from './Base.js';

export default function Entity (props) {
    const template = {
            _id : null,
            _class: 'ENTITY',
            padding: 11,
            margin: 6,
            description: { contents: '' },
            position: { x:0, y:0, z:0 },
            size: { w:0, h:0 },
            bar: {
                size: {
                    header: 11,
                    contents: 8,
                }
            },
            background: {
                color: '',
            },
            name: {
                padding: 11,
                contents: '',
                position: { x:0, y:0, z:0 },
                size: { h: null, w: null },
            },
            type: {
                contents: '??',
                padding: 11,
                position: { x:0, y:0, z:0 },
                size: { w:0, h:0 },
            },
            identifiers: {
                padding: 8,
                position: { x:0, y:0, z:0 },
                size: { w: null, h: null },
                items: { list: [], ht: {} },
            },
            attributes: {
                padding: 8,
                position: { x:0, y:0, z:0 },
                size: { w: null, h: null },
                items: { list: [], ht: {} },
            },
            ports: {
                items: { list: [], ht: {} },
            }
    };

    return (
        <Base json={template} />
    );
}

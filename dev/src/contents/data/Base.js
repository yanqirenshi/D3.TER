import React from 'react';

import {JsonWithDescriptions} from '../../components/Common.js';

const style = {
    root: {
        display:'flex',
        justifyContent: 'center',
    },
    left: {
    },
    right: {
        flexGrow: 1,
    },
};

export default function Base (props) {
    const json = props.json;
    const children = props.children;

    return (
        <div style={style.root}>
          <JsonWithDescriptions json={json}>
            {children}
          </JsonWithDescriptions>
        </div>
    );
}

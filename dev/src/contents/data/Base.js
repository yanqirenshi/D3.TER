import React from 'react';

import {JsonWithDescriptions} from '../../components/Common.js';

const style = {
    root: {
        display:'flex'
    },
    left: {
        paddingLeft: 88,
        paddingRight: 88,
    },
    right: {
        flexGrow: 1,
    },
};

export default function Base (props) {
    // const column_width = 100;
    // const gutter = 10;

    return (
        <div style={style.root}>
          <div style={style.left}>
            <JsonWithDescriptions json={props.json}/>
          </div>

          <div style={style.right}>
          </div>
        </div>
    );
}

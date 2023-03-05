import React from 'react';

import JsonViewr from './JsonViewr.js';

const style = {
    display:'flex',
    justifyContent: 'center',
    contents: {
        width: 888,
        display: 'flex',
        left: {
        },
        right: {
            flexGrow: 1,
            padding: '0px 22px 22px 22px'
        },
    },
};

export default function JsonWithDescriptions (props) {
    const children = props.children;

    return (
        <div style={style}>
          <div style={style.contents}>
            <div style={style.contents.left}>
              <JsonViewr json={props.json}/>
            </div>

            <div style={style.contents.right}>
              {children}
            </div>
          </div>
        </div>
    );
}

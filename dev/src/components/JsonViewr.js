import React from 'react';

import ReactJson from 'react-json-view';

export default function JsonViewr (props) {
    return (
        <div style={{padding:22, background: '#000', borderRadius:5}}>
          <ReactJson src={props.json} theme="pop" />
        </div>
    );
}

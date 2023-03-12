import React from 'react';

import Wbs from '../contents/Wbs.js';

export default function NotFound () {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            overflow: 'auto',
            background: '#eeeeee',
        }}>
          <div style={{
            color: '#fff',
            fontSize: 188,
            lineHeight: '188px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <p style={{margin:0}}>404</p>
            <p style={{margin:0}}>Not Found</p>
          </div>

          <div>
            <Wbs wbs_id={1029}/>
          </div>
        </div>
    );
}

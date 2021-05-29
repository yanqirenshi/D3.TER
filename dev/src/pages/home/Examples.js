import React from 'react';

// import Asshole from './examples/Asshole.js';
import D3TER from '../../libs/components/D3TER.js';

const style = {
    root: {
        width:'100%',
        height: '100%',
        padding: 22
    }
};

export default function Examples() {
    const camera = {
        look:  {
            at: {
                x:0,
                y:0,
            },
        },
        scale: null,
    };

    return (
        <div style={style.root}>
          <div style={{height:'100%'}}>
            <D3TER />
          </div>
        </div>
    );
}

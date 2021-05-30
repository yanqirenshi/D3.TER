import React from 'react';

import {DiagramClass, Attributes, Methods} from '../../../components/Common.js';

const style = {
    root: {
        display: 'flex',
        marginTop: 22,
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
    const column_width = props.column_width || 100;
    const gutter = props.gutter || 10;

    return (
        <div style={style.root}>
          <div style={style.left}>
            <DiagramClass data={props.data} />
          </div>

          <div style={style.right}>
            <Attributes data={props.data} column_width={column_width} gutter={gutter} />
            <Methods    data={props.data} column_width={column_width} gutter={gutter} />
          </div>
        </div>
    );
}

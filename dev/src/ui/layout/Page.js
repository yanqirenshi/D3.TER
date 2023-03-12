import React from 'react';

const style = {
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    overflow: 'hidden',
};

export default function Page (props) {
    const children = props.children;

    return (
        <div style={style} code="xxx">
          {children}
        </div>
    );
}

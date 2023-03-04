import React from 'react';

export default function TabContents (props) {
    const code = props.code;
    const tabs = props.tabs;
    const children = props.children;

    const style = {
        width: '100%',
        height: '100%',
    };

    if (tabs.selected!==code)
        style.display = 'none';

    return (
        <div style={style}>
          {children}
        </div>
    );
}

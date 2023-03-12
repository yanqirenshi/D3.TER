import React from 'react';

import MLink from '@mui/material/Link';

export default function Link (props) {
    const href = props.href;
    const children = props.children || null;

    return (
        <MLink href={href} color="#333333">
          {children}
        </MLink>
    );
}

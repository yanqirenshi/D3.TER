import React from 'react';

import Typography from '@mui/material/Typography';

export default function Pre (props) {
    const conents = props.conents;
    const caption = props.caption;

    const style = {
        padding: 22,
        background: 'rgba(25, 118, 210, 0.08)',
        borderRadius: 5
    };

    if (caption)
        style.marginTop = 0;

    return (
        <>
          {caption &&
           <Typography variant="caption">
             {caption}
           </Typography>}

          <pre style={style}>
            <code>
              {conents.join('\n')}
            </code>
          </pre>
        </>
    );
}

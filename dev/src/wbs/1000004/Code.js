import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const style = {
    display: 'flex',
    flexDirection: 'column',
    margin:22,
    width: 444,
    title: {
        padding:11,
        paddingRight:11,
        wordBreak: 'break-all',
    },
    description: {
        paddingLeft:11,
        paddingRight:11,
        wordBreak: 'break-all',
    },
    code: {
        fontSize: 16,
        marginBottom:8,
        background: '#fafafa',
        flexGrow: 1,
        overflow: 'auto',
        pre: {
            padding: 11,
        }
    }
};

export default function Code (props) {
    const data = props.data;

    return (
        <Paper elevation={1} style={style}>

          <div style={style.title}>
            <Typography variant="h6" gutterBottom>
              {data.title}
            </Typography>
          </div>

          <div style={style.description}>
            <Typography variant="body1" gutterBottom>
              {data.description}
            </Typography>
          </div>

          <div style={style.code}>
            <pre style={style.code.pre}>
              {data.contents.join('\n')}
            </pre>
          </div>
        </Paper>
    );
}

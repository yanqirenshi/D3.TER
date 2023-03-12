import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
    DiagramClass,
    Attributes,
    Methods,
} from '../components/Common.js';

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
        <Box>
          <Container style={style.root}>
            <Box style={style.left}>
              <DiagramClass data={props.data} />
            </Box>

            <Box style={style.right}>
              <Box>
                <Attributes data={props.data} column_width={column_width} gutter={gutter} />
              </Box>

              <Box sx={{mt:'55px'}}>
                <Methods    data={props.data} column_width={column_width} gutter={gutter} />
              </Box>
            </Box>
          </Container>
        </Box>
    );
}

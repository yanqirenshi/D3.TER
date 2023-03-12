import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const style ={};

export default function AuthStatePersistence () {
    return (
        <Box style={style}>
          <Paper elevation={0}>
            <Link href="https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=ja">
              認証状態の永続性
            </Link>
          </Paper>
        </Box>
    );
}

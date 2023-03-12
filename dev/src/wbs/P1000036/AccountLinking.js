import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const style ={};

export default function AccountLinking () {
    return (
        <Box style={style}>
          <Paper elevation={0}>
            <Link href="https://firebase.google.com/docs/auth/web/account-linking?hl=ja">
              JavaScriptを使用して複数の認証プロバイダーをアカウントにリンクする
            </Link>
          </Paper>
        </Box>
    );
}

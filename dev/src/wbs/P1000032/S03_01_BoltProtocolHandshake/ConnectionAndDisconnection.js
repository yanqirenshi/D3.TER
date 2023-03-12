import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Text from '../common/Text.js';

export default function ConnectionAndDisconnection () {
    return (
        <Paper elevation={0} sx={{mb:'55px'}}>
          <Text en="Bolt communication is intended to take place over a TCP connection.">
            <Typography>Bolt 通信は、TCP 接続を介して行われることを意図しています。</Typography>
          </Text>
          <Text en="The default port is TCP 7687 but any port can be used.">
            <Typography>デフォルトのポートは TCP 7687 ですが、任意のポートを使用できます。</Typography>
          </Text>


          <Text en="There is no formal shutdown procedure for a Bolt connection.">
            <Typography>Bolt 接続の正式なシャットダウン手順はありません。</Typography>
          </Text>
          <Text en="Either peer may close the connection at TCP level at any time.">
            <Typography>どちらのピアも、いつでも TCP レベルで接続を閉じることができます。</Typography>
          </Text>
          <Text en="Both client and server should be prepared for that to occur and should handle it appropriately.">
            <Typography>クライアントとサーバーの両方で、それが発生するように準備し、適切に処理する必要があります。</Typography>
          </Text>
        </Paper>
    );
}

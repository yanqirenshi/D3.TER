import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Text from '../common/Text.js';

export default function Endianness () {
    return (
        <Paper elevation={0} sx={{mb:'55px'}}>
          <Text en="Bolt requires that all values that can vary by endianness should be transmitted using network byte order, also known as big-endian byte order.">
            <Typography>Bolt では、エンディアンによって異なる可能性があるすべての値をネットワーク バイト オーダー (ビッグ エンディアン バイト オーダーとも呼ばれます) を使用して送信する必要があります。</Typography>
          </Text>

          <Text en="This means that the most significant part of the value is written to the network or memory space first and the least significant part is written last.">
            <Typography>これは、値の最上位部分が最初にネットワークまたはメモリ空間に書き込まれ、最下位部分が最後に書き込まれることを意味します。</Typography>
          </Text>
        </Paper>
    );
}

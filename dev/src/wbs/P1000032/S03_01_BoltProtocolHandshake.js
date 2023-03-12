import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Text from './common/Text.js';

import Endianness from './S03_01_BoltProtocolHandshake/Endianness.js';
import ConnectionAndDisconnection from './S03_01_BoltProtocolHandshake/ConnectionAndDisconnection.js';
import Handshake from './S03_01_BoltProtocolHandshake/Handshake.js';
import BoltVersion43 from './S03_01_BoltProtocolHandshake/BoltVersion43.js';
import BoltVersion40 from './S03_01_BoltProtocolHandshake/BoltVersion40.js';

export default function S03_01_BoltProtocolHandshake () {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Box sx={{p:'22px', pb: '222px'}}>

          <Typography variant="h3" sx={{mb:'55px'}}>
            Bolt Protocol handshake specification
          </Typography>

          <Paper elevation={0} sx={{mb:'55px'}}>
            <Text en="All Bolt connections begin with a handshake to negotiate which version of the messaging protocol to use.">
              <Typography>すべての Bolt 接続は、使用するメッセージング プロトコルのバージョンをネゴシエートするためのハンドシェイクから始まります。</Typography>
            </Text>

            <Text en="Following a successful negotiation, the agreed messaging protocol then takes ownership of the connection for the remainder of its lifetime.">
              <Typography>ネゴシエーションが成功すると、合意されたメッセージング プロトコルが、残りの存続期間にわたって接続の所有権を取得します。</Typography>
            </Text>

            <Text en="The handshake itself is not versioned.">
              <Typography>ハンドシェイク自体はバージョン管理されていません。</Typography>
            </Text>

            <Text en="Bolt is a client-server protocol designed primarily for executing queries against a database server.">
              <Typography>Bolt は、主にデータベース サーバーに対してクエリを実行するために設計されたクライアント サーバー プロトコルです。</Typography>
            </Text>

            <Text en="Communication occurs through request-response exchanges, in much the same way as HTTP.">
              <Typography>通信は、HTTP とほぼ同じ方法で、要求と応答の交換を通じて行われます。</Typography>
            </Text>

            <Text en="Unlike HTTP, however, Bolt connections are stateful.">
              <Typography>ただし、HTTP とは異なり、Bolt 接続はステートフルです。</Typography>
            </Text>
          </Paper>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Endianness" value="1" />
                <Tab label="Connection and disconnection" value="2" />
                <Tab label="Handshake" value="3" />
                <Tab label="Bolt version 4.3" value="4" />
                <Tab label="Bolt version 4.0" value="5" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <Endianness/>
            </TabPanel>

            <TabPanel value="2">
              <ConnectionAndDisconnection/>
            </TabPanel>

            <TabPanel value="3">
              <Handshake/>
            </TabPanel>

            <TabPanel value="4">
              <BoltVersion43/>
            </TabPanel>

            <TabPanel value="5">
              <BoltVersion40/>
            </TabPanel>
          </TabContext>
        </Box>
    );
}

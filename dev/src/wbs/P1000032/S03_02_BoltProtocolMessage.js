import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Text from './common/Text.js';

export default function S03_02_BoltProtocolMessage () {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Box sx={{p:'22px', pb: '222px'}}>

          <Typography variant="h3" sx={{mb:'55px'}}>
            Bolt Protocol message specification
          </Typography>

          <Paper elevation={0} sx={{mb:'55px'}}>
            <div>
              <Text en="The message specification describes the message exchanges that take place on a connection following a successful Bolt handshake.">
                <Typography>
                  メッセージ仕様では、Bolt ハンドシェイクが成功した後に接続で行われるメッセージ交換について説明します。
                </Typography>
              </Text>
              <Text en="For details of establishing a connection and performing a handshake, see Bolt Protocol handshake specification.">
                <Typography>
                  接続の確立とハンドシェイクの実行の詳細については、「Bolt プロトコル ハンドシェイク仕様」を参照してください。
                </Typography>
              </Text>
            </div>

            <div style={{marginTop:22}}>
              <Text en="The Bolt protocol communicates with specific versioned messages.">
                <Typography>
                  Bolt プロトコルは、特定のバージョン管理されたメッセージと通信します。
                </Typography>
              </Text>
            </div>
          </Paper>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="server state specification" value="1" />
                <Tab label="Message exchange" value="2" />
                <Tab label="Messages" value="3" />
                <Tab label="Summary of changes per version" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1">
            </TabPanel>

            <TabPanel value="2">
            </TabPanel>

            <TabPanel value="3">
            </TabPanel>

            <TabPanel value="4">
            </TabPanel>
          </TabContext>
        </Box>
    );
}

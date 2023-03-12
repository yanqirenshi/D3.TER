import React from 'react';

import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Version1 from './S02/Version1.js';
import GeneralRepresentation from './S02/GeneralRepresentation.js';
import DataTypes from './S02/DataTypes.js';

import Text from './common/Text.js';

export default function S02_PackStream () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{pt: '33px'}}>
          <Typography variant="h3" gutterBottom>PackStream</Typography>

          <Box sx={{mb:'55px'}}>
            <Text en="PackStream is a binary presentation format for the exchange of richly-typed data. It provides a syntax layer for the Bolt messaging protocol.">
              <Typography>PackStream は バイナリ プレゼンテーション フォーマットです。</Typography>
              <Typography>豊富に型指定されたデータを交換するためのものです。</Typography>
              <Typography>Bolt メッセージング プロトコルの構文レイヤーを提供します。</Typography>
            </Text>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Version 1" {...a11yProps(0)} />
              <Tab label="General representation" {...a11yProps(1)} />
              <Tab label="Data types" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <Version1/>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <GeneralRepresentation/>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <DataTypes/>
          </TabPanel>

        </Box>
    );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel"
             hidden={value !== index}
             id={`simple-tabpanel-${index}`}
             aria-labelledby={`simple-tab-${index}`}
             {...other}>
          {value === index && (
              <Box sx={{ p: 0 }}>
                <Typography>{children}</Typography>
              </Box>
          )}
        </div>
    );
}

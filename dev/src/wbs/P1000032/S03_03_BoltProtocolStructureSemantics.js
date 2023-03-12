import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Text from './common/Text.js';

export default function S03_03_BoltProtocolStructureSemantics () {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Box sx={{p:'22px', pb: '222px'}}>

          <Typography variant="h3" sx={{mb:'55px'}}>
            Structure Semantics
          </Typography>

          <Paper elevation={0} sx={{mb:'55px'}}>
            <div>
              <Text en="While PackStream defines what a Structure looks like, it does not define what it means.">
                {/* <Typography> */}
                {/* </Typography> */}
              </Text>
              <Text en="The semantics of Structures are bound to the Bolt Protocol version.">
                {/* <Typography> */}
                {/* </Typography> */}
              </Text>
            </div>

            <div style={{marginTop:22}}>
              <Text en="The table below lists the PackStream specified structures and their code and tag byte across all currently existing Bolt Protocol versions.">
                {/* <Typography> */}
                {/* </Typography> */}
              </Text>
            </div>
          </Paper>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Structures" value="1" />
                <Tab label="Legacy Structures" value="2" />
                <Tab label="Summary of changes per version" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1">
            </TabPanel>

            <TabPanel value="2">
            </TabPanel>

            <TabPanel value="3">
            </TabPanel>

          </TabContext>
        </Box>
    );
}

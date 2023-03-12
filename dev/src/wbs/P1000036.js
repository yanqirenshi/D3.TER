import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import AccountLinking from './P1000036/AccountLinking.js';
import AuthStatePersistence from './P1000036/AuthStatePersistence.js';

const style ={
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000036 () {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box style={style}>
          <Box>
          </Box>

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab label="複数の認証プロバイダをリンクする" value="8" />
                  <Tab label="Google" value="2" />
                  <Tab label="Twitter" value="3" />
                  <Tab label="Github" value="4" />
                  <Tab label="Apple" value="5" />
                  <Tab label="Facebook" value="6" />
                  <Tab label="Microsoft" value="7" />
                  <Tab label="認証状態の永続性" value="9" />
                  <Tab label="概要" value="1" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <Typography>
                  <Link href="https://console.firebase.google.com/u/0/project/foodies-party/authentication/users">
                    Authentication
                  </Link>,
                  <Link href="https://firebase.google.com/docs/auth?hl=ja">
                    Manual
                  </Link>
                </Typography>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
              <TabPanel value="3"></TabPanel>
              <TabPanel value="4"></TabPanel>
              <TabPanel value="5"></TabPanel>
              <TabPanel value="6"></TabPanel>
              <TabPanel value="7"></TabPanel>
              <TabPanel value="8">
                <AccountLinking/>
              </TabPanel>
              <TabPanel value="9">
                <AuthStatePersistence/>
              </TabPanel>
            </TabContext>
          </Box>

        </Box>
    );
}

import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';

import Hamburger from './global_app_bar/Hamburger.js';
import Title from './global_app_bar/Title.js';

import sogh from '../manegers/sogh.js';

export default function GlobalAppBar (props) {
    const data = props.data;
    const mode = props.mode;

    const user = sogh.viewer();

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Hamburger />

              <Title mode={mode} data={data}/>

              {user && (
                  <Avatar alt={user.login()} src={user.avatarUrl()} />
              )}
            </Toolbar>
          </AppBar>
        </Box>
    );
}

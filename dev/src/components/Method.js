import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MethodSyntax from './MethodSyntax.js';

export default function Method (props) {
    const data = props.data;

    const args = (data.arguments || []).map(d => d.name);
    const ret = data.return;

    return (
        <Box style={{padding:22}}>

          <Typography variant="h4">
            {data.name}
          </Typography>

          <Box style={{padding:11}}>
            <MethodSyntax name={data.name} args={args} ret={ret}/>
          </Box>

          {data.arguments && data.arguments.length>0 &&
           <Box sx={{p:'11px', pl: '22px'}}>
             <Typography variant="h5">
               Arguments
             </Typography>

             <Box sx={{pl:'11px'}}>
               {data.arguments.map(d => {
                   return <p key={d.name}>{d.name} : {d.description}</p>;
               })}
             </Box>
           </Box>}

          <Box sx={{p:'11px', pl: '22px'}}>
            <Typography variant="h5">
              Value
            </Typography>

             <Box sx={{pl:'11px'}}>
              {data.return}
            </Box>
          </Box>

          {data.description && data.description.length > 0 &&
           <Box sx={{p:'11px', pl: '22px'}}>
             <Typography variant="h5">
               Description
             </Typography>

             <Box sx={{pl:'11px'}}>
               {data.description}
             </Box>
           </Box>}

        </Box>
    );
}

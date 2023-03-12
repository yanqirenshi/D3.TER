import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MethodSyntax (props) {
    return (
        <Box sx={{display: 'flex', background:'rgba(234, 244, 252, 0.3)', p: '8px 22px', borderRadius: '5px'}}>

          <Typography style={{fontWeight: 800, fontSize: '22px'}}>
            {props.name}
          </Typography>

          {props.args && props.args.length>0 &&
           <Typography style={{marginLeft:11, fontStyle: 'oblique', fontSize: '22px'}}>
             {props.args.map((d,i) => {
                 return <span key={i} style={i===0 ? null : {marginLeft:11}}>
                          {d}
                        </span>;
             })}
           </Typography>}

        <Typography style={{marginLeft:11, fontSize: '22px', color: '#aaa'}}>
            ⇒
          </Typography>

          <Typography style={{marginLeft:11, fontStyle: 'oblique', fontSize: '22px'}}>
            {props.ret || "NULL"}
          </Typography>
        </Box>
    );
}

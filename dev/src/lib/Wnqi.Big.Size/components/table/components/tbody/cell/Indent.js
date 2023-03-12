import React from 'react';

import TableCell from '@mui/material/TableCell';

export default function Indent (props) {
    const level = props.level;
    const leveling = props.leveling;

    const style = (i)=> leveling && i===0 ? style.cell_s_first : style.cell_s;

    return makeLevelingSpace(level).map((s,i)=> {
        return <TableCell key={s} style={style(i)}/>;
    });
}

function makeLevelingSpace (level) {
    const out = [];

    if (level>0)
        for (let i=0 ; i<level ; i++)
            out.push(i);

    return out;
};

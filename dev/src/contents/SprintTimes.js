import React from 'react';

import * as SOGH from '@yanqirenshi/sogh';

export default function SprintTimes (props) {
    const sogh = props.sogh.core;
    const repository = props.repository;

    return (
        <div style={{width:'100%', height: '100%', overflow:'auto'}}>

          {props.sogh.core &&
           <SOGH.ScrumTimeline sogh={sogh}
                               repository={repository}
                               productbacklog_url_prefix="/backlogs/" />}
        </div>
    );
}
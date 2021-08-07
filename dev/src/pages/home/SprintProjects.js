import React from 'react';

import * as SOGH from '@yanqirenshi/sogh';

export default function SprintProjects (props) {
    const sogh = props.sogh.core;
    const repository = props.repository;

    return (
        <div style={{width:'100%'}}>
          {props.sogh.core &&
           <SOGH.ScrumProjects sogh={sogh}
                               repository={repository}
                               productbacklog_url_prefix="/backlogs/" />}
        </div>
    );
}

import React from 'react';

import * as SOGH from '@yanqirenshi/sogh';

export default function Sprints (props) {
    const sogh = props.sogh.core;
    const repository = props.repository;

    return (
        <div style={{width:'100%', height: '100%', overflow:'auto'}}>

          {props.sogh.core &&
           <SOGH.SprintPlanning sogh={sogh}
                                repository={repository}
                                help={{to:'/managements/1031100015'}}/>}
        </div>
    );
}

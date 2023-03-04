import React from 'react';
import { connect } from 'react-redux';

import * as SOGH from '@yanqirenshi/sogh';

function Backlogs (props) {
    const sogh = props.sogh.core;
    const repository = props.repository;

    return (
        <div style={{width:'100%', height: '100%', overflow:'auto'}}>

          {props.sogh.core &&
           <SOGH.ProductBacklogs sogh={sogh}
                                 repository={repository}
                                 productbacklog_url_prefix="/backlogs/" />}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            sogh: state.sogh,
            repository: state.repository,
        };
    },
    (dispatch) => ({}),
)(Backlogs);

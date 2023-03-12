import React from 'react';
import { Link } from "react-router-dom";

import WBSTable from '../lib/Wnqi.Big.Size/index.js';

import WBS from '../data/WBS.js';

export default function Wbs (props) {
    const wbs_source = {
        projects:     WBS.projects.list,
        wbs:          WBS.wbs.list,
        workpackages: WBS.wp.list,
        edges:        WBS.edges.list,
    };

    const start_id = props.wbs_id;

    const options = {}; // or null
    const style_table = { fontSize: '16px' }; // or null

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{padding: '33px', width: 888}}>
            <WBSTable source={wbs_source}
                      columns={columns()}
                      options={options}
                      style={style_table}
                      start_id={start_id}/>
          </div>
        </div>
    );

}

function columns () {
    return [
        {
            label: 'Code',
            required: true,
            contents: (c, d) => {
                return <Link to={`/wbs/${d._id}`}>{d._id}</Link>;
            },
        },
        {
            label: 'Name',
            leveling: true,
            required: true,
            contents: (c, d) => d.label,
        },
        {
            label: 'Description',
            contents: (c, d) => d.description,
        },
    ];
}

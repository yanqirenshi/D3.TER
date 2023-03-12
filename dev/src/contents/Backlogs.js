import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinkMaterial from '@mui/material/Link';

import { ProjectV2Items } from 'sogh';

import sogh from '../manegers/sogh.js';

import { fetchProject, fetchProjectItems } from '../slices/page_admin.js';

export default function Backlogs () {
    const state = useSelector(state => state.page_admin.backlogs);
    const dispatch = useDispatch();

    const project_id = process.env.REACT_APP_GITHUB_PROJECTSV2_ID;

    if (!project_id)
        return null;

    if (state.project.start===null)
        dispatch(fetchProject(project_id));

    const project = sogh.projectV2(project_id);

    if (project && state.items.start===null)
        dispatch(fetchProjectItems(project));

    const table_data = makeTableData(project, state.items.data);

    return (
        <div style={{width:'100%', height: '100%'}}>
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>

            {project &&
             <div style={{width: 1000, paddingTop:33}}>
               <h1>
                 <span style={{marginRight:11}}>
                   {project.title()}
                 </span>

                 <span>
                   (
                   <LinkMaterial href={project.url()}>
                     {project.number()}
                   </LinkMaterial>
                   )
                 </span>
               </h1>
             </div>}

            <div style={{width: 1000, paddingTop:11}}>
              <ProjectV2Items data={table_data} sogh={sogh}/>
            </div>

          </div>
        </div>
    );
}

function makeTableData (project, items) {
    return {
        fields: project ? project.fields() : [],
        items: items,
    };
}

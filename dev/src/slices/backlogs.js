import { createSlice } from '@reduxjs/toolkit';

// import sogh from '../manegers/sogh.js';

export const backlogs = createSlice({
    name: 'contents/backlogs',
    initialState: {
        project: {
            start: null,
            end: null,
        },
        items: {
            start: null,
            end: null,
        },
    },
    reducers: {
        // fetchProject
        started_fetchProject: (state, action) => {
            // state.life.root.start = timestamp();
            // state.life.root.end = null;
        },
        successed_fetchProject: (state, action) => {
            // state.life.root.end = timestamp();

            // const data = action.payload.results[0].data[0];

            // maneger.rootNode(maneger.record2node(data));
        },
        failed_fetchProject: (state, action) => {
            // state.life.root.end = timestamp();
        },
    },
});

export const {
    started_fetchProject,
    successed_fetchProject,
    failed_fetchProject,
} = backlogs.actions;

export function fetchProject (project_id) {
    return (dispatch)=> {
        // dispatch(started_fetchProject());

        // sogh.fetchProjectsV2ByID(
        //     data=>  dispatch(successed_fetchProject(data)),
        //     error=> dispatch(failed_fetchProject(error)),
        // );
    };
}

export function fetchProjectItems (project) {
    return (dispatch)=> {
        // dispatch(started_fetchProject());

        // neo4j.getRootOrganism(
        //     data=>  dispatch(successed_fetchProject(data)),
        //     error=> dispatch(failed_fetchProject(error)),
        // );
    };
}

export default backlogs.reducer;

import { createSlice } from '@reduxjs/toolkit';

import neo4j from '../manegers/Neo4j.js';

export const books = createSlice({
    name: 'contents/books',
    initialState: {
        create_book: {
            active: false,
            data: {
            },
        },
    },
    reducers: {
        //
        opened_createBook: (state, action)=> {
        },
        closeed_createBook: (state, action)=> {
        },
        // fetchProject
        started_createBook: (state, action) => {
            // state.life.root.start = timestamp();
            // state.life.root.end = null;
        },
        successed_createBook: (state, action) => {
            // state.life.root.end = timestamp();

            // const data = action.payload.results[0].data[0];

            // maneger.rootNode(maneger.record2node(data));
        },
        failed_createBook: (state, action) => {
            // state.life.root.end = timestamp();
        },
    },
});

export const {
    started_createBook,
    successed_createBook,
    failed_createBook,
} = books.actions;

export function openCreateBook () {
    return true;
}

export function closeCreateBook () {
    return false;
}

export function createBook (project_id) {
    return (dispatch)=> {
        // dispatch(started_createBook());

        // neo4j.createBook(
        //     data=>  dispatch(successed_createBook(data)),
        //     error=> dispatch(failed_createBook(error)),
        // );
    };
}

export default books.reducer;
